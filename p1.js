//১.দুটি সংখ্যার মধ্যে কোনটি বড় তা কীভাবে নির্ণয় করবে?

function checkNum (num1, num2) {
    if (num1 > num2) {
        return "Number 1 is the largest";
    }
    else {
        return "Number 2 is the largest";
    }
}
console.log(checkNum(20, 23));