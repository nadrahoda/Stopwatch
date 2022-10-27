var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Start = document.getElementById("start");
var Stop = document.getElementById("stop");
var Reset = document.getElementById("reset");

//  a variable interval to store the values of timer
var interval;

// Function runs when we click on Start Button 
function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens >= 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
Start.onclick = function () {
  interval = setInterval(startTimer,9);
};

Stop.onclick = function () {
  clearInterval(interval);
};
Reset.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
};
