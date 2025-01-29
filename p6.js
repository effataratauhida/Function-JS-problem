//৬.কোনো একটি সংখ্যা ১০ দিয়ে বিভাজ্য কিনা তা কীভাবে নিশ্চিত করবে?

function isDivisibleBy10 (num) {
    if (num % 10 === 0) {
        return 'Divisible by 10';
    }
    else {
        return 'Not Divisible by 10';
    }
}
console.log(isDivisibleBy10(21));
