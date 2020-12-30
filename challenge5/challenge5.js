/* Reverse an array without using join(), split(), reverse(). */

function reverseAString(str) {
    let reversedStr = "";
    for (let i = str.length-1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;
}

console.log(reverseAString("hello"));
console.log(reverseAString("Howdy"));