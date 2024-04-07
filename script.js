let timer;
let totalSeconds;

function startTimer() {
  const minutes = parseInt(document.getElementById('minutes').value);
  if (isNaN(minutes) || minutes < 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }
  totalSeconds = minutes * 60;
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  document.getElementById('display').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  if (totalSeconds === 0) {
    clearInterval(timer);
    alert("Time's up!");
  } else {
    totalSeconds--;
  }
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById('minutes').value = "";
  document.getElementById('display').innerText = "00:00";
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
