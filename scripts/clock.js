function updateClock() {
  var now = new Date();
  var time =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0") +
    ":" +
    now.getSeconds().toString().padStart(2, "0");
  var date =
    now.getDate().toString().padStart(2, "0") +
    "/" +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    now.getFullYear();
  document.getElementById("clock").innerHTML = time + "<br>" + date;
}

setInterval(updateClock, 1000);
