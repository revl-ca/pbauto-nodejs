/**
 * Pandoras Box Automation
 * Node-js v123123 @2018-03-05 02:46:33.792322 <support@coolux.de>
 */

const { execute } = require('./PBAutoCore')


/**
 * SetParamInt
 * Sets the value of a *parameter* on a *device*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {int} parameterValue - A numeric value to a corresponding parameter.
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetParamInt = (siteId, deviceId, parameterName, parameterValue, doSilent, doDirect) => {
  return execute('SetParamInt', { siteId, deviceId, parameterName, parameterValue, doSilent, doDirect })
}

/**
 * SetParamDouble
 * Sets the value of a *parameter* on a *device*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetParamDouble = (siteId, deviceId, parameterName, parameterValue, doSilent, doDirect) => {
  return execute('SetParamDouble', { siteId, deviceId, parameterName, parameterValue, doSilent, doDirect })
}

/**
 * SetParamByteTuples
 * Changes the value of a *parameter* on a *device*. This is a dedicated function for *tuples*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {int} tupleDimension - The number of elements in this tuple
 * @param {byte_buffer} tupleData - The data of the tuple collection
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetParamByteTuples = (siteId, deviceId, parameterName, tupleDimension, tupleData, doSilent, doDirect) => {
  return execute('SetParamByteTuples', { siteId, deviceId, parameterName, tupleDimension, tupleData, doSilent, doDirect })
}

/**
 * GetParam
 * Gets the value of a *parameter* of a *device*
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 * @returns {double} - A numeric value to a corresponding parameter.
 */
module.exports.GetParam = (siteId, deviceId, parameterName) => {
  return execute('GetParam', { siteId, deviceId, parameterName })
}

/**
 * GetParamByteTuples
 * Gets the value of a *parameter* of a *device*. This is a dedicated function for *tuples*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_wide} parameterName - The parameterName is a string that identifies a property of a device.
 *
 * @returns {int} - The number of elements in this tuple
 * @returns {byte_buffer} - The data of the tuple collection
 */
module.exports.GetParamByteTuples = (siteId, deviceId, parameterName) => {
  return execute('GetParamByteTuples', { siteId, deviceId, parameterName })
}

/**
 * SetParamOfKind
 * Sets the value of a *parameter* on a *device*. This function is faster than it's string-based pendant. Use this for performance!
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} parameterKindId - A numeric representation for a parameter. This is faster than using the text based identifier.
 * @param {int} parameterValue - A numeric value to a corresponding parameter.
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetParamOfKind = (siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect) => {
  return execute('SetParamOfKind', { siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect })
}

/**
 * SetParamOfKindDouble
 * Sets the value of a *parameter* on a *device*. This function is faster than it's string-based pendant. Use this for performance!
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} parameterKindId - A numeric representation for a parameter. This is faster than using the text based identifier.
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetParamOfKindDouble = (siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect) => {
  return execute('SetParamOfKindDouble', { siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect })
}

/**
 * GetParamOfKind
 * Gets the value of a *parameter* on a *device*. This function is faster than it's string-based pendant. Use this for performance!
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} parameterKindId - A numeric representation for a parameter. This is faster than using the text based identifier.
 *
 * @returns {double} - A numeric value to a corresponding parameter.
 */
module.exports.GetParamOfKind = (siteId, deviceId, parameterKindId) => {
  return execute('GetParamOfKind', { siteId, deviceId, parameterKindId })
}

/**
 * SetParamInSelection
 * Gets the value of a *parameter* of the currently selected device. If multiple devices are selected only the one is considered.
 *
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {int} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamInSelection = (parameterName, parameterValue) => {
  return execute('SetParamInSelection', { parameterName, parameterValue })
}

/**
 * SetParamInSelectionDouble
 * Gets the value of a *parameter* of the currently selected device. If multiple devices are selected only the one is considered.
 *
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamInSelectionDouble = (parameterName, parameterValue) => {
  return execute('SetParamInSelectionDouble', { parameterName, parameterValue })
}

/**
 * SetParamOfKindInSelection
 * Gets the value of a *parameter* on the currently selected *device*. This function is faster than it's string-based pendant. Use this for performance!
 *
 * @param {int} parameterKindId - A numeric representation for a parameter. This is faster than using the text based identifier.
 * @param {int} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamOfKindInSelection = (parameterKindId, parameterValue) => {
  return execute('SetParamOfKindInSelection', { parameterKindId, parameterValue })
}

/**
 * SetParamOfKindInSelectionDouble
 * Gets the value of a *parameter* on the currently selected *device*. This function is faster than it's string-based pendant. Use this for performance!
 *
 * @param {int} parameterKindId - A numeric representation for a parameter. This is faster than using the text based identifier.
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamOfKindInSelectionDouble = (parameterKindId, parameterValue) => {
  return execute('SetParamOfKindInSelectionDouble', { parameterKindId, parameterValue })
}

/**
 * SetParamLerpTime
 * Sets the smoothing / fade time of a parameter. 
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {int} smoothingTime - A time span in milliseconds that it takes for a parameter to fade to it's new value. A value of 0 means no parameter smoothing
 *
 */
module.exports.SetParamLerpTime = (siteId, deviceId, parameterName, smoothingTime) => {
  return execute('SetParamLerpTime', { siteId, deviceId, parameterName, smoothingTime })
}

/**
 * GetIsDeviceSelected
 * Gets the *selection* state of a *device*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 * @returns {byte} - States whether something is currently selected in the master interface
 */
module.exports.GetIsDeviceSelected = (siteId, deviceId) => {
  return execute('GetIsDeviceSelected', { siteId, deviceId })
}

/**
 * GetSelectedDeviceCount
 * Gets the number of selected devices.
 *
 *
 * @returns {int} - Number of devices currently in selection.
 */
module.exports.GetSelectedDeviceCount = () => {
  return execute('GetSelectedDeviceCount', {  })
}

/**
 * GetSelectedDevice
 * Gets the ID of the *device* in the *selection*. This way you can find out which devices are currently selected.
 *
 * @param {int} selectionIndex - A index for the collection of selected devices. Get selected devices count with [c:16]
 *
 * @returns {int} - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @returns {int} - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 */
module.exports.GetSelectedDevice = (selectionIndex) => {
  return execute('GetSelectedDevice', { selectionIndex })
}

/**
 * SetSequenceMediaAtTime
 * Applies a *resource* to the specified *sequence* and time.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.SetSequenceMediaAtTime = (siteId, deviceId, sequenceId, hours, minutes, seconds, frames, dmxFolderId, dmxFileId) => {
  return execute('SetSequenceMediaAtTime', { siteId, deviceId, sequenceId, hours, minutes, seconds, frames, dmxFolderId, dmxFileId })
}

/**
 * AssignResource
 * Assigns a *resource* to the specified *device*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} forMesh - When forMesh it set, the command executes it's action for the MESH parameter of the given device. When set to false it is executed on the MEDIA parameter.
 *
 */
module.exports.AssignResource = (siteId, deviceId, dmxFolderId, dmxFileId, forMesh) => {
  return execute('AssignResource', { siteId, deviceId, dmxFolderId, dmxFileId, forMesh })
}

/**
 * AssignResourceByName
 * Assigns a *resource* to the specified *device* by using the name of the *resource*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {string_wide} parameterName - The parameterName is a string that identifies a property of a device.
 * @param {bool} forMesh - When forMesh it set, the command executes it's action for the MESH parameter of the given device. When set to false it is executed on the MEDIA parameter.
 *
 */
module.exports.AssignResourceByName = (siteId, deviceId, resourcePath, parameterName, forMesh) => {
  return execute('AssignResourceByName', { siteId, deviceId, resourcePath, parameterName, forMesh })
}

/**
 * AssignResourceToSelection
 * Assigns a *resource* to the currently *selected* *device*.
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} forMesh - When forMesh it set, the command executes it's action for the MESH parameter of the given device. When set to false it is executed on the MEDIA parameter.
 *
 */
module.exports.AssignResourceToSelection = (dmxFolderId, dmxFileId, forMesh) => {
  return execute('AssignResourceToSelection', { dmxFolderId, dmxFileId, forMesh })
}

/**
 * MoveResourceToPath
 * Moves a *resource* in the *project tree*.
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {string_wide} projectPath - A path in the project. leave blank for the root folder. Subfolders are separated by a forward slash, no terminating slash is allowed.
 *
 */
module.exports.MoveResourceToPath = (resourcePath, projectPath) => {
  return execute('MoveResourceToPath', { resourcePath, projectPath })
}

/**
 * MoveTreeItem
 * Moves a *tree item* in the *project tree*.
 *
 * @param {int} itemIdFrom - Item IDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} itemIdTo - Item IDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.MoveTreeItem = (itemIdFrom, itemIdTo) => {
  return execute('MoveTreeItem', { itemIdFrom, itemIdTo })
}

/**
 * SetSequenceTransportMode
 * Sets the play/pause/stop state of the *sequence*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} transportMode - Playback status of a sequence. Possible values are 1 (Play), 2 (Stop) or 3 (Pause)
 *
 */
module.exports.SetSequenceTransportMode = (sequenceId, transportMode) => {
  return execute('SetSequenceTransportMode', { sequenceId, transportMode })
}

/**
 * GetSequenceTransportMode
 * Gets the play/pause/stop state of the *sequence*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 * @returns {int} - Playback status of a sequence. Possible values are 1 (Play), 2 (Stop) or 3 (Pause)
 */
module.exports.GetSequenceTransportMode = (sequenceId) => {
  return execute('GetSequenceTransportMode', { sequenceId })
}

/**
 * MoveSequenceToTime
 * Moves the *sequence* to given *timecode*
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.MoveSequenceToTime = (sequenceId, hours, minutes, seconds, frames) => {
  return execute('MoveSequenceToTime', { sequenceId, hours, minutes, seconds, frames })
}

/**
 * GetSequenceTime
 * Gets the current *timecode* of a *sequence*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 * @returns {int} - The HOURS part of a time or timespan
 * @returns {int} - The MINUTES part of a time or timespan
 * @returns {int} - The SECONDS part of a time or timespan
 * @returns {int} - The FRAMES part of a time or timespan
 */
module.exports.GetSequenceTime = (sequenceId) => {
  return execute('GetSequenceTime', { sequenceId })
}

/**
 * MoveSequenceToNextFrame
 * Moves the *timeline* by one frame forward or backward.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {byte} isNext - When true then the action is done to the NEXT element. When set to false then the action is done to the PREVIOUS element.
 *
 */
module.exports.MoveSequenceToNextFrame = (sequenceId, isNext) => {
  return execute('MoveSequenceToNextFrame', { sequenceId, isNext })
}

/**
 * MoveSequenceToCue
 * Moves the *sequence* to a specific *cue*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 *
 */
module.exports.MoveSequenceToCue = (sequenceId, cueId) => {
  return execute('MoveSequenceToCue', { sequenceId, cueId })
}

/**
 * MoveSequenceToNextCue
 * Moves the *sequence* to the next or previous *cue*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {byte} isNext - When true then the action is done to the NEXT element. When set to false then the action is done to the PREVIOUS element.
 *
 */
module.exports.MoveSequenceToNextCue = (sequenceId, isNext) => {
  return execute('MoveSequenceToNextCue', { sequenceId, isNext })
}

/**
 * SetSequenceTransparency
 * Sets the *sequence*'s *opacity*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} transparency - The numeric visibility from 0 (totally opaque) to 255 (fully visible)
 *
 */
module.exports.SetSequenceTransparency = (sequenceId, transparency) => {
  return execute('SetSequenceTransparency', { sequenceId, transparency })
}

/**
 * GetSequenceTransparency
 * Gets the *sequence*'s *opacity*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 * @returns {int} - The numeric visibility from 0 (totally opaque) to 255 (fully visible)
 */
module.exports.GetSequenceTransparency = (sequenceId) => {
  return execute('GetSequenceTransparency', { sequenceId })
}

/**
 * SetSequenceSMTPETimeCodeMode
 * Sets the *smpte* *timecode-mode* of a *sequence*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} timeCodeMode - The mode for the SMTPE link: 0 (None), 1 (Send) or 2 (Receive)
 *
 */
module.exports.SetSequenceSMTPETimeCodeMode = (sequenceId, timeCodeMode) => {
  return execute('SetSequenceSMTPETimeCodeMode', { sequenceId, timeCodeMode })
}

/**
 * SetSequenceSMTPETimeCodeOffset
 * Sets the *smpte* *timecode-offset* of a *sequence*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetSequenceSMTPETimeCodeOffset = (sequenceId, hours, minutes, seconds, frames) => {
  return execute('SetSequenceSMTPETimeCodeOffset', { sequenceId, hours, minutes, seconds, frames })
}

/**
 * SetSequenceSMTPETimeCodeStopAction
 * Sets the *smpte* *timecode-stop-action* of a *sequence*.
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} stopAction - Determines what should happen when the incoming timecode stops
 *
 */
module.exports.SetSequenceSMTPETimeCodeStopAction = (sequenceId, stopAction) => {
  return execute('SetSequenceSMTPETimeCodeStopAction', { sequenceId, stopAction })
}

/**
 * ResetAll
 * Resets all *site*s and *device*s.
 *
 *
 */
module.exports.ResetAll = () => {
  return execute('ResetAll', {  })
}

