// is the year  is LeapYear


// function isLeapYear (year){
//     const remainder = year % 4;
//     if (remainder ===0){
//         return true ;
//     }
//     else {
//         return false;
//     }
// }

// const myYearIsLeapYear =isLeapYear(1952);
// console.log('myYear :', myYearIsLeapYear);
// const herYearIsLeapYear =isLeapYear(2021);
// console.log('herYear :',herYearIsLeapYear);


// shortcut

function isLeapYear (year){
    const remainder = year % 4;
    if (remainder ===0){
        return true ;
    }
    
   return false;
    
}

const myYearIsLeapYear =isLeapYear(1952);
console.log('myYear :', myYearIsLeapYear);
const herYearIsLeapYear =isLeapYear(2021);
console.log('herYear :',herYearIsLeapYear);