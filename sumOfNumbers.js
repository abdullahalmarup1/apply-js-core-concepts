function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i
        console.log(i, sum);
    }
    return sum;
}
const myNumbers = [1,2,3,4,5,6,7]
const sum = sumOfNumbers(myNumbers);
console.log(sum)