/**
 * ResetSite
 * Resets all *device*s of a specific *site*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.ResetSite = (siteId) => {
  return execute('ResetSite', { siteId })
}

/**
 * ResetDevice
 * Resets a specific *device*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.ResetDevice = (siteId, deviceId) => {
  return execute('ResetDevice', { siteId, deviceId })
}

/**
 * ResetParam
 * Resets a specific *parameter*.
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.ResetParam = (siteId, deviceId, parameterName) => {
  return execute('ResetParam', { siteId, deviceId, parameterName })
}

/**
 * SetAllActive
 * None
 *
 *
 */
module.exports.SetAllActive = () => {
  return execute('SetAllActive', {  })
}

/**
 * SetSiteActive
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.SetSiteActive = (siteId) => {
  return execute('SetSiteActive', { siteId })
}

/**
 * SetDeviceActive
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.SetDeviceActive = (siteId, deviceId) => {
  return execute('SetDeviceActive', { siteId, deviceId })
}

/**
 * SetParamActive
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.SetParamActive = (siteId, deviceId, parameterName) => {
  return execute('SetParamActive', { siteId, deviceId, parameterName })
}

/**
 * ClearAllActive
 * None
 *
 *
 */
module.exports.ClearAllActive = () => {
  return execute('ClearAllActive', {  })
}

/**
 * ClearActiveSite
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.ClearActiveSite = (siteId) => {
  return execute('ClearActiveSite', { siteId })
}

/**
 * ClearActiveDevice
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.ClearActiveDevice = (siteId, deviceId) => {
  return execute('ClearActiveDevice', { siteId, deviceId })
}

/**
 * ClearActiveParam
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.ClearActiveParam = (siteId, deviceId, parameterName) => {
  return execute('ClearActiveParam', { siteId, deviceId, parameterName })
}

/**
 * ToggleFullscreen
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.ToggleFullscreen = (siteId) => {
  return execute('ToggleFullscreen', { siteId })
}

/**
 * SetParamRelativeDouble
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamRelativeDouble = (siteId, deviceId, parameterName, parameterValue) => {
  return execute('SetParamRelativeDouble', { siteId, deviceId, parameterName, parameterValue })
}

/**
 * SetParamRelativeExtended
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetParamRelativeExtended = (siteId, deviceId, parameterName, parameterValue, doSilent, doDirect) => {
  return execute('SetParamRelativeExtended', { siteId, deviceId, parameterName, parameterValue, doSilent, doDirect })
}

/**
 * SetParamRelativeInSelection
 * None
 *
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {int} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamRelativeInSelection = (parameterName, parameterValue) => {
  return execute('SetParamRelativeInSelection', { parameterName, parameterValue })
}

/**
 * SetParamRelativeInSelectionDouble
 * None
 *
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamRelativeInSelectionDouble = (parameterName, parameterValue) => {
  return execute('SetParamRelativeInSelectionDouble', { parameterName, parameterValue })
}

/**
 * AddContentToPath
 * None
 *
 * @param {string_narrow} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 *
 */
module.exports.AddContentToPath = (filePath, siteId, dmxFolderId, dmxFileId, projectPath) => {
  return execute('AddContentToPath', { filePath, siteId, dmxFolderId, dmxFileId, projectPath })
}

/**
 * AddContentToTreeItem
 * None
 *
 * @param {string_narrow} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.AddContentToTreeItem = (filePath, siteId, dmxFolderId, dmxFileId, treeItemIndex) => {
  return execute('AddContentToTreeItem', { filePath, siteId, dmxFolderId, dmxFileId, treeItemIndex })
}

/**
 * AddContentFromLocalNode
 * None
 *
 * @param {string_narrow} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {short} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {short} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.AddContentFromLocalNode = (filePath, dmxFolderId, dmxFileId) => {
  return execute('AddContentFromLocalNode', { filePath, dmxFolderId, dmxFileId })
}

/**
 * AddContentFromLocalNodeToPath
 * None
 *
 * @param {string_narrow} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {short} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {short} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.AddContentFromLocalNodeToPath = (filePath, projectPath, dmxFolderId, dmxFileId) => {
  return execute('AddContentFromLocalNodeToPath', { filePath, projectPath, dmxFolderId, dmxFileId })
}

/**
 * AddContentFromLocalNodeToTreeItem
 * None
 *
 * @param {string_narrow} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {short} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {short} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.AddContentFromLocalNodeToTreeItem = (filePath, treeItemIndex, dmxFolderId, dmxFileId) => {
  return execute('AddContentFromLocalNodeToTreeItem', { filePath, treeItemIndex, dmxFolderId, dmxFileId })
}

/**
 * AddContentFromFolder
 * None
 *
 * @param {string_wide} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_wide} projectPath - A path in the project. leave blank for the root folder. Subfolders are separated by a forward slash, no terminating slash is allowed.
 *
 */
module.exports.AddContentFromFolder = (folderPath, siteId, dmxFolderId, dmxFileId, projectPath) => {
  return execute('AddContentFromFolder', { folderPath, siteId, dmxFolderId, dmxFileId, projectPath })
}

/**
 * AddContentFromLocalNodeFolder
 * None
 *
 * @param {string_wide} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {short} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {short} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.AddContentFromLocalNodeFolder = (folderPath, dmxFolderId, dmxFileId) => {
  return execute('AddContentFromLocalNodeFolder', { folderPath, dmxFolderId, dmxFileId })
}

/**
 * AddContentFromLocalNodeFolderToPath
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {short} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {short} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.AddContentFromLocalNodeFolderToPath = (folderPath, projectPath, dmxFolderId, dmxFileId) => {
  return execute('AddContentFromLocalNodeFolderToPath', { folderPath, projectPath, dmxFolderId, dmxFileId })
}

/**
 * AddContentFolderFromLocalNodeToTreeItem
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {short} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {short} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.AddContentFolderFromLocalNodeToTreeItem = (folderPath, treeItemIndex, dmxFolderId, dmxFileId) => {
  return execute('AddContentFolderFromLocalNodeToTreeItem', { folderPath, treeItemIndex, dmxFolderId, dmxFileId })
}

/**
 * RemoveMediaById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.RemoveMediaById = (dmxFolderId, dmxFileId) => {
  return execute('RemoveMediaById', { dmxFolderId, dmxFileId })
}

/**
 * RemoveMeshById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.RemoveMeshById = (dmxFolderId, dmxFileId) => {
  return execute('RemoveMeshById', { dmxFolderId, dmxFileId })
}

/**
 * RemoveContentByName
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {bool} allEquallyNamed - True: Execute action on all equally named items. False: Do action only for one/the first item having the target name.
 *
 */
module.exports.RemoveContentByName = (resourcePath, allEquallyNamed) => {
  return execute('RemoveContentByName', { resourcePath, allEquallyNamed })
}

/**
 * RemoveTreeItem
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.RemoveTreeItem = (treeItemIndex) => {
  return execute('RemoveTreeItem', { treeItemIndex })
}

/**
 * RemoveAllResources
 * None
 *
 * @param {bool} removeFolder - True: Remove folders. False: Keep folder structure.
 *
 */
module.exports.RemoveAllResources = (removeFolder) => {
  return execute('RemoveAllResources', { removeFolder })
}

/**
 * SetContentId
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {short} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {short} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.SetContentId = (resourcePath, dmxFolderId, dmxFileId) => {
  return execute('SetContentId', { resourcePath, dmxFolderId, dmxFileId })
}

/**
 * SpreadAll
 * None
 *
 *
 */
module.exports.SpreadAll = () => {
  return execute('SpreadAll', {  })
}

/**
 * SpreadMediaById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.SpreadMediaById = (dmxFolderId, dmxFileId) => {
  return execute('SpreadMediaById', { dmxFolderId, dmxFileId })
}

/**
 * SpreadMeshById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.SpreadMeshById = (dmxFolderId, dmxFileId) => {
  return execute('SpreadMeshById', { dmxFolderId, dmxFileId })
}

/**
 * ReloadMediaById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.ReloadMediaById = (dmxFolderId, dmxFileId) => {
  return execute('ReloadMediaById', { dmxFolderId, dmxFileId })
}

/**
 * ReloadMeshById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.ReloadMeshById = (dmxFolderId, dmxFileId) => {
  return execute('ReloadMeshById', { dmxFolderId, dmxFileId })
}

/**
 * ReloadResource
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 *
 */
module.exports.ReloadResource = (resourcePath) => {
  return execute('ReloadResource', { resourcePath })
}

/**
 * SpreadResource
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 *
 */
module.exports.SpreadResource = (resourcePath) => {
  return execute('SpreadResource', { resourcePath })
}

/**
 * ReloadAndSpreadResourceByPath
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 *
 */
module.exports.ReloadAndSpreadResourceByPath = (resourcePath) => {
  return execute('ReloadAndSpreadResourceByPath', { resourcePath })
}

/**
 * ReloadAndSpreadResourceByTreeItem
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.ReloadAndSpreadResourceByTreeItem = (treeItemIndex) => {
  return execute('ReloadAndSpreadResourceByTreeItem', { treeItemIndex })
}

/**
 * ReloadAndSpreadResourceByDmxId
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.ReloadAndSpreadResourceByDmxId = (dmxFolderId, dmxFileId) => {
  return execute('ReloadAndSpreadResourceByDmxId', { dmxFolderId, dmxFileId })
}

/**
 * RemoveInconsistent
 * None
 *
 *
 */
module.exports.RemoveInconsistent = () => {
  return execute('RemoveInconsistent', {  })
}

/**
 * RemoveAssetOnSite
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.RemoveAssetOnSite = (resourcePath, siteId) => {
  return execute('RemoveAssetOnSite', { resourcePath, siteId })
}

/**
 * RemoveAssetOnSiteById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.RemoveAssetOnSiteById = (dmxFolderId, dmxFileId, siteId) => {
  return execute('RemoveAssetOnSiteById', { dmxFolderId, dmxFileId, siteId })
}

/**
 * RemoveAssetOnSiteByTreeItem
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.RemoveAssetOnSiteByTreeItem = (treeItemIndex, siteId) => {
  return execute('RemoveAssetOnSiteByTreeItem', { treeItemIndex, siteId })
}

/**
 * AttachAssetOnSite
 * None
 *
 * @param {string_wide} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.AttachAssetOnSite = (filePath, resourcePath, siteId) => {
  return execute('AttachAssetOnSite', { filePath, resourcePath, siteId })
}

/**
 * AttachAssetOnSiteByDmxId
 * None
 *
 * @param {string_wide} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.AttachAssetOnSiteByDmxId = (filePath, dmxFolderId, dmxFileId, siteId) => {
  return execute('AttachAssetOnSiteByDmxId', { filePath, dmxFolderId, dmxFileId, siteId })
}

/**
 * AttachAssetOnSiteByTreeItem
 * None
 *
 * @param {string_wide} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.AttachAssetOnSiteByTreeItem = (filePath, treeItemIndex, siteId) => {
  return execute('AttachAssetOnSiteByTreeItem', { filePath, treeItemIndex, siteId })
}

/**
 * StoreActive
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 */
module.exports.StoreActive = (sequenceId) => {
  return execute('StoreActive', { sequenceId })
}

/**
 * StoreActiveToTime
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.StoreActiveToTime = (sequenceId, hours, minutes, seconds, frames) => {
  return execute('StoreActiveToTime', { sequenceId, hours, minutes, seconds, frames })
}

/**
 * SetMediaFrameBlendingById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} frameBlended - Enable/Disable FluidFrame
 *
 */
module.exports.SetMediaFrameBlendingById = (dmxFolderId, dmxFileId, frameBlended) => {
  return execute('SetMediaFrameBlendingById', { dmxFolderId, dmxFileId, frameBlended })
}

/**
 * SetMediaDeinterlacingById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} deinterlacer - Sets the deinterlacing mode
 *
 */
module.exports.SetMediaDeinterlacingById = (dmxFolderId, dmxFileId, deinterlacer) => {
  return execute('SetMediaDeinterlacingById', { dmxFolderId, dmxFileId, deinterlacer })
}

/**
 * SetMediaAnisotropicFilteringById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} useFiltering - Anisotropic Filtering
 *
 */
module.exports.SetMediaAnisotropicFilteringById = (dmxFolderId, dmxFileId, useFiltering) => {
  return execute('SetMediaAnisotropicFilteringById', { dmxFolderId, dmxFileId, useFiltering })
}

/**
 * SetMediaUnderscanById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} useUnderscan - Underscan for media
 *
 */
module.exports.SetMediaUnderscanById = (dmxFolderId, dmxFileId, useUnderscan) => {
  return execute('SetMediaUnderscanById', { dmxFolderId, dmxFileId, useUnderscan })
}

/**
 * SetMediaMpegColourSpaceById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} useMpegColorSpace - Convert MPEG color space to full 24bit
 *
 */
module.exports.SetMediaMpegColourSpaceById = (dmxFolderId, dmxFileId, useMpegColorSpace) => {
  return execute('SetMediaMpegColourSpaceById', { dmxFolderId, dmxFileId, useMpegColorSpace })
}

/**
 * SetMediaAlphaChannelById
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} useAlphaChannel - Enables the use of the alpha channel
 *
 */
module.exports.SetMediaAlphaChannelById = (dmxFolderId, dmxFileId, useAlphaChannel) => {
  return execute('SetMediaAlphaChannelById', { dmxFolderId, dmxFileId, useAlphaChannel })
}

