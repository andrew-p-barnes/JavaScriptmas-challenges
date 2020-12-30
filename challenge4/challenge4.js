/* Given a year, return the century it is in. */

function centuryFromYear(num) {
    return Math.ceil(num/100);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(33));
console.log(centuryFromYear(140));