var seconds = 0;
var minutes = 0;

function updateTitle() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  var time =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  document.title = "focus - " + time;
}

setInterval(updateTitle, 1000);
