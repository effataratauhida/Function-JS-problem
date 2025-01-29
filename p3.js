//৩.একজন নিক্ষার্থী পাস করেছে কিনা তা কীভাবে নির্ধারণ করবে? (পাস মার্ক = ৩৩)
  
function checkPassFail(number) {
    if (number >= 33) {
        return 'Pass';
    }
    else {
        return 'Fail';
    }
}
console.log(checkPassFail(33));