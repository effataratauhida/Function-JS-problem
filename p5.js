//৫.একটি সংখ্যার ধনাত্মক নাকি ঋণাত্মক তা কীভাবে যাচাই করবে?

function isPositiveOrNegative(number) {
    if (number > 0) {
        return 'Positive';
    }
    else if (number < 0) {
        return 'Negative';
    }
    else {
        return 'Zero';
    }
}
console.log(isPositiveOrNegative(20));