// দুইটি সংখ্যার মধ্যে কোনটি ছোট তা কীভাবে নির্ণয় করবে?

function  minNumber(num1, num2) {
    if (num1 > num2) {
        return `The smallest number is: ${num2}`;
    } 
    else {
        return `The smallest number is: ${num1}`;
    }
}
console.log(minNumber(41, 22));