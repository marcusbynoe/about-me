'use strict';

console.log('Hello world!');

// TODO: GET USERS NAME - prompt - alert a greeting back to the user

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

// TODO: prompt them with 5 yes or no (y/n) questions. And let them know if the got the answer right or wrong

let qOne = prompt('My question');.toLowerCase();

if(qOne === 'yes' || qOne === 'y'){
  alert('You got it right!');
} else if(qOne === 'no' || qOne === 'n'){
  alert('Sorry, you got it wrong');
}