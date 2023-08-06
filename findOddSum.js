function getSum (numbers){
    let sum = 0 ; 
    for(i=0; i<numbers.length; i++){
        const index = i;
        // console.log (index);
        const element = numbers[index];
                // console.log (element);
                sum = sum + element;
                console.log (index,element,sum);
    }
    return sum ;
}


const myNumbers = [5,10,15,20,25,30]
getSum(myNumbers);
