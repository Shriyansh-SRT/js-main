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