var questionList = ["My fish loves the ____ in his aquarium?", "You’ve probably heard someone say “Across the ____”", "If you work as a ____ you can bet no two days will be exactly alike?"];
var answerList =
["Treasure Chest, Castle, Bubbles, Plants, Gravel, Diver, Cave",
"Street, Line, Way, Universe, Board, Room",
"Police Officer, Doctor, Waiter, Fireman, Nurse, Cab Driver, Teacher"]; // missing: cab driver
var indivAnswers = [];
var indivAnswerSg = [];

var random;
var keyPressed;
var inputElement;
var input;
var letter;
var letter2;
var lineLength;
var lineLength2;
var emptyAnswer;
var answerNumber = 0;
var lowerCase;
var upperCase;
var upperThenLowercase;
var teamA;
var teamB;
var rounds = 0; // rounds counter starts at 0, adds value at the /beginning/ of each round
var teamAPoints = 0;
var teamBPoints = 0;
var teamAPointsElement = document.getElementById("teamAPoints");
var teamBPointsElement = document.getElementById("teamBPoints");
var whosTurn;
var wordsAnswered = 0;
var stepCounter = 0;
var quoteList = ["A person without regrets is a nincompoop", "Try to be a rainbow in someone else’s cloud", "A problem is a chance for you to do your best", "The most important trip you may take in life is meeting people halfway", "Happiness makes up in height for what it lacks in length", "Success is falling nine times and getting up ten", "Don’t say you can’t until you prove you can’t", "I still close my eyes and go home—I can always draw from that", "No day in which you learn something is a complete loss", "Be open to learning new lessons, even if they contradict the lessons you learned yesterday", "The sky isn’t the limit—the sky has no limit", "Speak your mind, even if your voice shakes", "All glory comes from daring to begin", "If you don’t place your foot on the rope, you’ll never cross the chasm", "Joy is one of the only emotions you can’t contrive", "I don’t want to get to the end of my life and find that I have just lived the length of it. I want to have lived the width of it as well", "The best thing about the future is that it comes only one day at a time"];
var quoteAuthorList = ["Mia Farrow", "Maya Angelou", "Duke Ellington", "Henry Boye", "Robert Frost", "Jon Bon Jovi", "Les Paul", "Dolly Parton", "David Eddings", "Ellen DeGeneres", "Sarah Barker", "Maggie Kuhn", "Eugene F. Ware", "Liz Smith", "Bono", "Diane Ackerman", "Dean Acheson"];
var randomQuote;


// ---timer variables---
var sec;
var timer;
var timerElement = document.getElementById("timer");
var timerGameElement = document.getElementById("timer-screen");
var timerGameElement2 = document.getElementById("timer-screen2");

function start () {
  teamA = document.getElementById("teamABox").value;
  teamB = document.getElementById("teamBBox").value;
  document.getElementById("teamAPointName").innerText = teamA + ": ";
  document.getElementById("teamBPointName").innerText = teamB + ": ";
  timerFunction5Start();
}

function nextQuestion() {
  for (let k = 0; k < indivAnswers.length; k++) {
    var answerID = document.getElementById("answer" + k);
    answerID.style.color = "rgba(255, 170, 170, 255)";
    }
  wordsAnswered = 0;
  answerNumber = 0; // resets the value added to the end of an answer's ID
  document.getElementById("answers").innerHTML = ""; // deletes all the old answers
  random = Math.floor(Math.random() * questionList.length);
  if (questionList[random] == null) { // checks if it's run out of questions
    alert("out of questions :(");
  } else {
    document.getElementById("question").innerText = questionList[random]; // changes the question
    indivAnswers = answerList[random].split(", "); // seperates the list of possible answers
    for (let i = 0; i < indivAnswers.length; i++) { // makes an empty answer
      // vvv split answer and get the first character of each letter, then add _______
      indivAnswerSg = indivAnswers[i].split(" ");
      if (indivAnswerSg.length == 2) { // checks if the answer is two words long
          letter = indivAnswerSg[0].charAt(0);
          letter2 = indivAnswerSg[1].charAt(0);

          lineLength = indivAnswerSg[0].length;
          lineLength2 = indivAnswerSg[1].length;

          var emptyAnswer = letter;
          for (let i = 0; i < lineLength; i++) {
          emptyAnswer = emptyAnswer + "_"
          }

          var emptyAnswer = emptyAnswer + letter2;
          for (let i = 0; i < lineLength2; i++) {
          emptyAnswer = emptyAnswer + "_"
          }

          var newSpan = document.createElement("span");
          newSpan.innerText = emptyAnswer;
          newSpan.id = "answer" + answerNumber;
          document.getElementById("answers").appendChild(newSpan);

      } else {
        letter = indivAnswerSg[0].charAt(0);
        lineLength = indivAnswerSg[0].length;
        emptyAnswer = letter;
          for (let i = 0; i < lineLength; i++) {
          emptyAnswer = emptyAnswer + "_";
          }
          var newSpan = document.createElement("Span");
          newSpan.innerText = emptyAnswer;
          newSpan.id = "answer" + answerNumber;
          document.getElementById("answers").appendChild(newSpan);
      }
      answerNumber = answerNumber + 1;
    }
  }

  var usedQuestions = questionList.splice(random, 1);
  var usedAnswers = answerList.splice(random, 1);
}

