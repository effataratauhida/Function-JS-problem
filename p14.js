// কোনো একটি সংখ্যার মান ইনপুট দিয়ে বলো,সেটি একক ডিজিটের সংখ্যা(single-digit) কিনা ।

function checkNumber(num) {
    if (num >= 0 && num <= 9) {
        return "Single-digit";
    } 
    else {
        return "Not Single-digit";
    }
}
console.log(checkNumber(3));  //Single-digit
console.log(checkNumber(52)); //Not Single-digit
console.log(checkNumber(9));  //Single-digit
console.log(checkNumber(89));  //Not Single-digit