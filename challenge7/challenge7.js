/* If a vowel is worth 1, and consonant worth 2, return sum of all letters in a given string */

function countVowelConsonant(str) {
    let strArr = str.split("");
    let vowelArr = ["a","e","i","o","u"];
    let sum = 0;
    strArr.forEach(letter => {
        if (vowelArr.includes(letter)) {
            sum++;
        }
        else {
            sum += 2;
        }
    });
    return sum;
  }

  console.log(countVowelConsonant("abcde"));