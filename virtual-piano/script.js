const piano = document.querySelector('.piano');
const pianoKeys = document.querySelector('.piano-key');
const audio = document.querySelector('.audio');

piano.addEventListener('mousedown', playAudio);

function playAudio(event) {
  audio.src = `assets/audio/${event.target.dataset.note}.mp3`
  audio.currentTime = 0;
  audio.play();
}