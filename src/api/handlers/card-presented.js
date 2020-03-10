
const handler = module.exports = {};
var lame = require('lame');
var fs = require('fs');
var Speaker = require('speaker');


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
    96675065265: "music/ParanoidAndroid.mp3",
    664003290249: "music/Creep.mp3",
    649586696873: "music/HighAndDry.mp3",
    711986787821: "music/BonfireHeart.mp3"
  }

  // Implement your business logic here...

  var song = switcher[message.payload.id]
  var audio;
  if (song) {
    console.log("should play: " + song);
    if (stream) stream.pause();
    var stream = fs.createReadStream(song);
    var decoder = new lame.Decoder();
    var speaker;

    stream.pipe(decoder).on('format', function(format) {
        speaker = new Speaker(format);
        this.pipe(speaker);
    });
    
  } else {
    console.log("id not found in map");
  }
    
};
