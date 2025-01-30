
//তিনটি সংখ্যার যোগফল ১০০-এর বেশি কিনা তা কীভাবে বের করবে?

function checkSum(num1, num2, num3) {
    if (num1 + num2 + num3 >100) {
        console.log('The sum of 3 numbers is more than 100') ;
    }
    else {
        console.log('Not more than 100');
    }
}
checkSum(20, 25, 82); //The sum of 3 numbers is more than 100
checkSum(20, 37, 2); //Not more than 100