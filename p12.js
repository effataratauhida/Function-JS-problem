
//১২. কোনো একটি বছরের সংখ্যা ইনপুট দিয়ে বলো, সেটি লিপ ইয়ার (Leap Year) কিনা।

function checkLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return 'Leap Year';
    }
    else {
        return 'Not Leap Year';
    }
}
console.log(checkLeapYear(2200)); //Not Leap Year
console.log(checkLeapYear(2000)); //Leap Year
console.log(checkLeapYear(2015)); //Not Leap Year
console.log(checkLeapYear(2003)); //Not Leap Year
