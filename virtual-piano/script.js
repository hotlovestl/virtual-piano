const piano = document.querySelector('.piano');
const pianoKeys = document.querySelector('.piano-key');
const audio = document.querySelector('.audio');

piano.addEventListener('mousedown', playAudio);
piano.addEventListener('mousedown', makeKeyActive);
window.addEventListener('keydown', playAudioKeyboard);
window.addEventListener('keydown', makeKeyActiveKeyboard);

function playAudio(event) {
  audio.src = `assets/audio/${event.target.dataset.note}.mp3`
  audio.currentTime = 0;
  audio.play();
}

function playAudioKeyboard(event) {
  if(event.repeat) return;
  const pianoKey = document.getElementById(event.code);
  audio.src = `assets/audio/${pianoKey.dataset.note}.mp3`
  audio.currentTime = 0;
  audio.play();
}

function makeKeyActive(event) {
  event.target.classList.add('piano-key-active');
  event.target.addEventListener('mouseup', makeKeyInactive);
  event.target.addEventListener('mouseout', makeKeyInactive);
}

function makeKeyActiveKeyboard(event) {
  const pianoKey = document.getElementById(event.code);
  pianoKey.classList.add('piano-key-active');
  window.addEventListener('keyup', makeKeyInactiveKeyboard)
}

function makeKeyInactive(event) {
  event.target.classList.remove('piano-key-active');
}

function makeKeyInactiveKeyboard(event) {
  const pianoKey = document.getElementById(event.code);
  pianoKey.classList.remove('piano-key-active');
}