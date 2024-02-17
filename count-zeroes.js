// Given an array of 1s and 0s which has all 1's first followed by all 0's, 
// write a function called countZeroes, which returns the number of zeroes in the array.


function countZeroes(arr) {
    // establish a search block
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    // loop over the array, narrowing the search by half each time
    while (leftIdx <= rightIdx){
        // find the middle of the search block
        let midIndx = Math.floor((rightIdx + leftIdx) / 2);
        let midNum = arr[midIndx];

        if (midNum === 0 && (arr[midIndx - 1]) === 1) {
            // return console.log("Good")
            let numZeroes = arr.length - arr[midIndx];
            return numZeroes;
        }

        else if (midNum === 1 && (arr[midIndx + 1]) === 0) {
            console.log("arr.length: ", arr.length, "arr[midIndx + 1] : ",arr[midIndx + 1])
            
            let numZeroes = arr.length - arr[midIndx + 1];
            return numZeroes;
        }

        else  if (midNum === 1) {
            // Divide and conquer to the right
            return console.log("=== 1")
        }
        
        else if (midNum === 0) {
            // Divide and conquer to the left
            return console.log("=== 0")
        }
    }
}

module.exports = countZeroes