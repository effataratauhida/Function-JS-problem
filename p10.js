//একটি সংখ্যা ০ কিনা তা তা কীভাবে চেক করবে?

function isZero (num) {
    if (num === 0) {
        return "Zero";
    } else {
        return "Not Zero";
    
    }
}
console.log(isZero(0)); //Zero
console.log(isZero(285)); //Not Zero

