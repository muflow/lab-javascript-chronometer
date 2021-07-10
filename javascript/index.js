const chronometer = new Chronometer();
// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  this.printMinutes();
  this.printSeconds();
  this.printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.getMinutes()
  let twoDigitsMinutes = chronometer.twoDigitsNumber(minutes)

  minDec.innerText = twoDigitsMinutes[0]
  minUni.innerText = twoDigitsMinutes[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds()
  let twoDigitsSeconds = chronometer.twoDigitsNumber(seconds)

  secDec.innerText = twoDigitsSeconds[0]
  secUni.innerText = twoDigitsSeconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milsec = chronometer.getMiliseconds()
  let twoDigMilSec = chronometer.twoDigitsNumber(milsec)

  milDec.innerText = twoDigMilSec[0]
  milUni.innerText = twoDigMilSec[1]
}

function printSplit() {
  // ... your code goes here
  let newListItem = document.createElement('li')

  newListItem.innerText = chronometer.splitClick()
  splits.appendChild(newListItem)
}

function clearSplits() {
  // ... your code goes here
  while (splits.lastChild) {
    splits.removeChild(splits.lastChild)
  }
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = 'STOP'
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = 'SPLIT'
  btnRight.className = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = 'START'
  btnLeft.className = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = 'RESET'
  btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText == 'START') {
    chronometer.startClick(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.innerText == 'SPLIT') {
    this.printSplit()
  } else {
    chronometer.resetClick(printTime)
    this.clearSplits()
  }
});