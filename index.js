const playButton = document.getElementById('play-button');

function createAudioSources(...sources) {
  sources.forEach((source) => {
    const sound = new Audio();
    const sourceElement = document.createElement('source');
    sourceElement.type = 'audio/ogg';
    sourceElement.src = source;
    sound.appendChild(sourceElement);

    playButton.addEventListener('click', () => {
      sound.play();
    });
  });
}

createAudioSources('audio/cow.ogg', 'audio/dog.ogg', 'audio/rooster.ogg');
