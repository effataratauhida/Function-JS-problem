//একজন শিক্ষার্থী ৫টি সাবজেক্টের নাম্বার ইনপুট দিলে বলো, সে পাশ করেছে কিনা। (প্রত্যেক সাবজেক্টে >= ৩৩ হলে পাশ)

function checkPass(Bangla, English, Math, Physics, Chemistry) {
    if (Bangla >= 33 && English >= 33 && Math >= 33 && Physics >= 33 && Chemistry >= 33 ) {
        return 'Pass';
    }
    else {
        return 'Fail!'
    }
}
console.log(checkPass(33, 23, 58, 78, 90)); //Fail
console.log(checkPass(34, 56, 76, 85, 67)); //Pass
console.log(checkPass(80, 85, 90, 95, 100)); //Pass
console.log(checkPass(54, 60, 30, 80, 90)); //Fail
