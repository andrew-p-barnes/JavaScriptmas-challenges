/*Check whether a given string is a valid subsequence of the english alpahbet.  */

function alphabetSubsequence(str) {
    let strArr = str.split("");
    let unicodeValArr = [];
    for (let i = 0; i < strArr.length; i++) {
        unicodeValArr.push(strArr[i].charCodeAt());
    }
    for (let i = 1; i < unicodeValArr.length; i++) { // initialise i at 1 as currentVal set to index 0
        if (unicodeValArr[i] > unicodeValArr[i-1]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(alphabetSubsequence("abc")); // True
console.log(alphabetSubsequence("effg")); // False
console.log(alphabetSubsequence("cdce")); // False
console.log(alphabetSubsequence("ace")); // True
console.log(alphabetSubsequence("bxz")); // True