'use strict';

// console.log('Hello World!');

let userName = prompt('Hi, what is your name?');
alert(`Welcome to my site ${userName}! I am going to ask you a series of questions that need a yes/no or y/n answer`);

let qOne = prompt('Question 1: I am the only child?').toLowerCase();
if (qOne === 'yes' || qOne === 'y') {
  alert('Sorry, that is incorrect');
} else if (qOne === 'no' || qOne === 'n') {
  alert('Nice! You got it right!');
}
// console.log('User\'s first answer is ' + qOne);

let qTwo = prompt('Question 2: I was born in the west coast?').toLowerCase();
if (qTwo === 'yes' || qTwo === 'y') {
  alert('Sorry, you are wrong');
} else if (qTwo === 'no' || qTwo === 'n') {
  alert('Awesome, you guessed correctly!');
}
// console.log('User\'s second answer is ' + qTwo);

let qThree = prompt('Question 3: I served in the U.S Navy?').toLowerCase();
if (qThree === 'yes' || qThree === 'y') {
  alert('That is incorrect... I can barely swim unfortunately');
} else if (qThree === 'no' || qThree === 'n') {
  alert('Correct! I was in the Army!');
}
// console.log('User\'s third answer is ' + qThree);

let qFour = prompt('Question 4: I like to play video games?').toLowerCase();
if (qFour === 'yes' || qFour === 'y') {
  alert('That is correct! I love gaming!');
} else if (qFour === 'no' || qFour === 'n') {
  alert('Incorrect! Video games is life.');
}
// console.log('User\'s fourth answer is ' + qFour);

let qFive = prompt('Last question: Is EDM my favorite genre of music?').toLowerCase();
if (qFive === 'yes' || qFive === 'y') {
  alert('You guessed correctly!');
} else if (qFive === 'no' || qFive === 'n') {
  alert('Sorry that is the wrong answer');
}
// console.log('User\'s fifth answer is ' + qFive);

alert(`Thanks for answering my questions ${userName}! Hope you learned a little more about me from the questionnaire!`);

alert('But wait, theres more! You have to play a guessing game. Pick a number between 10 to 30. You will have 4 chances to guess it right!');

let myNum = 19;
let numGuess = 4;

// let userGuess = prompt('What number number am I thinking of?');
for (let i = 0; i < numGuess; i++) {
  let userGuess = +prompt('What number number am I thinking of?');
  if(userGuess === myNum){
    console.log(userGuess);
    alert('You got it right!');
    numGuess = 0;
    break;
  }
  // code assisted by TA Bradon Mizutani
  else if(i >= 3){
    console.log('out of tries');
    alert('Out of guesses! The correct answer is: 19');
    break;
  }
  if(userGuess < myNum){
    alert('Too low!');
    console.log(userGuess);
  }else if(userGuess > myNum) {
    alert('Too high!');
    console.log(userGuess);
  }
}

let favFood = ['tacos', 'sushi', 'pasta', 'curry'];

for(let i = 0; i < 6; i++){ // slow loop
  let qSeven = prompt('What is one of my favorite foods?').toLowerCase();
  for(let j = 0; j <favFood.length; j++){ // fast loop
    if(qSeven === favFood[j]){
      alert('You got it right!');
      score++;
      i = 6;
      break;
    }
  }
}
