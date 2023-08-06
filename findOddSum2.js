// eta hoi nai biujteci nai 



function getOddnumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element)
            oddNumbers.push(element)

        }

    }
    return oddNumbers;
}

const myNumbers = [15, 20, 25, 30, 35];
oddNumbers = getOddnumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log(oddNumberSum)