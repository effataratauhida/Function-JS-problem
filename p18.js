// একটি সংখ্যা ইনপুট দিয়ে বলো,সেটি পজিটিভ জোড় সংখ্যা কিনা ।

function checkNumber (num) {
    if (num > 0 && num % 2 === 0) {
        return 'The number is positive and even';
    }
    else {
        return 'Not positive and even';
    }
}
console.log(checkNumber(20)); //The number is positive and even
console.log(checkNumber(33)); //Not positive and even
console.log(checkNumber(0));  //Not positive and even