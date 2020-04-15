const player  = module.exports = {};
var playSound = require('play-sound')(opts = {})

let stream;
let audio;


player.play = function(songPath) {
    this.stop();
    this.audio = playSound.play(songPath, function(err){
        if (err) throw err
      })

}

player.stop = function() {
    if (this.audio) {
        this.audio.kill();
    }
        
}