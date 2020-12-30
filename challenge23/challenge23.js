/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it.
If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.
*/

let textInput = document.querySelector('#textInput');
let counter = document.querySelector('#counter');
let tweetButton = document.querySelector('#btn');

textInput.addEventListener("keyup", event => {
    const textInputMaxLength = 140;
    let charCount = textInput.value.length;
    let charRemaining = textInputMaxLength - charCount;
    counter.innerHTML = charRemaining.toString() + "/140";
    if (charRemaining <= 20) {
        counter.classList.add("charLengthWarning");
        if (charRemaining < 0) {
            tweetButton.disabled = true;
            tweetButton.classList.add("buttonDisabled");

        }
        else {
            tweetButton.disabled = false;
            tweetButton.classList.remove("buttonDisabled");
        }
    }
    else {
        counter.classList.remove("charLengthWarning");
    }
});