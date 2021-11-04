const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const audio = document.querySelector('.audio');
const btnContainer = document.querySelector('.btn-container');
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
let flag = false;

piano.addEventListener('mousedown', playAudio);
piano.addEventListener('mousedown', makeKeyActive);
piano.addEventListener('mousedown', playAudioMouseOver);
window.addEventListener('keydown', playAudioKeyboard);
window.addEventListener('keydown', makeKeyActiveKeyboard);
document.body.addEventListener('mouseup', stopMouseMovePlay);
btnContainer.addEventListener('click', checkBtnState);


function playAudio(event) {
  flag = false;
  audio.src = `assets/audio/${event.target.dataset.note}.mp3`
  audio.currentTime = 0;
  audio.play();
}

function playAudioMouseOver(event) {
  if(flag === true) return;
  audio.src = `./assets/audio/${event.target.dataset.note}.mp3`;
  audio.currentTime = 0;
  audio.play();
  piano.addEventListener('mouseover', playAudioMouseOver);
  makeKeyActive(event);
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

function stopMouseMovePlay() {
  flag = true;
}

function checkBtnState(event) {
  if(event.target.classList.contains('btn-active')) return;
  else {
    changeBtnState();
    changePianoKeysValues();
  }
}

function changeBtnState() {
  btnNotes.classList.toggle('btn-active');
  btnLetters.classList.toggle('btn-active');
}

function changePianoKeysValues() {
  pianoКeys.forEach((key) => key.classList.toggle('letter'));
}