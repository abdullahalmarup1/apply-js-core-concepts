function isEven(number){
    const remainder = number % 2;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }

}

const myNumberIsEeven = isEven(303);
console.log(myNumberIsEeven);
const herNumberIsEeven = isEven(1280);
console.log(herNumberIsEeven);

