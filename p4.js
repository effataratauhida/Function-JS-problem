//৪.তিনটি সংখ্যার মধ্যে সর্বোচ্চ সংখ্যাটি কীভাবে বের করবে?

function checkLargeNum (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return 'Number 1 is the largest';
    } 
    else if (num2 > num1 && num2 > num3) {
        return 'Number 2 is the largest';
    }
    else {
        return 'Number 3 is the largest';
    }
}
console.log(checkLargeNum(29, 25, 44))