function endScreen() {
  clearInterval(timer);

  document.getElementById("endScreen").style.opacity = 1;
  document.getElementById("endScreen").classList.remove("hidden");
  var innerTextPointsA = "Team " + teamA + ": " + teamAPoints;
  var innerTextPointsB = "Team " + teamB + ": " + teamBPoints;

  document.getElementById("teamAPointsSummary").innerText = innerTextPointsA;
  document.getElementById("teamBPointsSummary").innerText = innerTextPointsB;
  var innerTextCongrats;
  if (teamAPoints > teamBPoints) {
    innerTextCongrats = "Congratulations Team " + teamA + "!!";
  } else if (teamBPoints > teamAPoints) {
    innerTextCongrats = "Congratulations Team " + teamB + "!!";
  } else {
    innerTextCongrats = "Tie!! Congratulations to both teams!"
  }
  document.getElementById("congratulations").innerText = innerTextCongrats;
}

function makeLowercase(answer) {
lowerCase = answer.toLowerCase();
return lowerCase;
}

function makeUppercase(answer) {
upperCase = answer.toUpperCase();
return upperCase;
}

function makeEverythingButFirstLetterLowercase(answer) { // ex. answer = Treasure Chest, length = 14
letter = answer.charAt(0); // ex. letter = T
var everythingButFirstLetter = answer.substring(1, answer.length); // ex. everythingButFirstLetter = reasure Chest
var everythingButFirstLetterMadeLowercase = everythingButFirstLetter.toLowerCase(); // ex. everythingButFirstLetterMadeLowercase = reasure chest
var everythingButTheFirstLetterIsLowercase = letter + everythingButFirstLetterMadeLowercase; // ex. everythingButTheFirstLetterIsLowercase = Treasure chest
return everythingButTheFirstLetterIsLowercase;
}


//----------timer functions---------------

function timerFunction5Start () {
  // team one starts, pause screen pops up before dissapearing again after 5 seconds, with timer function
  rounds++;
  if (rounds == 1) {
    sec = 4;
  } else {
    sec = 5;
  }

  if (rounds > 1) {
    showStartWaitingScreen();
  }

  if ((rounds % 2) == 1) { // checks if it is TeamA or TeamB's turn
    document.getElementById("startWaitingScreenText").innerText = "Team " + teamA + " starting in:";
    whosTurn = "itsTeamA'sTurn";
  } else if ((rounds % 2) == 0) {
    document.getElementById("startWaitingScreenText").innerText = "Team " + teamB + " starting in:";
    whosTurn = "itsTeamB'sTurn";
  }

  document.getElementById("roundCounter").innerText = "Round " + rounds;

  randomQuote = Math.floor(Math.random() * quoteList.length);
  document.getElementById("quote").innerText = "“" + quoteList[randomQuote] + ".”";
  document.getElementById("author").innerText = "—— " + quoteAuthorList[randomQuote] + ", an American";
  quoteList.splice(randomQuote, 1);
  quoteAuthorList.splice(randomQuote, 1);

  timer = setInterval(() =>
  { timerElement.innerText = "00:30";
    if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
        timerFunction30TeamOne();
        } else {
          timerGameElement.innerText = "00:0" + sec;
        }
    } else {
        timerGameElement.innerText = "00:" + sec;
        }
    sec --;
  }, 1000);
}

