// কোনো একজন ব্যক্তির ওজন ইনপুট দিয়ে বলো, সেটি ৫০ কেজি বা তার বেশি কিনা।

function checkweight (weight) {
    if (weight >= 50) {
        return '50kg or more than 50kg'
    }
    else {
        return 'Not more than 50kg!!'
    }
}
console.log(checkweight(50));  //50kg or more than 50kg
console.log(checkweight(86));  //50kg or more than 50kg
console.log(checkweight(29));  //Not more than 50kg!!