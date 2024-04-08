/*
//Without HTML User input:


const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1))

let attempts = 0;
let guess;
let running = true;

while (running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);


    if(isNaN(guess)){
        window.alert("Please enter a valid number");

    }else if (guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number")
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");

        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");

        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`)
            running = false;
        }
    }

}
*/

//With user input from HTML

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attemptLabel = document.getElementById('attemptLabel');
let resetBtn = document.getElementById('resetBtn');
let submitBtn = document.getElementById('submitBtn');
let result = document.getElementById('result');

//let guess = document.getElementById('numberGuess');
let running = true;


let attempts = 0;
let guess;

function guessing() {
    while (running){

        guess = Number(textBox.value);
        //console.log(typeof guess, guess);

        if(isNaN(guess)){
            result.textContent=("Please enter a valid number");

        }else if (guess < minNum || guess > maxNum){
            result.textContent=("Please enter a valid number");
        }
        else{
            attempts++;
            if(guess < answer){
                result.textContent=("TOO LOW! TRY AGAIN!");

            }
            else if(guess > answer){
                result.textContent=("TOO HIGH! TRY AGAIN!");

            }
            else{
                result.textContent=(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
                attemptLabel.textContent = attempts;
                running = false;
            }
        }

    };
};

resetBtn.onClick = function(){
    attempts = 0;
    attemptLabel.textContent = attempts;
};