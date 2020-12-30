/* Given two arrays of ints (nums1, nums2) return a boolean value for whether an int from nums1 and an int from num2 can be summed to equal the value parameter. */

function sumOfTwo(nums1, nums2, value) {
    let sum = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            sum = nums1[i] + nums2[j];
            if (sum === value) {
                console.log(sum);
                return true;
            }
        }
    }
}

console.log(sumOfTwo([1,2,3],[10,20,30,40],42))