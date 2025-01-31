// দুটি সংখ্যা ইনপুট দিয়ে বলো, তাদের মধ্যে গুণফল বড় সংখ্যা দিয়ে ভাগ করা যায় কিনা।

function inputNumber(num1, num2) {
    var product = num1 * num2;
    var largestNumber;
    if (num1 > num2) {
        largestNumber = num1;
    }
    else {
        largestNumber = num2;
    }

    if (product % largestNumber === 0) {
        return `The product of ${num1} and ${num2} can be divided by the largest number ${largestNumber}`;
    }
    else {
        return `The product of ${num1} and ${num2} can not be divided by the largest number ${largestNumber}`;
    }
}
console.log(inputNumber(22, 5));
console.log(inputNumber(5, 4));
console.log(inputNumber(6, 3));