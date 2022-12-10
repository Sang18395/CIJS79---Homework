let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(arr1){
    arr1 = arr1.sort((a, b) => a.age - b.age);
    return arr1;
};

sortByAge(arr);

console.log(arr);
