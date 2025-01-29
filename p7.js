//৭.একজন ব্যক্তি ভোট দিতে পারবে কিনা তা কীভাবে নির্ধারণ করবে? (ভোটের বয়স ≥ ১৮)

function isEligibleToVote(age) {
    if (age >= 18) {
        return 'Eligible to Vote';
    }
    else {
        return 'Not eligible to Vote';
    }
}
console.log(isEligibleToVote(12));