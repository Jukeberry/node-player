
const handler = module.exports = {};
const player = require("../../player/player.js")

/**
 * Inform when the stop button was pushed
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent
 */
handler.onStopPushed = async ({message}) => {
  console.log("Stopping the currently playing song (if any)")
  console.log("============================================")
  player.stop();
};
