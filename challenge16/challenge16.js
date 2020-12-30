/* Given a string, return a string with dashes between two consecutive letters */

function insertDashes(arr) {
    let wordArr = arr.split(" ");
    let dashedWordArr = [];
    wordArr.forEach(element => {
        let charArr = element.split("");
        dashedWordArr.push(charArr.join("-"));
    });
    let dashesStr = dashedWordArr.join(" ");
    return dashesStr;
}

console.log(insertDashes("aba caba"));

