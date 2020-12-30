/* Given an array of ints, remove each kth element from it (index parameter is k) */

function extractEachKth(nums, index) {
    let newArr = nums.filter(function(currentVal, currentIndex) {
        let elementToCheck = currentIndex + 1; // index parameter is not zero based (e.g. index = 3 refers to 3rd element in nums)
        if (elementToCheck % index != 0) {
            return currentVal;
        }
    });
    return newArr;
}

console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10],3));