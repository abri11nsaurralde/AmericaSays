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

var sec;
var timer;
var timerElement = document.getElementById("timer");

// function start(){
//   // resetTimer();
//   sec = 1;
//   timer = setInterval(() =>
//   { if (sec < 15) {
//       if (sec < 10) {
//         timerElement.innerText = "00:0" + sec;
//       } else {
//         timerElement.innerText = "00:" + sec;
//         }
//     sec ++;
//   } else if (se) {
//
//   }{
//     sec = 1;
//     nextQuestion();
//   }
//   }, 1000);
//   // alert("moving on...");
//   // if (sec == ) {
//   //
//   // }
//
// }
//
// function updateTime() {
//     if (sec < 15) {
//       if (sec < 10) {
//         timerElement.innerText = "00:0" + sec;
//       } else {
//         timerElement.innerText = "00:" + sec;
//       }
//       sec ++;
//     } else {
//       sec = 1;
//       nextQuestion();
//     }
//     // else if (sec <= 60) {
//     //
//     // }
// }

// setInterval(()=> {

// }

function nextQuestion() {
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

          var emptyAnswer= letter;
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

function enterKey(e) { // checks if the return key was pressed
  keyPressed = e.charCode;
  if (keyPressed == 13) {
    inputElement = document.getElementById("answerBox");
    input = document.getElementById("answerBox").value;
    for (let i = 0; i < indivAnswers.length; i++) {
      lowerCase = makeLowercase(indivAnswers[i]);
      upperCase = makeUppercase(indivAnswers[i]);
      upperThenLowercase = makeEverythingButFirstLetterLowercase(indivAnswers[i])

      if (input == indivAnswers[i] || input == lowerCase || input == indivAnswers[i] + " " || input == lowerCase + " " || input == upperCase || input == upperCase + " " || input == upperThenLowercase || input == upperThenLowercase + " ") {
        document.getElementById("answer" + i).innerText = indivAnswers[i]; // changes the answer
      }
    }
    document.getElementById("answerBox").value = "";
  }
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

/* TODO:
  - timer
  - points system
  - ughhhhhhhhhhhhhhhhhhhhhhhh (make the css file)
*/
