const packet_checksum = buffer => {
  let sum = 0

  for (let i = 0; i < buffer.length; i++) {
    sum += buffer.readUInt8(i)
  }

  return sum % 255
}

const packet_header = (domain, length) => {
  const header = Buffer.alloc(12)

  header.writeInt8(1, 0)                   // Version, 1 byte
  header.writeUInt32BE(domain, 1)          // PB domain, 4 bytes
  header.writeUInt16BE(length, 5)          // Message body length, 2 bytes
  header.writeUInt32BE(0, 7)               // Connection ID (Unused for TCP), 4 bytes
  header.writeInt8(0, 11)                  // Protocol (TCP=0), 1 byte

  const checksum = packet_checksum(header)

  const body = Buffer.alloc(17)

  body.write('PBAU', 0, 4)                 // ID, 4 bytes
  header.copy(header, 4, 0, 12)            // Header body, 12 bytes
  body.writeInt8(checksum, 16)             // Checksum, 1 byte

  return body
}

// Unsigned byte
const encode_byte = value => {
  const buffer = Buffer.allocUnsafe(1)

  buffer.writeInt8(value, 0)

  return buffer
}

// Unsigned 16bit int
const encode_short = value => {
  const buffer = Buffer.allocUnsafe(2)

  buffer.writeUInt16BE(value, 0)

  return buffer
}

// Signed 32bit int
const encode_int = value => {
  const buffer = Buffer.allocUnsafe(4)

  buffer.writeInt32BE(value, 0)

  return buffer
}

// Signed 64bit int
const encode_int64 = value => {
  const buffer = Buffer.allocUnsafe(8)

  buffer.writeInt32BE(value >> 32, 0)
  buffer.writeInt32BE(value & 0xFFFFFFFF, 4)

  return buffer
}

// 64bit float
const encode_double = value => {
  const buffer = Buffer.allocUnsafe(8)

  buffer.writeDoubleLE(value, 0)

  return buffer
}

// Single byte character string, pascal style 16bit counter
const encode_string_narrow = value => {
  const buffer = Buffer.alloc(value.length + 2)

  buffer.writeUInt16BE(value.length, 0)
  buffer.write(value, 2, value.length, 'ascii')

  return buffer
}

// UCS-2 (16bit per char) character string, pascal style with 16bit counter
const encode_string_wide = value => {
  const counter = Buffer.alloc(2)

  counter.writeUInt16BE(value.length, 0)

  // Swapping the byte order is required because Buffer.write is little-endian un UCS-2.
  const buffer = Buffer.alloc(value.length * 2)

  buffer.write(value, 0, value.length * 2, 'ucs2')
  buffer.swap16()

  return Buffer.concat([counter, buffer])
}

// Single byte boolean, only 0 (false) or 1 (true) allowed
const encode_bool = value => {
  const buffer = Buffer.allocUnsafe(1)

  buffer.writeInt8(!!value, 0)

  return buffer
}

// Array of 32bits ints, prefixed with array size in a 32bit int.
const encode_int_buffer = values => {
  const buffer = Buffer.alloc(values.length * 4 + 4)

  buffer.writeUInt32BE(values.length, 0)

  values.forEach((_, i) => {
    buffer.writeInt32BE(values[i], i * 4 + 4)
  })

  return buffer
}

// Array of bytes, prefixed with array size in a 32bit int.
const encode_byte_buffer = values => {
  const buffer = Buffer.alloc(values.length + 4)

  buffer.writeUInt32BE(values.length, 0)

  values.forEach((_, i) => {
    buffer.writeInt8(values[i], i + 4)
  })

  return buffer
}

// TODO
const encode_data_type = value => encode_int(value)

// TODO
const encode_sys_repeat = value => encode_int(value)

module.exports = {
  packet_header,
  packet_checksum,
  encode_byte,
  encode_short,
  encode_int,
  encode_int64,
  encode_double,
  encode_string_narrow,
  encode_string_wide,
  encode_bool,
  encode_int_buffer,
  encode_byte_buffer,
  encode_data_type,
  encode_sys_repeat
}
