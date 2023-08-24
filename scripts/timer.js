var seconds = 0;
var minutes = 0;
var hours = 0;

function updateTitle() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  var time =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  document.title = "focus - " + time;
}

setInterval(updateTitle, 1000);
