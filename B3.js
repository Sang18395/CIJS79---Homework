let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr1) {
    let arr2 = [];
    for (let i=0; i <= arr1.length-1; i++){
        arr2.push(arr1[i]);
    };
    return arr2.sort();
};

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)