/* Split an array into groups the length of size, and returns them as a two-dimensional array. */

function chunkyMonkey(values, size) {
    arr = [];
    while (values.length) {
        arr.push(values.splice(0, size));
    }
    return arr;
}

console.log(chunkyMonkey(["a","b","c","d"],2))
console.log(chunkyMonkey([0,1,2,3,4,5],4))