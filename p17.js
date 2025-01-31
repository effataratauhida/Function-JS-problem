// একটি পাসওয়ার্ড ইনপুট দিয়ে বলো, সেটি ৮ ক্যারেক্টারের বেশি কিনা ।

function checkPassword(pass) {
    if (pass.length >= 8) {
        return "Valid Password";
    } else {
        return "Password must be longer than 8 characters.";
    }
}
console.log(checkPassword('123456789')); //Valid Password
console.log(checkPassword('mypass'));  //Password must be longer than 8 characters.
console.log(checkPassword('password'));  //Valid Password
console.log(checkPassword('short'));  //Password must be longer than 8 characters.
