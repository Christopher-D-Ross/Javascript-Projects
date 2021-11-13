const { performance } = require('perf_hooks');


// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function addUpTo(n) {
    let total = 0;
    for(let i = 0; i<=n; i++) {
        total += i;  
    }
    return total;
}
console.log(addUpTo(6));

// The time it takes for this function to complete is a lot less than the function above.
function addUpToEff(n) {
    return n * (n + 1) / 2;  // As n grows here, the time it takes for the function to complete doesn't change because the number of operations doesn't change.
}

// A Timer used to determine how long it takes a function to run.
let t1 = performance.now(); // The number of milliseconds 
addUpToEff(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)


function countUpAndDown(n) {
    console.log("Going Up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...")
    for (let j = n - 1; j <= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye.")
}

function logAtLeast5(n) {
    for (let i = 0; i < Math.max(5, n); i++) {  // This loop will go to 5 or n, depending on which is larger.
        console.log(i);
    }
}