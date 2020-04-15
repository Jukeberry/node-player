
const handler = module.exports = {};
const player = require("../../player/player.js")



/**
 * Inform when a card has been read
 * @param {object} options  
 * @param {object} options.message
 * @param {integer} options.message.payload.id - Id of read card.
 * @param {string} options.message.payload.text - The card might have any text description.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.onCardPresented = async ({message}) => {

  var switcher = {
    96675065265: "music/Bodysnatchers.mp3",
    664003290249: "music/Creep.mp3",
    649586696873: "music/HighAndDry.mp3"
  }

  // Implement your business logic here...

  var song = switcher[message.payload.id]
  var audio;
  if (song) {
    console.log("\n")
    console.log("Now Playing: " + song);
    console.log("\n")
    player.play(song)
    
    
  } else {
    console.log("\n")
    console.log("The id wasn't found or no song associated to it");
    console.log("\n")
  }
    
};
