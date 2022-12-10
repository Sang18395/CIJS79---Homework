let arr = [5, 3, 8, 1];

function filterRangeinplace(arr1, a, b){
    arr1 = arr1.filter((item) => {
        return item >= a && item <= b
    })
    return arr1;
};

console.log( filterRangeinplace(arr,1,4) ); 