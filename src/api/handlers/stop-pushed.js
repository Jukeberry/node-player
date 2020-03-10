
const handler = module.exports = {};
const player = require("../../player/player.js")

/**
 * Inform when the stop button was pushed
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent
 */
handler.onStopPushed = async ({message}) => {
  // Implement your business logic here...
  player.stop();
};
