# Projects related to DOM

## project link
[Click Here] 

# Solution code

## project 1

```javascript
console.log("Shriyansh")

const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener("click", function (e){
    // console.log(e);
    // console.log(e.target)
    // if(button.id == "grey"){ // if (e.target.id === "grey")
    //   body.style.backgroundColor = `${button.id}`;
    // }else if(button.id == "white"){
    //   body.style.backgroundColor = `${button.id}`;
    // }else if(button.id == "blue"){
    //   body.style.backgroundColor = `${button.id}`;
    // }else if(button.id == "yellow"){
    //   body.style.backgroundColor = `${button.id}`;
    // }else if(button.id == "red"){
    //   body.style.backgroundColor = `${button.id}`;
    // }

    const myId = button.id;
    console.log(myId);

    switch(myId){

      case "grey":
        body.style.backgroundColor = myId;
        break;
      case "white":
        body.style.backgroundColor = myId;
        break;
      case "blue":
        body.style.backgroundColor = myId;
        break;
      case "yellow":
        body.style.backgroundColor = myId;
        break;
      default:
        console.log("Not valid");
    }

  });
});

```

## project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## project 3

```javascript
const clock = document.querySelector('#clock');

setInterval(function (){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## project 4

```javascript

let randomNum = Math.floor(Math.random() * 100) + 1;
const prevGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
let count = parseInt(remainingGuess.textContent);
const lowOrHigh = document.querySelector(".lowOrHi");



const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();
  
  const inputVal = parseInt(document.querySelector("#guessField").value);
  if(inputVal === '' || inputVal < 1 || inputVal>100 || isNaN(inputVal)){
    prevGuess.innerHTML = `Invalid input ${inputVal}`;
  }else{
    if(count === 0){
      prevGuess.innerHTML = `Limit reached.`;
    }else{
      if(inputVal > randomNum){
        prevGuess.innerHTML += `${inputVal}, `;
        lowOrHigh.innerHTML = `Choose lower number`;
        remainingGuess.innerHTML = --count;
  
      }else if(inputVal < randomNum){
        prevGuess.innerHTML += `${inputVal}, `;
        lowOrHigh.innerHTML = `Choose higher number`;
        remainingGuess.innerHTML = --count;
      }else{
        lowOrHigh.innerHTML = `Guessed correct!: ${randomNum} == ${inputVal}`;
      }
    }
  }
})
```

## project 4 solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

## project solution 6

```javascript 
// generate random color

let randomColor = function () {
  let hash = '#';
  let code = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    hash += code[Math.floor(Math.random() * 16)];
  }
  document.querySelector('body').style.backgroundColor = hash;
};

let colorChangerId;

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', function (e) {
  colorChangerId = setInterval(randomColor, 1000);
});

stop.addEventListener('click', function (e) {
  clearInterval(colorChangerId);
});

```

## more optimized solution project 6

```javascript
// generate random color
const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// console.log(randomColor());
let intervalId;

const startChangingColor = function(){
  
  let changeColor = function(){
    document.body.style.backgroundColor = randomColor();
  }

  if(!intervalId){
    intervalId =  setInterval(changeColor,1000);
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
```