/**
 * CreateTextInput
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} text 
 *
 */
module.exports.CreateTextInput = (dmxFolderId, dmxFileId, text) => {
  return execute('CreateTextInput', { dmxFolderId, dmxFileId, text })
}

/**
 * SetText
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} text 
 *
 */
module.exports.SetText = (dmxFolderId, dmxFileId, text) => {
  return execute('SetText', { dmxFolderId, dmxFileId, text })
}

/**
 * LoadProject
 * None
 *
 * @param {string_narrow} folderPathToProject - A Windows-Styled path to a folder. ("C:cooluxcontentprojectsmyproject")
 * @param {string_narrow} projectXmlFileName - The name of the XML file of the project. ("myproject.xml")
 * @param {byte} saveExisting 
 *
 */
module.exports.LoadProject = (folderPathToProject, projectXmlFileName, saveExisting) => {
  return execute('LoadProject', { folderPathToProject, projectXmlFileName, saveExisting })
}

/**
 * CloseProject
 * None
 *
 * @param {byte} save 
 *
 */
module.exports.CloseProject = (save) => {
  return execute('CloseProject', { save })
}

/**
 * ClearSelection
 * None
 *
 *
 */
module.exports.ClearSelection = () => {
  return execute('ClearSelection', {  })
}

/**
 * SetDeviceAcceptDmxById
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {byte} acceptDmx 
 *
 */
module.exports.SetDeviceAcceptDmxById = (siteId, deviceId, acceptDmx) => {
  return execute('SetDeviceAcceptDmxById', { siteId, deviceId, acceptDmx })
}

/**
 * SetSiteAcceptDmxById
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {byte} acceptDmx 
 *
 */
module.exports.SetSiteAcceptDmxById = (siteId, acceptDmx) => {
  return execute('SetSiteAcceptDmxById', { siteId, acceptDmx })
}

/**
 * SetDeviceDmxAddressById
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} index 
 * @param {int} id1 
 * @param {int} id2 
 *
 */
module.exports.SetDeviceDmxAddressById = (siteId, deviceId, index, id1, id2) => {
  return execute('SetDeviceDmxAddressById', { siteId, deviceId, index, id1, id2 })
}

/**
 * SetSiteDmxAddressById
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} index 
 * @param {int} id1 
 * @param {int} id2 
 *
 */
module.exports.SetSiteDmxAddressById = (siteId, index, id1, id2) => {
  return execute('SetSiteDmxAddressById', { siteId, index, id1, id2 })
}

/**
 * SetCuePlayMode
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 * @param {int} playMode 
 *
 */
module.exports.SetCuePlayMode = (sequenceId, cueId, playMode) => {
  return execute('SetCuePlayMode', { sequenceId, cueId, playMode })
}

/**
 * SetNextCuePlayMode
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} playMode 
 *
 */
module.exports.SetNextCuePlayMode = (sequenceId, playMode) => {
  return execute('SetNextCuePlayMode', { sequenceId, playMode })
}

/**
 * SetIgnoreNextCue
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {byte} doIgnore 
 *
 */
module.exports.SetIgnoreNextCue = (sequenceId, doIgnore) => {
  return execute('SetIgnoreNextCue', { sequenceId, doIgnore })
}

/**
 * SaveProject
 * None
 *
 *
 */
module.exports.SaveProject = () => {
  return execute('SaveProject', {  })
}

/**
 * SetIsSiteFullscreen
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {byte} isFullscreen 
 *
 */
module.exports.SetIsSiteFullscreen = (siteId, isFullscreen) => {
  return execute('SetIsSiteFullscreen', { siteId, isFullscreen })
}

/**
 * SetIsSiteFullscreenByIp
 * None
 *
 * @param {string_narrow} ipAddress 
 * @param {byte} isFullscreen 
 *
 */
module.exports.SetIsSiteFullscreenByIp = (ipAddress, isFullscreen) => {
  return execute('SetIsSiteFullscreenByIp', { ipAddress, isFullscreen })
}

/**
 * SetTextTextureSize
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} width 
 * @param {int} height 
 *
 */
module.exports.SetTextTextureSize = (dmxFolderId, dmxFileId, width, height) => {
  return execute('SetTextTextureSize', { dmxFolderId, dmxFileId, width, height })
}

/**
 * SetTextProperties
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} FontFamily 
 * @param {int} size 
 * @param {byte} style 
 * @param {byte} alignment 
 * @param {byte} colorRed 
 * @param {byte} colorGreen 
 * @param {byte} colorBlue 
 *
 */
module.exports.SetTextProperties = (dmxFolderId, dmxFileId, FontFamily, size, style, alignment, colorRed, colorGreen, colorBlue) => {
  return execute('SetTextProperties', { dmxFolderId, dmxFileId, FontFamily, size, style, alignment, colorRed, colorGreen, colorBlue })
}

/**
 * SetTextCenterOnTexture
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {byte} centerOnTexture 
 *
 */
module.exports.SetTextCenterOnTexture = (dmxFolderId, dmxFileId, centerOnTexture) => {
  return execute('SetTextCenterOnTexture', { dmxFolderId, dmxFileId, centerOnTexture })
}

/**
 * CreateTextInputWide
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_wide} text 
 *
 */
module.exports.CreateTextInputWide = (dmxFolderId, dmxFileId, text) => {
  return execute('CreateTextInputWide', { dmxFolderId, dmxFileId, text })
}

/**
 * SetTextWide
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_wide} text 
 *
 */
module.exports.SetTextWide = (dmxFolderId, dmxFileId, text) => {
  return execute('SetTextWide', { dmxFolderId, dmxFileId, text })
}

/**
 * SetSiteIpById
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {string_narrow} Ip 
 *
 */
module.exports.SetSiteIpById = (siteId, Ip) => {
  return execute('SetSiteIpById', { siteId, Ip })
}

/**
 * GetClipRemainingTime
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 * @returns {int} - The HOURS part of a time or timespan
 * @returns {int} - The MINUTES part of a time or timespan
 * @returns {int} - The SECONDS part of a time or timespan
 * @returns {int} - The FRAMES part of a time or timespan
 */
module.exports.GetClipRemainingTime = (siteId, deviceId, sequenceId) => {
  return execute('GetClipRemainingTime', { siteId, deviceId, sequenceId })
}

/**
 * GetRemainingTimeUntilNextCue
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 * @returns {int} - The HOURS part of a time or timespan
 * @returns {int} - The MINUTES part of a time or timespan
 * @returns {int} - The SECONDS part of a time or timespan
 * @returns {int} - The FRAMES part of a time or timespan
 */
module.exports.GetRemainingTimeUntilNextCue = (sequenceId) => {
  return execute('GetRemainingTimeUntilNextCue', { sequenceId })
}

/**
 * GetResourceCount
 * None
 *
 *
 * @returns {int} 
 */
module.exports.GetResourceCount = () => {
  return execute('GetResourceCount', {  })
}

/**
 * GetTreeItemCount
 * None
 *
 *
 * @returns {int} - The total number of items
 */
module.exports.GetTreeItemCount = () => {
  return execute('GetTreeItemCount', {  })
}

/**
 * CreateProjectFolder
 * None
 *
 * @param {string_wide} folderName 
 *
 */
module.exports.CreateProjectFolder = (folderName) => {
  return execute('CreateProjectFolder', { folderName })
}

/**
 * CreateProjectFolderInPath
 * None
 *
 * @param {string_wide} folderName 
 * @param {string_wide} projectPath - A path in the project. leave blank for the root folder. Subfolders are separated by a forward slash, no terminating slash is allowed.
 *
 */
module.exports.CreateProjectFolderInPath = (folderName, projectPath) => {
  return execute('CreateProjectFolderInPath', { folderName, projectPath })
}

/**
 * CreateProjectFolderInTreeItem
 * None
 *
 * @param {string_wide} folderName 
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.CreateProjectFolderInTreeItem = (folderName, treeItemIndex) => {
  return execute('CreateProjectFolderInTreeItem', { folderName, treeItemIndex })
}

/**
 * RemoveFolderFromProject
 * None
 *
 * @param {string_wide} projectPath - A path in the project. leave blank for the root folder. Subfolders are separated by a forward slash, no terminating slash is allowed.
 *
 */
module.exports.RemoveFolderFromProject = (projectPath) => {
  return execute('RemoveFolderFromProject', { projectPath })
}

/**
 * SetDeviceSelection
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} selectionMode 
 *
 */
module.exports.SetDeviceSelection = (siteId, deviceId, selectionMode) => {
  return execute('SetDeviceSelection', { siteId, deviceId, selectionMode })
}

/**
 * SetClxControllerFaderMapping
 * None
 *
 * @param {int} faderId 
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 */
module.exports.SetClxControllerFaderMapping = (faderId, sequenceId) => {
  return execute('SetClxControllerFaderMapping', { faderId, sequenceId })
}

/**
 * SetClxControllerCueMapping
 * None
 *
 * @param {int} cueBtnId 
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 *
 */
module.exports.SetClxControllerCueMapping = (cueBtnId, sequenceId, cueId) => {
  return execute('SetClxControllerCueMapping', { cueBtnId, sequenceId, cueId })
}

/**
 * CreateCue
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 * @param {string_wide} cueName 
 * @param {int} cueKindId 
 *
 */
module.exports.CreateCue = (sequenceId, cueId, hours, minutes, seconds, frames, cueName, cueKindId) => {
  return execute('CreateCue', { sequenceId, cueId, hours, minutes, seconds, frames, cueName, cueKindId })
}

/**
 * RemoveCueById
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 *
 */
module.exports.RemoveCueById = (sequenceId, cueId) => {
  return execute('RemoveCueById', { sequenceId, cueId })
}

/**
 * RemoveAllCues
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 */
module.exports.RemoveAllCues = (sequenceId) => {
  return execute('RemoveAllCues', { sequenceId })
}

/**
 * CreateVideoLayerGetId
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} isGraphicLayer 
 *
 * @returns {int} 
 */
module.exports.CreateVideoLayerGetId = (siteId, isGraphicLayer) => {
  return execute('CreateVideoLayerGetId', { siteId, isGraphicLayer })
}

/**
 * RemoveLayer
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} layerId 
 * @param {bool} isGraphicLayer 
 *
 */
module.exports.RemoveLayer = (siteId, layerId, isGraphicLayer) => {
  return execute('RemoveLayer', { siteId, layerId, isGraphicLayer })
}

/**
 * SetIsBackup
 * None
 *
 * @param {bool} enable 
 *
 */
module.exports.SetIsBackup = (enable) => {
  return execute('SetIsBackup', { enable })
}

/**
 * ApplyView
 * None
 *
 * @param {int} viewId 
 *
 */
module.exports.ApplyView = (viewId) => {
  return execute('ApplyView', { viewId })
}

/**
 * SetSpareFromSpread
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} spareFromSpread 
 *
 */
module.exports.SetSpareFromSpread = (siteId, spareFromSpread) => {
  return execute('SetSpareFromSpread', { siteId, spareFromSpread })
}

/**
 * GetParamResource
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {bool} isMedia 
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 * @returns {int} - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @returns {int} - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @returns {string_narrow} - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @returns {string_narrow} - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 */
module.exports.GetParamResource = (siteId, deviceId, isMedia, parameterName) => {
  return execute('GetParamResource', { siteId, deviceId, isMedia, parameterName })
}

/**
 * GetMediaTransportMode
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 * @returns {int} - Playback status of a sequence. Possible values are 1 (Play), 2 (Stop) or 3 (Pause)
 */
module.exports.GetMediaTransportMode = (siteId, deviceId) => {
  return execute('GetMediaTransportMode', { siteId, deviceId })
}

/**
 * GetIsSiteConnected
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 * @returns {bool} 
 */
module.exports.GetIsSiteConnected = (siteId) => {
  return execute('GetIsSiteConnected', { siteId })
}

/**
 * MoveLayerUp
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.MoveLayerUp = (siteId, deviceId) => {
  return execute('MoveLayerUp', { siteId, deviceId })
}

/**
 * MoveLayerDown
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.MoveLayerDown = (siteId, deviceId) => {
  return execute('MoveLayerDown', { siteId, deviceId })
}

/**
 * MoveLayerToFirstPosition
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.MoveLayerToFirstPosition = (siteId, deviceId) => {
  return execute('MoveLayerToFirstPosition', { siteId, deviceId })
}

/**
 * MoveLayerToLastPosition
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.MoveLayerToLastPosition = (siteId, deviceId) => {
  return execute('MoveLayerToLastPosition', { siteId, deviceId })
}

/**
 * SetEnableClxController
 * None
 *
 * @param {byte} forJogShuttle - The target coolux Hardware
 * @param {bool} enable 
 *
 */
module.exports.SetEnableClxController = (forJogShuttle, enable) => {
  return execute('SetEnableClxController', { forJogShuttle, enable })
}

/**
 * GetEnableClxController
 * None
 *
 * @param {byte} forJogShuttle - The target coolux Hardware
 *
 * @returns {bool} 
 */
module.exports.GetEnableClxController = (forJogShuttle) => {
  return execute('GetEnableClxController', { forJogShuttle })
}

