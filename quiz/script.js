const prompt = require("prompt-sync")();

console.log("Welcome to the European Capitals Quiz!");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the capital of France?: ");
const correctAnswer1 = "Paris";

if (answer1 === correctAnswer1) {
    console.log("You got it correct!");
    correctAnswers++;
} else {
    console.log("You got it wrong...");
}

const answer2 = prompt("What is the capital of Italy?: ");
const correctAnswer2 = "Rome";

if (answer2 === correctAnswer2) {
    console.log("You got it correct!");
    correctAnswers++;
} else {
    console.log("You got it wrong...");
}

const answer3 = prompt("What is the capital of Spain: ");
const correctAnswer3 = "Madrid";


if (answer3 === correctAnswer3) {
    console.log("You got it correct!");
    correctAnswers++;
} else {
    console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You score", percent.toString() + "%");
