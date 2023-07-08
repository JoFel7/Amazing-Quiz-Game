// Document query selectors
var startBtn = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');
var mainEl = document.querySelector('#main');
var highscoreLi = document.querySelector('#highscore-link')

//Variables
var timerInterval;
var secondsLeft;
var quizSelection;
var quizPrompt;
var quizAnswers;

//Quiz Prompts and Answers arrays
const javascriptQuestions = [
    'Commonly used data types DO NOT include:',
    'The condition in an if / else statement is enclosed within ______.',
    'Arrays in JavaScript can be used to store ______.',
    'String values must be enclosed within ______ when being assigned to variables.',
    'A very useful tool used during development and debugging for printing content to the debugger is:'
];

const javascriptAnswers = [
    [['strings', false], ['booleans', false], ['alerts', true], ['numbers', false]],
    [['quotes', false], ['curly brackets', false], ['parentheses', true], ['square brackets', false]],
    [['numbers and strings', false], ['other arrays', false], ['booleans', false], ['all the above', true]],
    [['commas', false], ['curly brackets', false], ['quotes', true], ['parentheses', false]],
    [['JavaScript', false], ['terminal/bash', false], ['for loops'], ['console.log', true]]
];