/**
 * SetSequenceCueWaitTime
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetSequenceCueWaitTime = (sequenceId, cueId, hours, minutes, seconds, frames) => {
  return execute('SetSequenceCueWaitTime', { sequenceId, cueId, hours, minutes, seconds, frames })
}

/**
 * SetSequenceCueJumpTargetTime
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetSequenceCueJumpTargetTime = (sequenceId, cueId, hours, minutes, seconds, frames) => {
  return execute('SetSequenceCueJumpTargetTime', { sequenceId, cueId, hours, minutes, seconds, frames })
}

/**
 * SetCueJumpCount
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 * @param {int} jumpCount 
 *
 */
module.exports.SetCueJumpCount = (sequenceId, cueId, jumpCount) => {
  return execute('SetCueJumpCount', { sequenceId, cueId, jumpCount })
}

/**
 * ResetCueTriggerCount
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 *
 */
module.exports.ResetCueTriggerCount = (sequenceId, cueId) => {
  return execute('ResetCueTriggerCount', { sequenceId, cueId })
}

/**
 * GetIsContentConsistent
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 * @returns {int} 
 */
module.exports.GetIsContentConsistent = (dmxFolderId, dmxFileId) => {
  return execute('GetIsContentConsistent', { dmxFolderId, dmxFileId })
}

/**
 * GetIsContentConsistentByName
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 *
 * @returns {int} 
 */
module.exports.GetIsContentConsistentByName = (resourcePath) => {
  return execute('GetIsContentConsistentByName', { resourcePath })
}

/**
 * CreateSequenceGetId
 * None
 *
 *
 * @returns {int} - The unique identifier for a sequence. The first/default sequence is 1
 */
module.exports.CreateSequenceGetId = () => {
  return execute('CreateSequenceGetId', {  })
}

/**
 * RemoveSequence
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 */
module.exports.RemoveSequence = (sequenceId) => {
  return execute('RemoveSequence', { sequenceId })
}

/**
 * SendMouseInput
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} mouseEventType 
 * @param {int} screenPosX 
 * @param {int} screenPosY 
 * @param {bool} firstPass 
 *
 */
module.exports.SendMouseInput = (siteId, deviceId, mouseEventType, screenPosX, screenPosY, firstPass) => {
  return execute('SendMouseInput', { siteId, deviceId, mouseEventType, screenPosX, screenPosY, firstPass })
}

/**
 * SendMouseScroll
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} scrollValue 
 *
 */
module.exports.SendMouseScroll = (siteId, deviceId, scrollValue) => {
  return execute('SendMouseScroll', { siteId, deviceId, scrollValue })
}

/**
 * SendTouchInput
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} touchId 
 * @param {int} touchType 
 * @param {int} screenPosX 
 * @param {int} screenPosY 
 * @param {bool} firstPass 
 *
 */
module.exports.SendTouchInput = (siteId, deviceId, touchId, touchType, screenPosX, screenPosY, firstPass) => {
  return execute('SendTouchInput', { siteId, deviceId, touchId, touchType, screenPosX, screenPosY, firstPass })
}

/**
 * SendKeyboardInput
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} keyboardEventType 
 * @param {int} keyCode 
 *
 */
module.exports.SendKeyboardInput = (siteId, keyboardEventType, keyCode) => {
  return execute('SendKeyboardInput', { siteId, keyboardEventType, keyCode })
}

/**
 * SetShowCursorInFullscreen
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} showCursor 
 *
 */
module.exports.SetShowCursorInFullscreen = (siteId, showCursor) => {
  return execute('SetShowCursorInFullscreen', { siteId, showCursor })
}

/**
 * SetNodeOfSiteIsAudioClockMaster
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} isMaster 
 *
 */
module.exports.SetNodeOfSiteIsAudioClockMaster = (siteId, isMaster) => {
  return execute('SetNodeOfSiteIsAudioClockMaster', { siteId, isMaster })
}

/**
 * AddEncryptionKeyGetId
 * None
 *
 * @param {string_wide} encryptionKey 
 *
 * @returns {bool} 
 */
module.exports.AddEncryptionKeyGetId = (encryptionKey) => {
  return execute('AddEncryptionKeyGetId', { encryptionKey })
}

/**
 * AddEncryptionPolicyGetId
 * None
 *
 * @param {string_wide} encryptionPolicy 
 *
 * @returns {bool} 
 */
module.exports.AddEncryptionPolicyGetId = (encryptionPolicy) => {
  return execute('AddEncryptionPolicyGetId', { encryptionPolicy })
}

/**
 * SetRouteInputToLayer
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} enableInputRouting 
 *
 */
module.exports.SetRouteInputToLayer = (siteId, enableInputRouting) => {
  return execute('SetRouteInputToLayer', { siteId, enableInputRouting })
}

/**
 * SetRouteInputToAutomation
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} enableInputAutomation 
 *
 */
module.exports.SetRouteInputToAutomation = (siteId, enableInputAutomation) => {
  return execute('SetRouteInputToAutomation', { siteId, enableInputAutomation })
}

/**
 * SetEnableOutputForPicking
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} outputId 
 * @param {bool} enableInputPicking 
 *
 */
module.exports.SetEnableOutputForPicking = (siteId, outputId, enableInputPicking) => {
  return execute('SetEnableOutputForPicking', { siteId, outputId, enableInputPicking })
}

/**
 * SetASIOMasterVolume
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {double} asioVolume 
 *
 */
module.exports.SetASIOMasterVolume = (siteId, asioVolume) => {
  return execute('SetASIOMasterVolume', { siteId, asioVolume })
}

/**
 * GetThumbnailByPath
 * None
 *
 * @param {string_wide} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 *
 * @returns {int} - The width of a thumbnail image in pixels. Always comes in pair with [thumbnailHeight]
 * @returns {int} - The width of a thumbnail image in pixels. Always comes in pair with [thumbnailWidth]
 * @returns {byte_buffer} - 4 Byte/Pixel encoded image data (BGRA). There is no header, only raw data. The width and height can be found in [thumbnailWidth] and [thumbnailHeight]
 */
module.exports.GetThumbnailByPath = (resourcePath) => {
  return execute('GetThumbnailByPath', { resourcePath })
}

/**
 * GetThumbnailByItemIndex
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 * @returns {int} - The width of a thumbnail image in pixels. Always comes in pair with [thumbnailHeight]
 * @returns {int} - The width of a thumbnail image in pixels. Always comes in pair with [thumbnailWidth]
 * @returns {byte_buffer} - 4 Byte/Pixel encoded image data (BGRA). There is no header, only raw data. The width and height can be found in [thumbnailWidth] and [thumbnailHeight]
 */
module.exports.GetThumbnailByItemIndex = (treeItemIndex) => {
  return execute('GetThumbnailByItemIndex', { treeItemIndex })
}

/**
 * CreatePlaylist
 * None
 *
 * @param {bool} doSetDmxIds 
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.CreatePlaylist = (doSetDmxIds, dmxFolderId, dmxFileId) => {
  return execute('CreatePlaylist', { doSetDmxIds, dmxFolderId, dmxFileId })
}

/**
 * CreatePlaylistInPath
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {bool} doSetDmxIds 
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.CreatePlaylistInPath = (projectPath, doSetDmxIds, dmxFolderId, dmxFileId) => {
  return execute('CreatePlaylistInPath', { projectPath, doSetDmxIds, dmxFolderId, dmxFileId })
}

/**
 * CreatePlaylistInItemId
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {bool} setdmxFileIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 *
 */
module.exports.CreatePlaylistInItemId = (treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId) => {
  return execute('CreatePlaylistInItemId', { treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId })
}

/**
 * CreatePlaylistInPathFromFolder
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {string_narrow} sourceProjectPath - A path in the project tab containing media
 * @param {bool} setdmxFileIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 *
 */
module.exports.CreatePlaylistInPathFromFolder = (projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId) => {
  return execute('CreatePlaylistInPathFromFolder', { projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId })
}

/**
 * CreatePlaylistInTreeItemFromFolder
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} sourceFolderItemId 
 * @param {bool} setdmxFileIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 *
 */
module.exports.CreatePlaylistInTreeItemFromFolder = (treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId) => {
  return execute('CreatePlaylistInTreeItemFromFolder', { treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId })
}

/**
 * PushBackPlaylistEntryByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} resourceDmxFolderId 
 * @param {int} resourceDmxFileId 
 *
 */
module.exports.PushBackPlaylistEntryByDmxId = (playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId) => {
  return execute('PushBackPlaylistEntryByDmxId', { playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId })
}

/**
 * PushBackPlaylistEntryByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {string_narrow} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 *
 */
module.exports.PushBackPlaylistEntryByPath = (playlistPath, resourcePath) => {
  return execute('PushBackPlaylistEntryByPath', { playlistPath, resourcePath })
}

/**
 * PushBackPlaylistEntryByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} resourceItemId 
 *
 */
module.exports.PushBackPlaylistEntryByItemId = (playlistItemIndex, resourceItemId) => {
  return execute('PushBackPlaylistEntryByItemId', { playlistItemIndex, resourceItemId })
}

/**
 * InsertPlaylistEntryByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} resourceDmxFolderId 
 * @param {int} resourceDmxFileId 
 * @param {int} index 
 *
 */
module.exports.InsertPlaylistEntryByDmxId = (playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index) => {
  return execute('InsertPlaylistEntryByDmxId', { playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index })
}

/**
 * InsertPlaylistEntryByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {string_narrow} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {int} index 
 *
 */
module.exports.InsertPlaylistEntryByPath = (playlistPath, resourcePath, index) => {
  return execute('InsertPlaylistEntryByPath', { playlistPath, resourcePath, index })
}

/**
 * InsertPlaylistEntryByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} resourceItemId 
 * @param {int} index 
 *
 */
module.exports.InsertPlaylistEntryByItemId = (playlistItemIndex, resourceItemId, index) => {
  return execute('InsertPlaylistEntryByItemId', { playlistItemIndex, resourceItemId, index })
}

/**
 * RemovePlaylistEntryByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 *
 */
module.exports.RemovePlaylistEntryByDmxId = (playlistDmxFolderId, playlistdmxFileId, index) => {
  return execute('RemovePlaylistEntryByDmxId', { playlistDmxFolderId, playlistdmxFileId, index })
}

/**
 * RemovePlaylistEntryByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 *
 */
module.exports.RemovePlaylistEntryByPath = (playlistPath, index) => {
  return execute('RemovePlaylistEntryByPath', { playlistPath, index })
}

/**
 * RemovePlaylistEntryByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 *
 */
module.exports.RemovePlaylistEntryByItemId = (playlistItemIndex, index) => {
  return execute('RemovePlaylistEntryByItemId', { playlistItemIndex, index })
}

/**
 * GetPlaylistSizeByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 *
 * @returns {int} 
 */
module.exports.GetPlaylistSizeByDmxId = (playlistDmxFolderId, playlistdmxFileId) => {
  return execute('GetPlaylistSizeByDmxId', { playlistDmxFolderId, playlistdmxFileId })
}

/**
 * GetPlaylistSizeByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 *
 * @returns {int} 
 */
module.exports.GetPlaylistSizeByPath = (playlistPath) => {
  return execute('GetPlaylistSizeByPath', { playlistPath })
}

/**
 * GetPlaylistSizeByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 *
 * @returns {int} 
 */
module.exports.GetPlaylistSizeByItemId = (playlistItemIndex) => {
  return execute('GetPlaylistSizeByItemId', { playlistItemIndex })
}

/**
 * SetPlaylistEntryIndexByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 * @param {int} newIndex 
 *
 */
module.exports.SetPlaylistEntryIndexByDmxId = (playlistDmxFolderId, playlistdmxFileId, index, newIndex) => {
  return execute('SetPlaylistEntryIndexByDmxId', { playlistDmxFolderId, playlistdmxFileId, index, newIndex })
}

/**
 * SetPlaylistEntryIndexByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 * @param {int} newIndex 
 *
 */
module.exports.SetPlaylistEntryIndexByPath = (playlistPath, index, newIndex) => {
  return execute('SetPlaylistEntryIndexByPath', { playlistPath, index, newIndex })
}

/**
 * SetPlaylistEntryIndexByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 * @param {int} newIndex 
 *
 */
module.exports.SetPlaylistEntryIndexByItemId = (playlistItemIndex, index, newIndex) => {
  return execute('SetPlaylistEntryIndexByItemId', { playlistItemIndex, index, newIndex })
}

/**
 * SetPlaylistEntryDurationByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryDurationByDmxId = (playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryDurationByDmxId', { playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryDurationByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryDurationByPath = (playlistPath, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryDurationByPath', { playlistPath, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryDurationByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryDurationByItemId = (playlistItemIndex, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryDurationByItemId', { playlistItemIndex, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryFadeOutTimeByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryFadeOutTimeByDmxId = (playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryFadeOutTimeByDmxId', { playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryFadeOutTimeByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryFadeOutTimeByPath = (playlistPath, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryFadeOutTimeByPath', { playlistPath, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryFadeOutTimeByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryFadeOutTimeByItemId = (playlistItemIndex, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryFadeOutTimeByItemId', { playlistItemIndex, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryInPointByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryInPointByDmxId = (playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryInPointByDmxId', { playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryInPointByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryInPointByPath = (playlistPath, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryInPointByPath', { playlistPath, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryInPointByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryInPointByItemId = (playlistItemIndex, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryInPointByItemId', { playlistItemIndex, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryOutPointByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryOutPointByDmxId = (playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryOutPointByDmxId', { playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryOutPointByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryOutPointByPath = (playlistPath, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryOutPointByPath', { playlistPath, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryOutPointByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.SetPlaylistEntryOutPointByItemId = (playlistItemIndex, index, hours, minutes, seconds, frames) => {
  return execute('SetPlaylistEntryOutPointByItemId', { playlistItemIndex, index, hours, minutes, seconds, frames })
}

/**
 * SetPlaylistEntryTransitionByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 * @param {int} fadeFxId 
 *
 */
