/* Given a positive int, return the sum of all odd Fibonacci numbers less than or equal to num. First 6 numbers of Fibonacci sequence are 1,1,2,3,5,8 */

function sumOddFibonacciNumbers(num) {
    if (num === 0 || num === 1) { // handle edge cases
        return num;
    }
    let sumOfOdds = 1; // num at least 1 so initialise at 1
    let fibonacciNum = 0;
    let fibonacciArr = [0,1]; // num at least 1 so prepopulate array. Include zero as each additional number is sum of two previous numbers.

    for (let i = 0; i <= num; i++) {
        fibonacciNum = fibonacciArr[i] + fibonacciArr[i+1];
        if (fibonacciNum > num) {
            break;
        }
        else {
            fibonacciArr.push(fibonacciNum);
        }
        if (fibonacciNum % 2 !== 0) {
            sumOfOdds += fibonacciNum;
        }
    }
    return sumOfOdds;   
}

console.log(sumOddFibonacciNumbers(10));