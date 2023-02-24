var sec;
var timer;
var timerElement = document.getElementById("timer");

function startTimer(){
  // 5 second warning screen, first team gets 30 seconds, 5 second warning screen, then next team gets 30 seconds
  timerFunction5();
}

function timerFunction5Start () {
  sec = 5
  timer = setInterval(() =>
  { if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
          timerFunction30TeamOne();
        } else {
          timerElement.innerText = "00:0" + sec;
        }
    } else {
        timerElement.innerText = "00:" + sec;
        }
    sec --;
  }, 1000);
}

function timerFunction30TeamOne () {
  sec = 11
  timer = setInterval(() =>
  { if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
          timerFunction5Break();
        } else {
          timerElement.innerText = "00:0" + sec;
        }
    } else {
        timerElement.innerText = "00:" + sec;
        }
    sec --;
  }, 1000);
}

function timerFunction5Break () {
  sec = 5
  timer = setInterval(() =>
  { if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
          timerFunction30TeamTwo();
        } else {
          timerElement.innerText = "00:0" + sec;
        }
    } else {
        timerElement.innerText = "00:" + sec;
        }
    sec --;
  }, 1000);
}

function timerFunction30TeamTwo () {
  sec = 11
  timer = setInterval(() =>
  { if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
          timerFunction5Start(); // goes back to the first timer
        } else {
          timerElement.innerText = "00:0" + sec;
        }
    } else {
        timerElement.innerText = "00:" + sec;
        }
    sec --;
  }, 1000);
}

function stopTimer(e) {
  var keyPressed = e.charCode;
  if (keyPressed == 92) {
    clearInterval(timer);
  }
}