module.exports.SetPlaylistEntryTransitionByDmxId = (playlistDmxFolderId, playlistdmxFileId, index, fadeFxId) => {
  return execute('SetPlaylistEntryTransitionByDmxId', { playlistDmxFolderId, playlistdmxFileId, index, fadeFxId })
}

/**
 * SetPlaylistEntryTransitionByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 * @param {int} fadeFxId 
 *
 */
module.exports.SetPlaylistEntryTransitionByPath = (playlistPath, index, fadeFxId) => {
  return execute('SetPlaylistEntryTransitionByPath', { playlistPath, index, fadeFxId })
}

/**
 * SetPlaylistEntryTransitionByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 * @param {int} fadeFxId 
 *
 */
module.exports.SetPlaylistEntryTransitionByItemId = (playlistItemIndex, index, fadeFxId) => {
  return execute('SetPlaylistEntryTransitionByItemId', { playlistItemIndex, index, fadeFxId })
}

/**
 * SetPlaylistEntryNoteByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} index 
 * @param {string_narrow} pNote 
 *
 */
module.exports.SetPlaylistEntryNoteByDmxId = (playlistDmxFolderId, playlistdmxFileId, index, pNote) => {
  return execute('SetPlaylistEntryNoteByDmxId', { playlistDmxFolderId, playlistdmxFileId, index, pNote })
}

/**
 * SetPlaylistEntryNoteByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} index 
 * @param {string_narrow} pNote 
 *
 */
module.exports.SetPlaylistEntryNoteByPath = (playlistPath, index, pNote) => {
  return execute('SetPlaylistEntryNoteByPath', { playlistPath, index, pNote })
}

/**
 * SetPlaylistEntryNoteByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} index 
 * @param {string_narrow} pNote 
 *
 */
module.exports.SetPlaylistEntryNoteByItemId = (playlistItemIndex, index, pNote) => {
  return execute('SetPlaylistEntryNoteByItemId', { playlistItemIndex, index, pNote })
}

/**
 * RecordLiveInputByDmxId
 * None
 *
 * @param {int} folderID 
 * @param {int} fileID 
 * @param {string_narrow} pFilename 
 * @param {string_narrow} encodingPresetName - The name of a encoding preset. A list of possible presets can be found in the Video Recording Tab
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.RecordLiveInputByDmxId = (folderID, fileID, pFilename, encodingPresetName, hours, minutes, seconds, frames) => {
  return execute('RecordLiveInputByDmxId', { folderID, fileID, pFilename, encodingPresetName, hours, minutes, seconds, frames })
}

/**
 * RecordLiveInputStartByDmxId
 * None
 *
 * @param {int} folderID 
 * @param {int} fileID 
 * @param {string_narrow} pFilename 
 * @param {string_narrow} encodingPresetName - The name of a encoding preset. A list of possible presets can be found in the Video Recording Tab
 *
 */
module.exports.RecordLiveInputStartByDmxId = (folderID, fileID, pFilename, encodingPresetName) => {
  return execute('RecordLiveInputStartByDmxId', { folderID, fileID, pFilename, encodingPresetName })
}

/**
 * RecordLiveInputByName
 * None
 *
 * @param {string_narrow} liveInputResourcePath - A string representing the full path to a live input resource of the project. Live Inputs that reside in the root fodler of the project can be addressed directly like "MyLiveInput". The same resource in a subfolder named "sub" can be referenced by "sub/MyLiveInput"
 * @param {string_narrow} pFilename 
 * @param {string_narrow} encodingPresetName - The name of a encoding preset. A list of possible presets can be found in the Video Recording Tab
 * @param {int} hours - The HOURS part of a time or timespan
 * @param {int} minutes - The MINUTES part of a time or timespan
 * @param {int} seconds - The SECONDS part of a time or timespan
 * @param {int} frames - The FRAMES part of a time or timespan
 *
 */
module.exports.RecordLiveInputByName = (liveInputResourcePath, pFilename, encodingPresetName, hours, minutes, seconds, frames) => {
  return execute('RecordLiveInputByName', { liveInputResourcePath, pFilename, encodingPresetName, hours, minutes, seconds, frames })
}

/**
 * RecordLiveInputStartByName
 * None
 *
 * @param {string_narrow} liveInputResourcePath - A string representing the full path to a live input resource of the project. Live Inputs that reside in the root fodler of the project can be addressed directly like "MyLiveInput". The same resource in a subfolder named "sub" can be referenced by "sub/MyLiveInput"
 * @param {string_narrow} pFilename 
 * @param {string_narrow} encodingPresetName - The name of a encoding preset. A list of possible presets can be found in the Video Recording Tab
 *
 */
module.exports.RecordLiveInputStartByName = (liveInputResourcePath, pFilename, encodingPresetName) => {
  return execute('RecordLiveInputStartByName', { liveInputResourcePath, pFilename, encodingPresetName })
}

/**
 * ExportVideo
 * None
 *
 * @param {string_narrow} pFilename 
 * @param {string_narrow} encodingPresetName - The name of a encoding preset. A list of possible presets can be found in the Video Recording Tab
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} startHour - The time to start at (hours)
 * @param {int} startMinute - The time to start at (minutes)
 * @param {int} startSecond - The time to start at (seconds)
 * @param {int} startFrame - The time to start at (frames)
 * @param {int} endHour - The time to end at (hours)
 * @param {int} endMinute - The time to end at (minutes)
 * @param {int} endSecond - The time to end at (seconds)
 * @param {int} endFrame - The time to end at (frames)
 *
 */
module.exports.ExportVideo = (pFilename, encodingPresetName, sequenceId, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame) => {
  return execute('ExportVideo', { pFilename, encodingPresetName, sequenceId, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame })
}

/**
 * EncodeFileByName
 * None
 *
 * @param {string_narrow} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {string_narrow} encodingPreset 
 *
 */
module.exports.EncodeFileByName = (resourcePath, encodingPreset) => {
  return execute('EncodeFileByName', { resourcePath, encodingPreset })
}

/**
 * EncodeFileByDmxId
 * None
 *
 * @param {int} folderID 
 * @param {int} fileID 
 * @param {string_narrow} encodingPreset 
 *
 */
module.exports.EncodeFileByDmxId = (folderID, fileID, encodingPreset) => {
  return execute('EncodeFileByDmxId', { folderID, fileID, encodingPreset })
}

/**
 * EncodeFileToPath
 * None
 *
 * @param {string_narrow} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {bool} overwriteExisting 
 * @param {string_narrow} encodingPreset 
 *
 */
module.exports.EncodeFileToPath = (resourcePath, projectPath, overwriteExisting, encodingPreset) => {
  return execute('EncodeFileToPath', { resourcePath, projectPath, overwriteExisting, encodingPreset })
}

/**
 * EncodeFileByDmxId
 * None
 *
 * @param {int} folderID 
 * @param {int} fileID 
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {bool} overwriteExisting 
 * @param {string_narrow} encodingPreset 
 *
 */
module.exports.EncodeFileByDmxId = (folderID, fileID, projectPath, overwriteExisting, encodingPreset) => {
  return execute('EncodeFileByDmxId', { folderID, fileID, projectPath, overwriteExisting, encodingPreset })
}

/**
 * SetCanvasResolutionByDmxId
 * None
 *
 * @param {int} canvasDmxFolderId 
 * @param {int} canvasDmxFileId 
 * @param {int} width 
 * @param {int} height 
 *
 */
module.exports.SetCanvasResolutionByDmxId = (canvasDmxFolderId, canvasDmxFileId, width, height) => {
  return execute('SetCanvasResolutionByDmxId', { canvasDmxFolderId, canvasDmxFileId, width, height })
}

/**
 * SetCanvasResolutionByPath
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 * @param {int} width 
 * @param {int} height 
 *
 */
module.exports.SetCanvasResolutionByPath = (canvasResourcePath, width, height) => {
  return execute('SetCanvasResolutionByPath', { canvasResourcePath, width, height })
}

/**
 * SetCanvasResolutionByItemId
 * None
 *
 * @param {int} canvasItemIndex 
 * @param {int} width 
 * @param {int} height 
 *
 */
module.exports.SetCanvasResolutionByItemId = (canvasItemIndex, width, height) => {
  return execute('SetCanvasResolutionByItemId', { canvasItemIndex, width, height })
}

/**
 * ClearCanvasByDmxId
 * None
 *
 * @param {int} canvasDmxFolderId 
 * @param {int} canvasDmxFileId 
 *
 */
module.exports.ClearCanvasByDmxId = (canvasDmxFolderId, canvasDmxFileId) => {
  return execute('ClearCanvasByDmxId', { canvasDmxFolderId, canvasDmxFileId })
}

/**
 * ClearCanvasByPath
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 *
 */
module.exports.ClearCanvasByPath = (canvasResourcePath) => {
  return execute('ClearCanvasByPath', { canvasResourcePath })
}

/**
 * ClearCanvasByItemId
 * None
 *
 * @param {int} canvasItemIndex 
 *
 */
module.exports.ClearCanvasByItemId = (canvasItemIndex) => {
  return execute('ClearCanvasByItemId', { canvasItemIndex })
}

/**
 * ExecuteCanvasCmdByDmxId
 * None
 *
 * @param {int} canvasDmxFolderId 
 * @param {int} canvasDmxFileId 
 * @param {string_narrow} cmd 
 * @param {bool} cmdContainsResourcePath 
 *
 */
module.exports.ExecuteCanvasCmdByDmxId = (canvasDmxFolderId, canvasDmxFileId, cmd, cmdContainsResourcePath) => {
  return execute('ExecuteCanvasCmdByDmxId', { canvasDmxFolderId, canvasDmxFileId, cmd, cmdContainsResourcePath })
}

/**
 * ExecuteCanvasCmdByPath
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 * @param {string_narrow} cmd 
 * @param {bool} cmdContainsResourcePath 
 *
 */
module.exports.ExecuteCanvasCmdByPath = (canvasResourcePath, cmd, cmdContainsResourcePath) => {
  return execute('ExecuteCanvasCmdByPath', { canvasResourcePath, cmd, cmdContainsResourcePath })
}

/**
 * ExecuteCanvasCmdByItemId
 * None
 *
 * @param {int} canvasItemIndex 
 * @param {string_narrow} cmd 
 * @param {bool} cmdContainsResourcePath 
 *
 */
module.exports.ExecuteCanvasCmdByItemId = (canvasItemIndex, cmd, cmdContainsResourcePath) => {
  return execute('ExecuteCanvasCmdByItemId', { canvasItemIndex, cmd, cmdContainsResourcePath })
}

/**
 * GetCanvasDrawCommandsByDmxId
 * None
 *
 * @param {int} canvasDmxFolderId 
 * @param {int} canvasDmxFileId 
 *
 * @returns {string_narrow} 
 */
module.exports.GetCanvasDrawCommandsByDmxId = (canvasDmxFolderId, canvasDmxFileId) => {
  return execute('GetCanvasDrawCommandsByDmxId', { canvasDmxFolderId, canvasDmxFileId })
}

/**
 * GetCanvasDrawCommandsByPath
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 *
 * @returns {string_narrow} 
 */
module.exports.GetCanvasDrawCommandsByPath = (canvasResourcePath) => {
  return execute('GetCanvasDrawCommandsByPath', { canvasResourcePath })
}

/**
 * GetCanvasDrawCommandsByItemId
 * None
 *
 * @param {int} canvasItemIndex 
 *
 * @returns {string_narrow} 
 */
module.exports.GetCanvasDrawCommandsByItemId = (canvasItemIndex) => {
  return execute('GetCanvasDrawCommandsByItemId', { canvasItemIndex })
}

/**
 * GetMediaWidthByDmxId
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 * @returns {int} 
 */
module.exports.GetMediaWidthByDmxId = (dmxFolderId, dmxFileId) => {
  return execute('GetMediaWidthByDmxId', { dmxFolderId, dmxFileId })
}

/**
 * GetMediaWidthByPath
 * None
 *
 * @param {string_narrow} folderPathToProject - A Windows-Styled path to a folder. ("C:cooluxcontentprojectsmyproject")
 *
 * @returns {int} 
 */
module.exports.GetMediaWidthByPath = (folderPathToProject) => {
  return execute('GetMediaWidthByPath', { folderPathToProject })
}

/**
 * GetMediaWidthByItemId
 * None
 *
 * @param {int} itemId 
 *
 * @returns {int} 
 */
module.exports.GetMediaWidthByItemId = (itemId) => {
  return execute('GetMediaWidthByItemId', { itemId })
}

/**
 * GetMediaHeightByDmxId
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 * @returns {int} 
 */
