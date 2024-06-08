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