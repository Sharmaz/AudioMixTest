const sound_1  = new Audio();
const source_1  = document.createElement("source");
source_1.type = "audio/ogg";
source_1.src  = "audio/cow.ogg";
sound_1.appendChild(source_1);

var sound_2  = new Audio();
var source_2  = document.createElement("source");
source_2.type = "audio/ogg";
source_2.src  = "audio/dog.ogg";
sound_2.appendChild(source_2);

var sound_3  = new Audio();
var source_3  = document.createElement("source");
source_3.type = "audio/ogg";
source_3.src  = "audio/rooster.ogg";
sound_3.appendChild(source_3);

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
  sound_1.play(); sound_2.play(); sound_3.play();
});