module.exports.GetMediaHeightByDmxId = (dmxFolderId, dmxFileId) => {
  return execute('GetMediaHeightByDmxId', { dmxFolderId, dmxFileId })
}

/**
 * GetMediaHeightByPath
 * None
 *
 * @param {string_narrow} folderPathToProject - A Windows-Styled path to a folder. ("C:cooluxcontentprojectsmyproject")
 *
 * @returns {int} 
 */
module.exports.GetMediaHeightByPath = (folderPathToProject) => {
  return execute('GetMediaHeightByPath', { folderPathToProject })
}

/**
 * GetMediaHeightByItemId
 * None
 *
 * @param {int} itemId 
 *
 * @returns {int} 
 */
module.exports.GetMediaHeightByItemId = (itemId) => {
  return execute('GetMediaHeightByItemId', { itemId })
}

/**
 * GetProjectPathOnDisc
 * None
 *
 *
 * @returns {string_narrow} 
 */
module.exports.GetProjectPathOnDisc = () => {
  return execute('GetProjectPathOnDisc', {  })
}

/**
 * SaveProjectAs
 * None
 *
 * @param {string_narrow} folderPathToProject - A Windows-Styled path to a folder. ("C:cooluxcontentprojectsmyproject")
 * @param {string_narrow} projectXmlFileName - The name of the XML file of the project. ("myproject.xml")
 *
 */
module.exports.SaveProjectAs = (folderPathToProject, projectXmlFileName) => {
  return execute('SaveProjectAs', { folderPathToProject, projectXmlFileName })
}

/**
 * SaveProjectCopy
 * None
 *
 * @param {string_narrow} folderPathToProject - A Windows-Styled path to a folder. ("C:cooluxcontentprojectsmyproject")
 * @param {string_narrow} projectXmlFileName - The name of the XML file of the project. ("myproject.xml")
 *
 */
module.exports.SaveProjectCopy = (folderPathToProject, projectXmlFileName) => {
  return execute('SaveProjectCopy', { folderPathToProject, projectXmlFileName })
}

/**
 * BundleProject
 * None
 *
 * @param {string_narrow} bundlePath 
 * @param {string_narrow} bundleName 
 *
 */
module.exports.BundleProject = (bundlePath, bundleName) => {
  return execute('BundleProject', { bundlePath, bundleName })
}

/**
 * SetResourceNameByPath
 * None
 *
 * @param {string_narrow} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.SetResourceNameByPath = (resourcePath, newResourceName) => {
  return execute('SetResourceNameByPath', { resourcePath, newResourceName })
}

/**
 * SetResourceNameByItemIndex
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.SetResourceNameByItemIndex = (treeItemIndex, newResourceName) => {
  return execute('SetResourceNameByItemIndex', { treeItemIndex, newResourceName })
}

/**
 * SetResourceNameByDmxId
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.SetResourceNameByDmxId = (dmxFolderId, dmxFileId, newResourceName) => {
  return execute('SetResourceNameByDmxId', { dmxFolderId, dmxFileId, newResourceName })
}

/**
 * SendCanvasCmdsToStackByDmxId
 * None
 *
 * @param {int} canvasDmxFolderId 
 * @param {int} canvasDmxFileId 
 * @param {bool} doAddToStack 
 *
 */
module.exports.SendCanvasCmdsToStackByDmxId = (canvasDmxFolderId, canvasDmxFileId, doAddToStack) => {
  return execute('SendCanvasCmdsToStackByDmxId', { canvasDmxFolderId, canvasDmxFileId, doAddToStack })
}

/**
 * SetAddCanvasCmdsToStackByPath
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 * @param {bool} doAddToStack 
 *
 */
module.exports.SetAddCanvasCmdsToStackByPath = (canvasResourcePath, doAddToStack) => {
  return execute('SetAddCanvasCmdsToStackByPath', { canvasResourcePath, doAddToStack })
}

/**
 * SetAddCanvasCmdsToStackByItemId
 * None
 *
 * @param {int} canvasItemIndex 
 * @param {bool} doAddToStack 
 *
 */
module.exports.SetAddCanvasCmdsToStackByItemId = (canvasItemIndex, doAddToStack) => {
  return execute('SetAddCanvasCmdsToStackByItemId', { canvasItemIndex, doAddToStack })
}

/**
 * ClearEmptyPlaylistEntriesByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 *
 */
module.exports.ClearEmptyPlaylistEntriesByDmxId = (playlistDmxFolderId, playlistdmxFileId) => {
  return execute('ClearEmptyPlaylistEntriesByDmxId', { playlistDmxFolderId, playlistdmxFileId })
}

/**
 * ClearEmptyPlaylistEntriesByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 *
 */
module.exports.ClearEmptyPlaylistEntriesByPath = (playlistPath) => {
  return execute('ClearEmptyPlaylistEntriesByPath', { playlistPath })
}

/**
 * ClearEmptyPlaylistEntriesByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 *
 */
module.exports.ClearEmptyPlaylistEntriesByItemId = (playlistItemIndex) => {
  return execute('ClearEmptyPlaylistEntriesByItemId', { playlistItemIndex })
}

/**
 * ClearAllPlaylistEntriesByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 *
 */
module.exports.ClearAllPlaylistEntriesByDmxId = (playlistDmxFolderId, playlistdmxFileId) => {
  return execute('ClearAllPlaylistEntriesByDmxId', { playlistDmxFolderId, playlistdmxFileId })
}

/**
 * ClearAllPlaylistEntriesByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 *
 */
module.exports.ClearAllPlaylistEntriesByPath = (playlistPath) => {
  return execute('ClearAllPlaylistEntriesByPath', { playlistPath })
}

/**
 * ClearAllPlaylistEntriesByItemIndex
 * None
 *
 * @param {int} playlistItemIndex 
 *
 */
module.exports.ClearAllPlaylistEntriesByItemIndex = (playlistItemIndex) => {
  return execute('ClearAllPlaylistEntriesByItemIndex', { playlistItemIndex })
}

/**
 * SetSublayerParamOfKindDouble
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} sublayerId 
 * @param {int} parameterKindId - A numeric representation for a parameter. This is faster than using the text based identifier.
 * @param {double} parameterValue - A numeric value to a corresponding parameter.
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetSublayerParamOfKindDouble = (siteId, deviceId, sublayerId, parameterKindId, parameterValue, doSilent, doDirect) => {
  return execute('SetSublayerParamOfKindDouble', { siteId, deviceId, sublayerId, parameterKindId, parameterValue, doSilent, doDirect })
}

/**
 * HandleSublayer
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} action -  
 * @param {int} data -  
 *
 */
module.exports.HandleSublayer = (siteId, deviceId, action, data) => {
  return execute('HandleSublayer', { siteId, deviceId, action, data })
}

/**
 * SetCueName
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 * @param {string_narrow} cueName 
 *
 */
module.exports.SetCueName = (sequenceId, cueId, cueName) => {
  return execute('SetCueName', { sequenceId, cueId, cueName })
}

/**
 * GetCueName
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} cueId - A unique identifier for a cue.
 *
 * @returns {string_narrow} 
 */
module.exports.GetCueName = (sequenceId, cueId) => {
  return execute('GetCueName', { sequenceId, cueId })
}

/**
 * StoreActiveSite
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.StoreActiveSite = (sequenceId, siteId) => {
  return execute('StoreActiveSite', { sequenceId, siteId })
}

/**
 * StoreActiveDevice
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.StoreActiveDevice = (sequenceId, siteId, deviceId) => {
  return execute('StoreActiveDevice', { sequenceId, siteId, deviceId })
}

/**
 * StoreActiveParam
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.StoreActiveParam = (sequenceId, siteId, deviceId, parameterName) => {
  return execute('StoreActiveParam', { sequenceId, siteId, deviceId, parameterName })
}

/**
 * AssignDeviceByName
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} sourceDeviceId 
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.AssignDeviceByName = (siteId, deviceId, sourceDeviceId, parameterName) => {
  return execute('AssignDeviceByName', { siteId, deviceId, sourceDeviceId, parameterName })
}

/**
 * AssignResourceToParam
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} forMesh - When forMesh it set, the command executes it's action for the MESH parameter of the given device. When set to false it is executed on the MEDIA parameter.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.AssignResourceToParam = (siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName) => {
  return execute('AssignResourceToParam', { siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName })
}

/**
 * AddImageSequence
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} fps - The frames per second to be used.
 *
 */
module.exports.AddImageSequence = (folderPath, siteId, dmxFolderId, dmxFileId, fps) => {
  return execute('AddImageSequence', { folderPath, siteId, dmxFolderId, dmxFileId, fps })
}

/**
 * AddImageSequenceToFolder
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} fps - The frames per second to be used.
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 *
 */
module.exports.AddImageSequenceToFolder = (folderPath, siteId, dmxFolderId, dmxFileId, fps, projectPath) => {
  return execute('AddImageSequenceToFolder', { folderPath, siteId, dmxFolderId, dmxFileId, fps, projectPath })
}

/**
 * AddImageSequenceToTreeItem
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} fps - The frames per second to be used.
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.AddImageSequenceToTreeItem = (folderPath, siteId, dmxFolderId, dmxFileId, fps, treeItemIndex) => {
  return execute('AddImageSequenceToTreeItem', { folderPath, siteId, dmxFolderId, dmxFileId, fps, treeItemIndex })
}

/**
 * AddImageSequenceFromLocalNode
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} fps - The frames per second to be used.
 *
 */
module.exports.AddImageSequenceFromLocalNode = (folderPath, fps) => {
  return execute('AddImageSequenceFromLocalNode', { folderPath, fps })
}

/**
 * AddImageSequenceFromLocalNodeId
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} fps - The frames per second to be used.
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 *
 */
module.exports.AddImageSequenceFromLocalNodeId = (folderPath, fps, dmxFolderId, dmxFileId) => {
  return execute('AddImageSequenceFromLocalNodeId', { folderPath, fps, dmxFolderId, dmxFileId })
}

/**
 * AddImageSequenceFromLocalNodeToFolder
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} fps - The frames per second to be used.
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 *
 */
module.exports.AddImageSequenceFromLocalNodeToFolder = (folderPath, fps, projectPath) => {
  return execute('AddImageSequenceFromLocalNodeToFolder', { folderPath, fps, projectPath })
}

/**
 * AddImageSequenceFromLocalNodeToFolderId
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} fps - The frames per second to be used.
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 *
 */
module.exports.AddImageSequenceFromLocalNodeToFolderId = (folderPath, fps, dmxFolderId, dmxFileId, projectPath) => {
  return execute('AddImageSequenceFromLocalNodeToFolderId', { folderPath, fps, dmxFolderId, dmxFileId, projectPath })
}

/**
 * AddImageSequenceFromLocalNodeToTreeItem
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} fps - The frames per second to be used.
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.AddImageSequenceFromLocalNodeToTreeItem = (folderPath, fps, treeItemIndex) => {
  return execute('AddImageSequenceFromLocalNodeToTreeItem', { folderPath, fps, treeItemIndex })
}

/**
 * AddImageSequenceFromLocalNodeToTreeItemId
 * None
 *
 * @param {string_narrow} folderPath - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 * @param {int} fps - The frames per second to be used.
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.AddImageSequenceFromLocalNodeToTreeItemId = (folderPath, fps, dmxFolderId, dmxFileId, treeItemIndex) => {
  return execute('AddImageSequenceFromLocalNodeToTreeItemId', { folderPath, fps, dmxFolderId, dmxFileId, treeItemIndex })
}

/**
 * SetTextFormatted
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} text 
 * @param {bool} isFormatted - True: This text contains formatting that should be applied to the text asset. False: Set the raw text only.
 *
 */
module.exports.SetTextFormatted = (dmxFolderId, dmxFileId, text, isFormatted) => {
  return execute('SetTextFormatted', { dmxFolderId, dmxFileId, text, isFormatted })
}

/**
 * SetTextFormattedWide
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_wide} text 
 * @param {bool} isFormatted - True: This text contains formatting that should be applied to the text asset. False: Set the raw text only.
 *
 */
module.exports.SetTextFormattedWide = (dmxFolderId, dmxFileId, text, isFormatted) => {
  return execute('SetTextFormattedWide', { dmxFolderId, dmxFileId, text, isFormatted })
}

/**
 * GetCurrentTimeCueInfo
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 * @returns {int} - The HOURS part of a time or timespan
 * @returns {int} - The MINUTES part of a time or timespan
 * @returns {int} - The SECONDS part of a time or timespan
 * @returns {int} - The FRAMES part of a time or timespan
 * @returns {int} 
 * @returns {string_narrow} 
 * @returns {int} 
 * @returns {int} 
 * @returns {int} 
 * @returns {int} 
 * @returns {int} 
 * @returns {int} 
 * @returns {string_narrow} 
 * @returns {int} 
 * @returns {int} 
 * @returns {int} 
 * @returns {int} 
 * @returns {int} 
 */
module.exports.GetCurrentTimeCueInfo = (sequenceId) => {
  return execute('GetCurrentTimeCueInfo', { sequenceId })
}

/**
 * GetContentIsConsistentByTreeItem
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 */
module.exports.GetContentIsConsistentByTreeItem = (treeItemIndex) => {
  return execute('GetContentIsConsistentByTreeItem', { treeItemIndex })
}

