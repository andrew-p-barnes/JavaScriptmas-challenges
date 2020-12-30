/* Given an array of ints representing coordinates of obstacles on a straight line, find the minimal length of the jump to avoid all obstacles. You are jumping
from coordinate 0 to the right, and you are only allowed to make jumps of the same length represented by an int. */

function avoidObstacles(nums) {
    nums.sort();
    let minJump = 2; //initialise minJump at 2 as 0 length jump doesnt result in movement, and 1 length jump would collide with all possible ints
    let checkCollisions = (num) => {
        return num % minJump != 0;
    }
    for (minJump = 2; minJump <= nums.length+1; minJump++) {
        if (nums.every(checkCollisions)) {
            return minJump;
        }
    }
}

console.log(avoidObstacles([5,3,6,7,9]));
console.log(avoidObstacles([1,2,3,4,5,6,7,8,9]));