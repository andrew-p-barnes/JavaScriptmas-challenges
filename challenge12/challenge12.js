/* Given a string representing 24 hour time in the format hh:mm, check if the string represents a valid 24 hour time. */

function validTime(str) {
    let strArr = str.split(":");
    let hours = parseInt(strArr[0]);
    let minutes = parseInt(strArr[1]);
    if (hours >= 0 && hours <= 24 && minutes >= 0 && minutes <= 60) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));