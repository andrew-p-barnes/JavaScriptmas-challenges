/* Given a single deposit and annual growth rate, return the number of years required
for the account balance to exceed the threshold provided.  */

function depositProfit(deposit, rate, threshold) {
    let accountBalance = deposit;
    const growthRate = 1 + (rate/100);
    let years = 0;
    while (accountBalance <= threshold) {
        accountBalance = accountBalance * growthRate;
        years++;
    }
    return years;
}

console.log(depositProfit(100, 20, 170));
