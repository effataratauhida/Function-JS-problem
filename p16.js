// একজন ব্যক্তি দিনের একটি সময় ইনপুট দিলে বলো, এটি সকাল, বিকাল নাকি রাত । ( সকালঃ ৬-১২, বিকালঃ ১২-১৮, রাতঃ ১৮-৬ )

function checkTimeOfDay (hour) {
    if (hour >= 6 && hour < 12) {
        return "It's morning";
    }
    else if (hour >= 12 && hour < 18) {
        return "It's evening";
    }
    else {
        return "It's night";
    }
}
console.log(checkTimeOfDay(7));   // It's morning
console.log(checkTimeOfDay(14));  // It's evening
console.log(checkTimeOfDay(20));  // It's night
console.log(checkTimeOfDay(3));   //It's night