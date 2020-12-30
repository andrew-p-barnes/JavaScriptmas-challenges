/* Sort an array of strings by length without using sort() */

function sortByLength(strs) {
    for (let i = 0; i < strs.length-1; i++) {
        let minElement = i;
        for (let j = i+1; j < strs.length; j++) {
            if (strs[minElement].length > strs[j].length) {
                minElement = j;
            }
        }
        let temp = strs[minElement];
        strs[minElement] = strs[i];
        strs[i] = temp;
    }
    return strs;
}

console.log(sortByLength(["abc","","aaa","a","zz"]));


/* Sort an array of strings by length using sort() */

function sortByLengthWithSort(strs) {
    strs.sort(function(a, b) {
        if (a.length < b.length) {
          return -1;
        }
        if (a.length > b.length) {
          return 1;
        }
        return 0;
    });  
    return strs;
}

console.log(sortByLengthWithSort(["abc","","aaa","a","zz"]));