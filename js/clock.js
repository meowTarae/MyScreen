const HOURS = document.querySelector(".clockBox1 h2");
const MINUTES = document.querySelector(".clockBox3 h2");
const AMPM = document.querySelector(".clockBox4 .ampm");
const SECONDS = document.querySelector(".clockBox4 .sec div:last-child");

function getNowTime() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const secs = String(date.getSeconds()).padStart(2, "0");

  if (date.getHours() >= 13) {
    hours = String(date.getHours() - 12).padStart(2, "0");
  }
  if (date.getHours() < 12) {
    AMPM.innerText = `AM`;
  } else {
    AMPM.innerText = `PM`;
  }
  HOURS.innerText = `${hours}`;
  MINUTES.innerText = `${mins}`;
  SECONDS.innerText = `${secs}`;
}

getNowTime();
setInterval(getNowTime, 1000);
