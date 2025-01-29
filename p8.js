
//৮.প্রাপ্ত নাম্বার দিয়ে শিক্ষার্থীর গ্রেড কীভাবে নির্ধারণ করবে?
//৮০ বা তার বেশি = A+  //৭০-৭৯ = A  //৬০-৬৯ = A- 
//৩৩-৫৯ = Passed   //৩৩ এর কম = Failed

function checkGrade(mark) {
    if (mark >= 80) {
        return 'A+';
    }
    else if (mark >= 70 && mark <=79) {
        return 'A';
    }
    else if (mark >= 60 && mark <=69) {
        return 'A-';
    }
    else if (mark >= 33 && mark <=59) {
        return 'Passed';
    }
    else {
        return 'Failed';
    }
}
console.log(checkGrade(45));
