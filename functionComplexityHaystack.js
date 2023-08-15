const moveEvenOdd = (arr) => {
    let evenInd = 0; // Index for even numbers
    let temp = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            // Swap even number to the beginning of the array
            if (temp !== null) {
                [temp, arr[i]] = [arr[i], temp];
            }
            evenInd++;
        } else {
            if (temp === null) {
                temp = arr[i];
            }
        }
    }

    arr.splice(evenInd);
    arr.push(temp);

    return arr;
}

// Use of method:
const inputArray = [4, 2, 9, 7, 6, 5, 3, 8];
const resultArray = moveEvenOdd(inputArray);
console.log(resultArray); 
