//২.একটি সংখ্যা জোড় নাকি বিজোড় তা কীভাবে চেক করবে?

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
console.log(checkEvenOdd(21));