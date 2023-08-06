// convert miles To Kilometer

function milesToKilometer (miles){
    const Kilometer = miles*1.60934;
    return Kilometer;
}

const dadaMiles = 10;
const dadaKilometer = milesToKilometer (dadaMiles);
console.log('dadaKilometer:' , dadaKilometer)
