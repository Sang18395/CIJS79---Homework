let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr1){
    let total=0;
    for ( let i=0; i <= arr1.length-1; i++){
        total = total + arr1[i].age;
    }
    let avr = total/arr1.length;
    return avr;
};

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28