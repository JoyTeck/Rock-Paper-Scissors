//When a user inputs a number
//Loop from 1 to the entered number
//If the current number is divisible by 3 then print "Fizz"
//If the current number is divisible by 5 then print "Buzz"
//If the current number is divisible by 3 and 5 then print "FizzBuzz"
//Otherwise print the current number

let firstName = "John";
let lastName = "Doe";
let thisYear = 1947;
let birthYear = 1965;

let age = thisYear - birthYear;
let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;

console.log(greeting);

//Pseudocode
//START
//Display "Choose Rock, Paper, or Scissors"
//GET userChoice from user input
//GENERATE randomNumber between 0 and 2
//IF randomNumber is 0 THEN
//computerChoice = "Rock"
//ELSE IF randomNumber is 1 THEN
//computerChoice = "Paper"
//ELSE
//computerChoice = "Scissors"
//ENDIF

//Display "Computer chose " + computerChoice

//IF userChoice is computerChoice THEN
//Display "It's a Tie!"
//ELSE IF (userChoice is "Rock" AND computerChoice is "Scissors") OR
//(userChoice is "Paper" AND computerChoice is "Rock") OR
//(userChoice is "Scissors" AND computerChoice is "Paper") THEN
//Display "You Win!"
//ELSE
//Display "You Lose!"
//ENDIF
//END

const readline = require("readline");

function playRockPaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Choose Rock, Paper, or Scissors: ", (userChoice) => {
    humanChoice = userChoice.trim();
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    console.log("Computer chose " + computerChoice);

    if (humanChoice === computerChoice) {
      console.log("It's a Tie!");
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      console.log("You Win!");
    } else {
      console.log("You Lose!");
    }
    rl.close();
  });
}

playRockPaperScissors();
