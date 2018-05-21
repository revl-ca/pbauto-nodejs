const command = require('./PBAutoCommands');
const { sleepFor, setVolume } = require('./PBMacros');

(async () => {
  await command.SetParamInt(1, 2, 'Volume', 4, false, false)
})()
