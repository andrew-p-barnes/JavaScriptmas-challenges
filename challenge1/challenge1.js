/* How much candy will be eaten by the children in total. A piece of candy cannot be split, 
and all children must eat the same amount as any other child. */

function candies(children, candy) {
    return Math.floor(candy/children) * children;
}

console.log(candies(3, 10));