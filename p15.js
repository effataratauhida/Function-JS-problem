//  দুটি নাম্বার দিয়ে বলো, তাদের যোগফল ৫০-এর সমান কিনা।

function checkSum (num1, num2) {
    if (num1 + num2 === 50) {
        return ' The sum is 50';
    }
    else {
        return ' The sum is not 50';
    }
}
console.log(checkSum(25,25));  //The sum is 50
console.log(checkSum(30, 20));  //The sum is 50
console.log(checkSum(5, 8));  //The sum is not 50