let arr = [1, 2, 3];

function shuffle(arr1){
    arr1 = arr1.sort(() => Math.random() - 0.5);
    return arr1;
};

shuffle(arr);

console.log(arr);