/**
 * SpreadToSite
 * None
 *
 * @param {string_narrow} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 */
module.exports.SpreadToSite = (resourcePath, siteId) => {
  return execute('SpreadToSite', { resourcePath, siteId })
}

/**
 * SetGroupSelection
 * None
 *
 * @param {int} groupIndex - A index pointing to a group
 * @param {int} selectionMode 
 *
 */
module.exports.SetGroupSelection = (groupIndex, selectionMode) => {
  return execute('SetGroupSelection', { groupIndex, selectionMode })
}

/**
 * SetSequenceSelection
 * None
 *
 * @param {int} sequenceId - The unique identifier for a sequence. The first/default sequence is 1
 *
 */
module.exports.SetSequenceSelection = (sequenceId) => {
  return execute('SetSequenceSelection', { sequenceId })
}

/**
 * CreatePlaylistWithName
 * None
 *
 * @param {bool} doSetDmxIds 
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.CreatePlaylistWithName = (doSetDmxIds, dmxFolderId, dmxFileId, newResourceName) => {
  return execute('CreatePlaylistWithName', { doSetDmxIds, dmxFolderId, dmxFileId, newResourceName })
}

/**
 * CreatePlaylistInPathWithName
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {bool} doSetDmxIds 
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.CreatePlaylistInPathWithName = (projectPath, doSetDmxIds, dmxFolderId, dmxFileId, newResourceName) => {
  return execute('CreatePlaylistInPathWithName', { projectPath, doSetDmxIds, dmxFolderId, dmxFileId, newResourceName })
}

/**
 * CreatePlaylistInItemIdWithName
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {bool} setdmxFileIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.CreatePlaylistInItemIdWithName = (treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName) => {
  return execute('CreatePlaylistInItemIdWithName', { treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName })
}

/**
 * CreatePlaylistInPathFromFolderWithName
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {string_narrow} sourceProjectPath - A path in the project tab containing media
 * @param {bool} setdmxFileIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.CreatePlaylistInPathFromFolderWithName = (projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName) => {
  return execute('CreatePlaylistInPathFromFolderWithName', { projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName })
}

/**
 * CreatePlaylistInTreeItemFromFolderWithName
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} sourceFolderItemId 
 * @param {bool} setdmxFileIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 * @param {string_narrow} newResourceName 
 *
 */
module.exports.CreatePlaylistInTreeItemFromFolderWithName = (treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName) => {
  return execute('CreatePlaylistInTreeItemFromFolderWithName', { treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName })
}

/**
 * SetWatchedFolderProperty
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {int} watchFolderProperty - A trait of a watchfolder.
 * @param {bool} enable 
 *
 */
module.exports.SetWatchedFolderProperty = (projectPath, watchFolderProperty, enable) => {
  return execute('SetWatchedFolderProperty', { projectPath, watchFolderProperty, enable })
}

/**
 * SetWatchedFolderPropertyByItemId
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} watchFolderProperty - A trait of a watchfolder.
 * @param {bool} enable 
 *
 */
module.exports.SetWatchedFolderPropertyByItemId = (treeItemIndex, watchFolderProperty, enable) => {
  return execute('SetWatchedFolderPropertyByItemId', { treeItemIndex, watchFolderProperty, enable })
}

/**
 * SetFolderSpreadToSite
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} enable 
 *
 */
module.exports.SetFolderSpreadToSite = (projectPath, siteId, enable) => {
  return execute('SetFolderSpreadToSite', { projectPath, siteId, enable })
}

/**
 * SetFolderSpreadToSiteByItemId
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} enable 
 *
 */
module.exports.SetFolderSpreadToSiteByItemId = (treeItemIndex, siteId, enable) => {
  return execute('SetFolderSpreadToSiteByItemId', { treeItemIndex, siteId, enable })
}

/**
 * ClearStreamingText
 * None
 *
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} pendingOnly 
 *
 */
module.exports.ClearStreamingText = (dmxFolderId, dmxFileId, pendingOnly) => {
  return execute('ClearStreamingText', { dmxFolderId, dmxFileId, pendingOnly })
}

/**
 * GetWatchedFolderProperty
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {int} watchFolderProperty - A trait of a watchfolder.
 *
 * @returns {bool} 
 */
module.exports.GetWatchedFolderProperty = (projectPath, watchFolderProperty) => {
  return execute('GetWatchedFolderProperty', { projectPath, watchFolderProperty })
}

/**
 * GetWatchedFolderPropertyByItemId
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} watchFolderProperty - A trait of a watchfolder.
 *
 * @returns {bool} 
 */
module.exports.GetWatchedFolderPropertyByItemId = (treeItemIndex, watchFolderProperty) => {
  return execute('GetWatchedFolderPropertyByItemId', { treeItemIndex, watchFolderProperty })
}

/**
 * GetFolderSpreadToSite
 * None
 *
 * @param {string_narrow} projectPath - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 * @returns {bool} 
 */
module.exports.GetFolderSpreadToSite = (projectPath, siteId) => {
  return execute('GetFolderSpreadToSite', { projectPath, siteId })
}

/**
 * GetFolderSpreadToSiteByItemId
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 *
 * @returns {bool} 
 */
module.exports.GetFolderSpreadToSiteByItemId = (treeItemIndex, siteId) => {
  return execute('GetFolderSpreadToSiteByItemId', { treeItemIndex, siteId })
}

/**
 * InsertPlaylistEntryWithParametersByDmxId
 * None
 *
 *
 */
module.exports.InsertPlaylistEntryWithParametersByDmxId = () => {
  return execute('InsertPlaylistEntryWithParametersByDmxId', {  })
}

/**
 * InsertPlaylistEntryWithParametersByPath
 *  
 *
 *
 */
module.exports.InsertPlaylistEntryWithParametersByPath = () => {
  return execute('InsertPlaylistEntryWithParametersByPath', {  })
}

/**
 * InsertPlaylistEntryWithParametersByTreeItem
 *  
 *
 *
 */
module.exports.InsertPlaylistEntryWithParametersByTreeItem = () => {
  return execute('InsertPlaylistEntryWithParametersByTreeItem', {  })
}

/**
 * SetParamRelative
 *  
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 * @param {int} parameterValue - A numeric value to a corresponding parameter.
 *
 */
module.exports.SetParamRelative = (siteId, deviceId, parameterName, parameterValue) => {
  return execute('SetParamRelative', { siteId, deviceId, parameterName, parameterValue })
}

/**
 * AddContent
 * None
 *
 * @param {string_narrow} filePath - A Windows-Styled path to a file. ("C:cooluxcontentsamplevideo.mpv")
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} autoIncrementDmxId - Set to true to enable automatic DMX IDs. If you want auto DMX IDs, please set any dmxFolderId and dmxFileId to 0 (if this function accepts any)
 *
 */
module.exports.AddContent = (filePath, siteId, dmxFolderId, dmxFileId, autoIncrementDmxId) => {
  return execute('AddContent', { filePath, siteId, dmxFolderId, dmxFileId, autoIncrementDmxId })
}

/**
 * GetMediaInfo
 * None
 *
 * @param {int} treeItemsMediaIndex - A Tree item index. This only includes MEDIA
 *
 * @returns {int} - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @returns {int} - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @returns {string_narrow} - The name of the resource without path
 * @returns {string_narrow} - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @returns {string_narrow} - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @returns {int} 
 * @returns {int} 
 * @returns {int} - The frames per second to be used.
 * @returns {int} - The HOURS part of a time or timespan
 * @returns {int} - The MINUTES part of a time or timespan
 * @returns {int} - The SECONDS part of a time or timespan
 * @returns {int} - The FRAMES part of a time or timespan
 * @returns {int} - The settings of the video resource
 */
module.exports.GetMediaInfo = (treeItemsMediaIndex) => {
  return execute('GetMediaInfo', { treeItemsMediaIndex })
}

/**
 * InsertPlaylistEntryWithParametersByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} resourceDmxFolderId 
 * @param {int} resourceDmxFileId 
 * @param {int} index 
 * @param {int} durationHours - The time to start at (hours)
 * @param {int} durationMinutes - The time to start at (minutes)
 * @param {int} durationSeconds - The time to start at (seconds)
 * @param {int} durationFrames - The time to start at (frames)
 * @param {int} fadeOutHour - The time to start at (hours)
 * @param {int} fadeOutMinute - The time to start at (minutes)
 * @param {int} fadeOutSecond - The time to start at (seconds)
 * @param {int} fadeOutFrame - The time to start at (frames)
 * @param {int} startHour - The time to start at (hours)
 * @param {int} startMinute - The time to start at (minutes)
 * @param {int} startSecond - The time to start at (seconds)
 * @param {int} startFrame - The time to start at (frames)
 * @param {int} endHour - The time to end at (hours)
 * @param {int} endMinute - The time to end at (minutes)
 * @param {int} endSecond - The time to end at (seconds)
 * @param {int} endFrame - The time to end at (frames)
 * @param {int} fadeFxId 
 *
 */
module.exports.InsertPlaylistEntryWithParametersByDmxId = (playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index, durationHours, durationMinutes, durationSeconds, durationFrames, fadeOutHour, fadeOutMinute, fadeOutSecond, fadeOutFrame, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame, fadeFxId) => {
  return execute('InsertPlaylistEntryWithParametersByDmxId', { playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index, durationHours, durationMinutes, durationSeconds, durationFrames, fadeOutHour, fadeOutMinute, fadeOutSecond, fadeOutFrame, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame, fadeFxId })
}

/**
 * InsertPlaylistEntryWithParametersByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {string_narrow} resourcePath - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @param {int} index 
 * @param {int} durationHours - The time to start at (hours)
 * @param {int} durationMinutes - The time to start at (minutes)
 * @param {int} durationSeconds - The time to start at (seconds)
 * @param {int} durationFrames - The time to start at (frames)
 * @param {int} fadeOutHour - The time to start at (hours)
 * @param {int} fadeOutMinute - The time to start at (minutes)
 * @param {int} fadeOutSecond - The time to start at (seconds)
 * @param {int} fadeOutFrame - The time to start at (frames)
 * @param {int} startHour - The time to start at (hours)
 * @param {int} startMinute - The time to start at (minutes)
 * @param {int} startSecond - The time to start at (seconds)
 * @param {int} startFrame - The time to start at (frames)
 * @param {int} endHour - The time to end at (hours)
 * @param {int} endMinute - The time to end at (minutes)
 * @param {int} endSecond - The time to end at (seconds)
 * @param {int} endFrame - The time to end at (frames)
 * @param {int} fadeFxId 
 *
 */
module.exports.InsertPlaylistEntryWithParametersByPath = (playlistPath, resourcePath, index, durationHours, durationMinutes, durationSeconds, durationFrames, fadeOutHour, fadeOutMinute, fadeOutSecond, fadeOutFrame, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame, fadeFxId) => {
  return execute('InsertPlaylistEntryWithParametersByPath', { playlistPath, resourcePath, index, durationHours, durationMinutes, durationSeconds, durationFrames, fadeOutHour, fadeOutMinute, fadeOutSecond, fadeOutFrame, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame, fadeFxId })
}

/**
 * InsertPlaylistEntryWithParametersByTreeItem
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} resourceItemId 
 * @param {int} index 
 * @param {int} durationHours - The time to start at (hours)
 * @param {int} durationMinutes - The time to start at (minutes)
 * @param {int} durationSeconds - The time to start at (seconds)
 * @param {int} durationFrames - The time to start at (frames)
 * @param {int} fadeOutHour - The time to start at (hours)
 * @param {int} fadeOutMinute - The time to start at (minutes)
 * @param {int} fadeOutSecond - The time to start at (seconds)
 * @param {int} fadeOutFrame - The time to start at (frames)
 * @param {int} startHour - The time to start at (hours)
 * @param {int} startMinute - The time to start at (minutes)
 * @param {int} startSecond - The time to start at (seconds)
 * @param {int} startFrame - The time to start at (frames)
 * @param {int} endHour - The time to end at (hours)
 * @param {int} endMinute - The time to end at (minutes)
 * @param {int} endSecond - The time to end at (seconds)
 * @param {int} endFrame - The time to end at (frames)
 * @param {int} fadeFxId 
 *
 */
module.exports.InsertPlaylistEntryWithParametersByTreeItem = (playlistItemIndex, resourceItemId, index, durationHours, durationMinutes, durationSeconds, durationFrames, fadeOutHour, fadeOutMinute, fadeOutSecond, fadeOutFrame, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame, fadeFxId) => {
  return execute('InsertPlaylistEntryWithParametersByTreeItem', { playlistItemIndex, resourceItemId, index, durationHours, durationMinutes, durationSeconds, durationFrames, fadeOutHour, fadeOutMinute, fadeOutSecond, fadeOutFrame, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSecond, endFrame, fadeFxId })
}

/**
 * SetYawPitchRoll
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {bool} inRadians 
 * @param {double} yaw 
 * @param {double} pitch 
 * @param {double} roll 
 * @param {bool} doSilent - doSilent (when set) prevents the activation of a parameter. It will stay inactive and won't be treated as an active value. 
 * @param {bool} doDirect - doDirect (when set) sets the value without using the default value smoothing
 *
 */
