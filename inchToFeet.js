// convert inch to feet

function inchesToFeet (inches){
    const feet=inches/12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches );
console.log ("dadaFeet:" ,dadaFeet);



const mamaInches=160;
const mamaFeet =inchesToFeet(mamaInches);
console.log('mamaFeet :',mamaFeet)
console.log('mamaFeet :',mamaFeet.toFixed(2))