function timerFunction30TeamOne () {
  stepCounter = 2;
  nextQuestion();
  sec = 30;
  removeStartWaitingScreen();
  timer = setInterval(() =>
  {timerGameElement.innerText = "00:05";
     if (sec < 10) {
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
  stepCounter = 3;
  sec = 5;

  if ((rounds % 2) == 1) { // checks if it is TeamA or TeamB's turn
    document.getElementById("pauseScreenText").innerText = "Team " + teamB + " starting in:";
    whosTurn = "itsTeamB'sTurn";
  } else if ((rounds % 2) == 0) {
    document.getElementById("pauseScreenText").innerText = "Team " + teamA + " starting in:";
    whosTurn = "itsTeamA'sTurn";
  }

  document.getElementById("roundCounterPause").innerText = "Round " + rounds;

  randomQuote = Math.floor(Math.random() * quoteList.length);
  document.getElementById("quotePause").innerText = "“" + quoteList[randomQuote] + ".”";
  document.getElementById("authorPause").innerText = "—— " + quoteAuthorList[randomQuote] + ", an American";
  quoteList.splice(randomQuote, 1);
  quoteAuthorList.splice(randomQuote, 1);

  showPauseSplashScreen();

  timerElement.innerText = "00:30";
  timer = setInterval(() =>
  { if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
          timerFunction30TeamTwo();
        } else {
          timerGameElement2.innerText = "00:0" + sec;
        }
    } else {
        timerGameElement2.innerText = "00:" + sec;
        }
    sec --;
  }, 1000);
}

function timerFunction30TeamTwo () {
  sec = 30;

  removePauseSplashScreen();

  timerGameElement2.innerText = "00:05";
  timer = setInterval(() =>
  { if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
        if (wordsAnswered != indivAnswers.length) {
          for (let k = 0; k < indivAnswers.length; k++) {
            var answerID = document.getElementById("answer" + k);
            if (answerID.innerHTML != indivAnswers[k]) {
              answerID.style.color = "rgba(255, 170, 170, 255)";
              answerID.innerText = indivAnswers[k];
              }
            }
        }
        setTimeout(timerFunction5Start, 2000); // goes back to the first timer
        } else {
          timerElement.innerText = "00:0" + sec;
        }
    } else {
        timerElement.innerText = "00:" + sec;
        }
    sec --;
  }, 1000);
}

function checkKey(e) {
  var keyPressed = e.charCode;
  if (keyPressed == 13) {
      inputElement = document.getElementById("answerBox");
      input = document.getElementById("answerBox").value;
      for (let i = 0; i < indivAnswers.length; i++) {
        lowerCase = makeLowercase(indivAnswers[i]);
        upperCase = makeUppercase(indivAnswers[i]);
        upperThenLowercase = makeEverythingButFirstLetterLowercase(indivAnswers[i])
        var answerID = document.getElementById("answer" + i);
        if (input == indivAnswers[i] || input == lowerCase || input == indivAnswers[i] + " " || input == lowerCase + " " || input == upperCase || input == upperCase + " " || input == upperThenLowercase || input == upperThenLowercase + " ") {
          if (answerID.innerText != upperCase) {
            wordsAnswered++;
            answerID.innerText = indivAnswers[i]; // changes the answer
            addPoints();
            if (wordsAnswered == indivAnswers.length) {
              clearInterval(timer);
              setTimeout(timerFunction5Start, 2000);
            }
          }

        }
      }
      document.getElementById("answerBox").value = "";
  }
}

function addPoints() {
  if (whosTurn == "itsTeamA'sTurn") {
    teamAPoints++;
    teamAPointsElement.innerText = teamAPoints;
  } else if (whosTurn == "itsTeamB'sTurn") {
    teamBPoints++;
    teamBPointsElement.innerText = teamBPoints;
  }
}

//-----------splash screen----------------

var startSplashScreen = document.getElementById("startSplashScreen");
var startWaitingScreen = document.getElementById("startWaitingScreen");
var pauseSplashScreen = document.getElementById("pauseSplashScreen");

function removeSplashScreen () {
  startSplashScreen.style.opacity = 0;
  setTimeout(()=>{
    startSplashScreen.classList.add("hidden")
    },610);
}

function removeStartWaitingScreen () {
  startWaitingScreen.style.opacity = 0;
  setTimeout(()=>{
    startWaitingScreen.classList.add("hidden")
    },610);
}

function removePauseSplashScreen () {
  pauseSplashScreen.style.opacity = 0;
  setTimeout(()=>{
    pauseSplashScreen.classList.add("hidden")
    },610);
}

// show functions

function showStartWaitingScreen () {
  startWaitingScreen.style.opacity = 1;
  startWaitingScreen.classList.remove("hidden");
}

function showPauseSplashScreen () {
  pauseSplashScreen.style.opacity = 1;
  pauseSplashScreen.classList.remove("hidden");
}


// end endButton

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



/* TODO:
  - make font work
  - upload the right advisory olympics logo

  DONE:
 - avoid being able to type in an answer twice
 - show answers at the end
 - end round early
 - change color of missing text
 - end button + popup screen with summary
    - rounds played
    - perfect rounds
    - do you really want to end the game? (NO, yes!)-- really? (im sure, no, thanks for making sure)
*/
