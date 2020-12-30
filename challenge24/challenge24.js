//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    let i = 0;
    while (pushed === false) {
        await sleep(75) //Paste this wherever you need to sleep the incrimentor
        i++;
        spinningElem.innerHTML = i;
    }
    stop(i); //Trigger this function when the STOP button has been pushed
}

//EDIT THIS FUNCTION
function stop(i) {
    let difference = Math.abs(targetInt - i);
    var result = document.getElementById('result'); //display your result message here
    if (difference == 0) {
        result.innerHTML = "You won!";
    }
    else {
        result.innerHTML = "Oh no, you lose! Off by " + difference;
    }  
}

//main
setTargetInt();
spin();