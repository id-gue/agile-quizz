const quizContainer = document.getElementById('question');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){};

//display questions and possibilities to answer
buildQuiz();

//import quesstions from json file

var json = require('quiz.json');

console.log(['json', json]);