/* Given a string, return the number of different characters in it. */

function differentSymbolsNaive(str) {
    uniqueCharCount = 0;
    uniqueCharArr = [];
    charArr = str.split("");
    charArr.forEach(element => {
        if (!uniqueCharArr.includes(element)) {
            uniqueCharCount++;
            uniqueCharArr.push(element);
        }
    });
    return uniqueCharCount;
}

console.log(differentSymbolsNaive("cabca"));