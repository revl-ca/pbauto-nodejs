const net = require('net')
const { hexy } = require('hexy')

const commandList = require('./PBAutoCommandList.json')
const enumList = require('./PBAutoEnumList.json')
const { packet_header, packet_checksum, encode_byte, encode_short, encode_int, encode_int64, encode_double, encode_string_narrow, encode_string_wide, encode_bool, encode_int_buffer, encode_byte_buffer, encode_data_type, encode_sys_repeat } = require('./PBHelper.js')

const client = new net.Socket()
const DEBUG = process.env.NODE_ENV !== 'production'
let connected = false
let awaitingData = false

let config = {
  host: '127.0.0.1',
  port: 6211,
  pbDomain: 0,
  level: 'warn'
}

client.on('close', () => {})
client.on('error', err => {})
client.on('timeout', () => {})

const setConfig = params => {
  config = { ...config, params }
}

const connect = () => new Promise((resolve, reject) => {
  if (connected) resolve()

  client.connect(config.port, config.host, () => {
    connected = true
    resolve()
  })

  setTimeout(() => {
    client.emit('timeout')

    reject()
  }, 10000)
})

const disconnect = (force = false) => new Promise(resolve => {
  if (connected || force) client.disconnect(resolve)
})

const execute = (command, params = {}) => new Promise((resolve, reject) => {
  command = commandList[command]

  try {
    if (!command) throw new Error(`Unknown command: ${command}`)
    //if (!connected) throw new Error(`Disconnected`)
    if (command.recv.length && awaitingData) throw new Error(`Cannot call multiple commands that expect a return at once`)

    console.log(`Calling ${command.name} with params`, params)

    if (command.recv.length) awaitingData = true

    let data = [encode_short(command.code)]

    command.send.forEach(param => {
      if (params[param.name] === undefined) throw new Error(`Undefined parameter: ${param.name}`)

      data.push(encodeParam(param.type, params[param.name]))
    })

    data = Buffer.concat(data)
    const header = packet_header(config.pbDomain, data.length)
    const message = Buffer.concat([header, data])

    if (DEBUG) console.info(hexy(message))

    if (!command.recv.length) return client.write(message, null, resolve)

    client
      .on('data', data => readMessage(data, command.recv, command.code, resolve, reject))
      .write(message)
  } catch(error) {
    console.error(error)
    reject(error)
  }
})

const readMessage = (data, params, code, resolve, reject) => {
  awaitingData = false
  client.removeAllListeners('data')

  try {
    if (data.toString('ASCII', 0, 4) !== 'PBAU') throw new Error(`Wrong response ID`)

    const body = Buffer.alloc(12)
    data.copy(body, 0, 4, 16)

    const checksum = packet_checksum(body)

    if (data.readUInt8(16) !== checksum) throw new Error(`Bad response checksum: read ${data.readUInt8(16)}, expected ${checksum}`)

    // validate reply
    if (!validateReply(data, code)) throw new Error(`Response command ID mismatch: expected ${data}, got ${code}`)

    let offset = 19
    const response = {}

    params.forEach(param => {
      const decoded = decodeParam(data, offset, parameter.type)

      offset += decoded.size
      response[parameter.name] = decoded.value
    })

    if (offset !== data.length) throw new Exception(`Response length does not match parameters definition`)

    resolve(response)
  } catch(error) {
    console.error(error)
    reject(error)
  }
}

const validateReply = (replyBuffer, expectedCommand) => {

}

/*const encodeParams = (params = []) => {
  return params
    .map(({ type, value }) => encodeParam(type, value))
    .reduce((a, b) => Buffer.concat([a, b]))
}*/

const encodeParam = (type, value) => {
  switch (type) {
    case 'byte': return encode_byte(value)
    case 'short': return encode_short(value)
    case 'int': return encode_int(value)
    case 'int64': return encode_int64(value)
    case 'double': return encode_double(value)
    case 'string_narrow': return encode_string_narrow(value)
    case 'string_wide': return encode_string_wide(value)
    case 'bool': return encode_bool(value)
    case 'int_buffer': return encode_int_buffer(value)
    case 'byte_buffer': return encode_byte_buffer(value)
    case 'data_type': return encode_data_type(value)
    case 'sys_repeat': return encode_sys_repeat(value)
    default: throw `Encode error: Unknown parameter type "${type}"`
  }
}

const decodeParams = (params = []) => {
  return params
    .map(({ type, value }) => decodeParam(type, value))
}

const decodeParam = (type, value) => {
  switch (type) {
    case 'byte':
    case 'short':
    case 'int':
    case 'int64':
    case 'double':
    case 'string_narrow':
    case 'string_wide':
    case 'bool':
    case 'int_buffer':
    case 'byte_buffer':
    case 'data_type':
    case 'sys_repeat':
    default: throw `Encode error: Unknown parameter type "${type}"`
  }
}

const sleep = (delay = 0) => new Promise(resolve => {
  setTimeout(resolve, delay)
})

module.exports = {
  setConfig,
  connect,
  disconnect,
  sleep,
  execute
}