module.exports.SetYawPitchRoll = (siteId, deviceId, inRadians, yaw, pitch, roll, doSilent, doDirect) => {
  return execute('SetYawPitchRoll', { siteId, deviceId, inRadians, yaw, pitch, roll, doSilent, doDirect })
}

/**
 * GetYawPitchRoll
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {bool} inRadians 
 *
 * @returns {double} 
 * @returns {double} 
 * @returns {double} 
 */
module.exports.GetYawPitchRoll = (siteId, deviceId, inRadians) => {
  return execute('GetYawPitchRoll', { siteId, deviceId, inRadians })
}

/**
 * GetSiteIds
 * None
 *
 *
 * @returns {int_buffer} 
 */
module.exports.GetSiteIds = () => {
  return execute('GetSiteIds', {  })
}

/**
 * SetCompositingPassRenderTargetSize
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} width 
 * @param {int} height 
 *
 */
module.exports.SetCompositingPassRenderTargetSize = (siteId, deviceId, width, height) => {
  return execute('SetCompositingPassRenderTargetSize', { siteId, deviceId, width, height })
}

/**
 * SetSoftedgeIsWarped
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {bool} isWarped 
 *
 */
module.exports.SetSoftedgeIsWarped = (siteId, deviceId, isWarped) => {
  return execute('SetSoftedgeIsWarped', { siteId, deviceId, isWarped })
}

/**
 * SetCanvasTextureFormatByDmxId
 * None
 *
 * @param {int} canvasDmxFolderId 
 * @param {int} canvasDmxFileId 
 * @param {int} textureFormat - The texture format
 *
 */
module.exports.SetCanvasTextureFormatByDmxId = (canvasDmxFolderId, canvasDmxFileId, textureFormat) => {
  return execute('SetCanvasTextureFormatByDmxId', { canvasDmxFolderId, canvasDmxFileId, textureFormat })
}

/**
 * SetCanvasTextureFormatByPath
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 * @param {int} textureFormat - The texture format
 *
 */
module.exports.SetCanvasTextureFormatByPath = (canvasResourcePath, textureFormat) => {
  return execute('SetCanvasTextureFormatByPath', { canvasResourcePath, textureFormat })
}

/**
 * SetCanvasTextureFormatByItemId
 * None
 *
 * @param {int} canvasItemIndex 
 * @param {int} textureFormat - The texture format
 *
 */
module.exports.SetCanvasTextureFormatByItemId = (canvasItemIndex, textureFormat) => {
  return execute('SetCanvasTextureFormatByItemId', { canvasItemIndex, textureFormat })
}

/**
 * ResetSockets
 * None
 *
 *
 */
module.exports.ResetSockets = () => {
  return execute('ResetSockets', {  })
}

/**
 * ResetSerialLink
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 *
 */
module.exports.ResetSerialLink = (siteId, deviceId) => {
  return execute('ResetSerialLink', { siteId, deviceId })
}

/**
 * AssignResourceToParamBlocked
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} forMesh - When forMesh it set, the command executes it's action for the MESH parameter of the given device. When set to false it is executed on the MEDIA parameter.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.AssignResourceToParamBlocked = (siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName) => {
  return execute('AssignResourceToParamBlocked', { siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName })
}

/**
 * AssignResourceBlocked
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} dmxFolderId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {int} dmxFileId - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @param {bool} forMesh - When forMesh it set, the command executes it's action for the MESH parameter of the given device. When set to false it is executed on the MEDIA parameter.
 *
 */
module.exports.AssignResourceBlocked = (siteId, deviceId, dmxFolderId, dmxFileId, forMesh) => {
  return execute('AssignResourceBlocked', { siteId, deviceId, dmxFolderId, dmxFileId, forMesh })
}

/**
 * JumpToPlayListEntryByDmxId
 * None
 *
 * @param {bool} forward 
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.JumpToPlayListEntryByDmxId = (forward, playlistDmxFolderId, playlistdmxFileId, siteId, deviceId, parameterName) => {
  return execute('JumpToPlayListEntryByDmxId', { forward, playlistDmxFolderId, playlistdmxFileId, siteId, deviceId, parameterName })
}

/**
 * JumpToPlayListEntryByPath
 * None
 *
 * @param {bool} forward 
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.JumpToPlayListEntryByPath = (forward, playlistPath, siteId, deviceId, parameterName) => {
  return execute('JumpToPlayListEntryByPath', { forward, playlistPath, siteId, deviceId, parameterName })
}

/**
 * JumpToPlayListEntryByItemId
 * None
 *
 * @param {bool} forward 
 * @param {int} playlistItemIndex 
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {string_narrow} parameterName - The parameterName is a string that identifies a property of a device. (ASCII only)
 *
 */
module.exports.JumpToPlayListEntryByItemId = (forward, playlistItemIndex, siteId, deviceId, parameterName) => {
  return execute('JumpToPlayListEntryByItemId', { forward, playlistItemIndex, siteId, deviceId, parameterName })
}

/**
 * SetMediaTransportMode
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} transportMode - Playback status of a sequence. Possible values are 1 (Play), 2 (Stop) or 3 (Pause)
 *
 */
module.exports.SetMediaTransportMode = (siteId, deviceId, transportMode) => {
  return execute('SetMediaTransportMode', { siteId, deviceId, transportMode })
}

/**
 * AssignDevice
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {int} deviceId - The deviceId is a per-site unique number that identifies a kind of layer, camera, output or a dmx-device.
 * @param {int} sourceDeviceId 
 *
 */
module.exports.AssignDevice = (siteId, deviceId, sourceDeviceId) => {
  return execute('AssignDevice', { siteId, deviceId, sourceDeviceId })
}

/**
 * CreateCanvas
 * None
 *
 * @param {bool} doSetDmxIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 *
 */
module.exports.CreateCanvas = (doSetDmxIds, newDmxFolderId, newdmxFileId) => {
  return execute('CreateCanvas', { doSetDmxIds, newDmxFolderId, newdmxFileId })
}

/**
 * CreateCanvasByPath
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 * @param {bool} doSetDmxIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 *
 */
module.exports.CreateCanvasByPath = (canvasResourcePath, doSetDmxIds, newDmxFolderId, newdmxFileId) => {
  return execute('CreateCanvasByPath', { canvasResourcePath, doSetDmxIds, newDmxFolderId, newdmxFileId })
}

/**
 * CreateCanvasByItemId
 * None
 *
 * @param {int} folderItemIndex 
 * @param {bool} doSetDmxIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 *
 */
module.exports.CreateCanvasByItemId = (folderItemIndex, doSetDmxIds, newDmxFolderId, newdmxFileId) => {
  return execute('CreateCanvasByItemId', { folderItemIndex, doSetDmxIds, newDmxFolderId, newdmxFileId })
}

/**
 * RecordLiveInputStop
 * None
 *
 *
 */
module.exports.RecordLiveInputStop = () => {
  return execute('RecordLiveInputStop', {  })
}

/**
 * CreateCanvasByPathFromTemplate
 * None
 *
 * @param {string_narrow} canvasResourcePath - A path in the project to a canvas.
 * @param {string_narrow} newResourceName 
 * @param {string_narrow} cmd 
 * @param {bool} setDims - Set Dimensions
 * @param {int} width 
 * @param {int} height 
 * @param {bool} doSetDmxIds 
 * @param {int} newDmxFolderId 
 * @param {int} newdmxFileId 
 *
 */
module.exports.CreateCanvasByPathFromTemplate = (canvasResourcePath, newResourceName, cmd, setDims, width, height, doSetDmxIds, newDmxFolderId, newdmxFileId) => {
  return execute('CreateCanvasByPathFromTemplate', { canvasResourcePath, newResourceName, cmd, setDims, width, height, doSetDmxIds, newDmxFolderId, newdmxFileId })
}

/**
 * GetHostRevisionNumber
 * None
 *
 *
 * @returns {int} 
 */
module.exports.GetHostRevisionNumber = () => {
  return execute('GetHostRevisionNumber', {  })
}

/**
 * GetTreeItemInfo
 * None
 *
 * @param {int} treeItemIndex - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 *
 * @returns {int} 
 * @returns {string_wide} - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @returns {string_wide} - A Windows-Styled path to a folder. ("C:cooluxcontentsample_folder")
 */
module.exports.GetTreeItemInfo = (treeItemIndex) => {
  return execute('GetTreeItemInfo', { treeItemIndex })
}

/**
 * GetMediaInfoByTreeItemIndex
 * None
 *
 * @param {int} index 
 *
 * @returns {int} - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @returns {int} - Resources can have a identifier pair (Folder and File ID) for external control like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is unique in each dmx-folder. The Widget Designer also takes advantage of this kind of addressing of resources.
 * @returns {string_narrow} - The name of the resource without path
 * @returns {string_narrow} - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @returns {string_narrow} - A path in the project tab. ("somefolder/otherfolder") Leave empty for root directory.
 * @returns {int} 
 * @returns {int} 
 * @returns {int} - The frames per second to be used.
 * @returns {int} - The HOURS part of a time or timespan
 * @returns {int} - The MINUTES part of a time or timespan
 * @returns {int} - The SECONDS part of a time or timespan
 * @returns {int} - The FRAMES part of a time or timespan
 * @returns {int} - The settings of the video resource
 */
module.exports.GetMediaInfoByTreeItemIndex = (index) => {
  return execute('GetMediaInfoByTreeItemIndex', { index })
}

/**
 * GetPlaylistEntryByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 * @param {int} playlistEntryIndex 
 *
 * @returns {int} - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @returns {string_narrow} - The name of the resource without path
 * @returns {string_narrow} - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to end at (hours)
 * @returns {int} - The time to end at (minutes)
 * @returns {int} - The time to end at (seconds)
 * @returns {int} - The time to end at (frames)
 * @returns {int} 
 */
module.exports.GetPlaylistEntryByDmxId = (playlistDmxFolderId, playlistdmxFileId, playlistEntryIndex) => {
  return execute('GetPlaylistEntryByDmxId', { playlistDmxFolderId, playlistdmxFileId, playlistEntryIndex })
}

/**
 * GetPlaylistEntryByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 * @param {int} playlistEntryIndex 
 *
 * @returns {int} - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @returns {string_narrow} - The name of the resource without path
 * @returns {string_narrow} - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to end at (hours)
 * @returns {int} - The time to end at (minutes)
 * @returns {int} - The time to end at (seconds)
 * @returns {int} - The time to end at (frames)
 * @returns {int} 
 */
module.exports.GetPlaylistEntryByPath = (playlistPath, playlistEntryIndex) => {
  return execute('GetPlaylistEntryByPath', { playlistPath, playlistEntryIndex })
}

/**
 * GetPlaylistEntryByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 * @param {int} playlistEntryIndex 
 *
 * @returns {int} - TreeItemIDs are counted from top to bottom in the project tree. Nesting has no influence on counting order. The first item is 0 (always the project root folder)
 * @returns {string_narrow} - The name of the resource without path
 * @returns {string_narrow} - A string representing the full path to a resource of the project. Resources in the root folder can be addressed directly like "resource.mpv". The same resource in a subfolder named "sub" can be referenced by "sub/resource.mpv"
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to start at (hours)
 * @returns {int} - The time to start at (minutes)
 * @returns {int} - The time to start at (seconds)
 * @returns {int} - The time to start at (frames)
 * @returns {int} - The time to end at (hours)
 * @returns {int} - The time to end at (minutes)
 * @returns {int} - The time to end at (seconds)
 * @returns {int} - The time to end at (frames)
 * @returns {int} 
 */
module.exports.GetPlaylistEntryByItemId = (playlistItemIndex, playlistEntryIndex) => {
  return execute('GetPlaylistEntryByItemId', { playlistItemIndex, playlistEntryIndex })
}

/**
 * GetPlaylistEntryIndicesByDmxId
 * None
 *
 * @param {int} playlistDmxFolderId 
 * @param {int} playlistdmxFileId 
 *
 * @returns {int_buffer} 
 */
module.exports.GetPlaylistEntryIndicesByDmxId = (playlistDmxFolderId, playlistdmxFileId) => {
  return execute('GetPlaylistEntryIndicesByDmxId', { playlistDmxFolderId, playlistdmxFileId })
}

/**
 * GetPlaylistEntryIndicesByPath
 * None
 *
 * @param {string_narrow} playlistPath - A path in the project to a playlist.
 *
 * @returns {int_buffer} 
 */
module.exports.GetPlaylistEntryIndicesByPath = (playlistPath) => {
  return execute('GetPlaylistEntryIndicesByPath', { playlistPath })
}

/**
 * GetPlaylistEntryIndicesByItemId
 * None
 *
 * @param {int} playlistItemIndex 
 *
 * @returns {int_buffer} 
 */
module.exports.GetPlaylistEntryIndicesByItemId = (playlistItemIndex) => {
  return execute('GetPlaylistEntryIndicesByItemId', { playlistItemIndex })
}

/**
 * CreateGraphicLayerGetId
 * None
 *
 * @param {int} siteId - The siteId is a unique number that identifies a manager, player or server in a project. Sites can also be created without assigning them to a specific physical machine. The site id can be found when looking at the Master in the Devices Tab
 * @param {bool} isGraphicLayer 
 *
 * @returns {int} 
 */
module.exports.CreateGraphicLayerGetId = (siteId, isGraphicLayer) => {
  return execute('CreateGraphicLayerGetId', { siteId, isGraphicLayer })
}

