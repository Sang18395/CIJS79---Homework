let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let [{name: namea}, {name: nameb}, {name: namec}] = users;

let names = [namea, nameb, namec];

console.log( names ); // John, Pete, Mary
