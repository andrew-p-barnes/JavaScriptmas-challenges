/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

let dots = document.querySelectorAll(".dice div")

let faceOne = [dots[0]];
let faceTwo = [dots[0], dots[8]];
let faceThree = [dots[0], dots[4], dots[8]];
let faceFour = [dots[0], dots[2], dots[6], dots[8]];
let faceFive = [dots[0], dots[2], dots[4], dots[6], dots[8]];
let faceSix = [dots[0], dots[2], dots[3], dots[5], dots[6], dots[8]];

let dice = document.querySelector(".dice");
let result = document.querySelector("#result");

dice.addEventListener('click', event => {
    for (let i = 0; i < dice.children.length; i++) {
        dice.children[i].classList.add("hide");   
    }
    let numRolled = Math.ceil(Math.random() * 6);
    result.innerHTML = `You rolled a ${numRolled}.`;
    let faceArr = []
    switch (numRolled) {
        case 1:
            faceArr = faceOne;
            break;
        case 2:
            faceArr = faceTwo;
            break;
        case 3:
            faceArr = faceThree;
            break;
        case 4:
            faceArr = faceFour;
            break;
        case 5:
            faceArr = faceFive;
            break;
        case 6:
            faceArr = faceSix;
            break;
    }
    faceArr.forEach(dot => {
        dot.classList.remove("hide");
    });
});

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
