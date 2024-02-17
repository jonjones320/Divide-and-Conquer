// Given a sorted array and a number, 
// write a function called sortedFrequency 
// that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1


function sortedFrequency(arr, num) {
    // Use the left and right limit of the num in the sorted array to find out it's number of occurences
    let leftLimit = findLeft(arr,num);
    if (leftLimit === -1) {return leftLimit};
    let rightLimit = findRight(arr,num);
    return rightLimit - leftLimit + 1;
}


function findLeft(arr, num, leftIdx = 0, rightIdx = arr.length -1) {
    // Adjusting the search "box" to the right, based on the middle value, until the lower left limit is found
    if (rightIdx >= leftIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === num && arr[midIdx - 1] !== num) {
            return midIdx;
        }
        else if (midVal < num) {
            return findLeft(arr, num, leftIdx + 1, rightIdx);
        }
        else {
            return findLeft(arr, num, leftIdx, rightIdx - 1);
        }
    }
    return -1;
}

function findRight(arr, num, leftIdx = 0, rightIdx = arr.length -1) {
    // Adjusting the search "box" to the left, based on the middle value, until the upper right limit is found
    if (rightIdx >= leftIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midIdx === arr.length -1 || midVal === num && arr[midIdx + 1] !== num) {
            return midIdx
        }
        else if (midVal > num) {
            return findRight(arr, num, leftIdx, rightIdx - 1);
        }
        else {
            return findRight(arr, num, leftIdx + 1, rightIdx);
        }
    }
    return -1;
}



// No success with trying to find the left and right limits at the same time. :/

    // if (rightIdx >= leftIdx) {
    //     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    //     let middleVal = arr[middleIdx];

    //     // if (middleVal === num && arr[middleIdx - 1] !== num) {
    //     //     console.log("1")
    //     //     return sortedFrequency(arr, num, leftIdx = middleIdx, rightIdx);
    //     // }

    //     // else if (middleVal === num && arr[middleIdx + 1] !== num) {
    //     //     console.log("2")
    //     //     return sortedFrequency(arr, num, leftIdx, rightIdx = middleIdx);
    //     // }

    //     // else if (middleVal === num && arr[middleIdx - 1] !== num && arr[middleIdx + 1] !== num){
    //     //     // The left and right index are at the edges of the num section.
    //     //     console.log("3")
    //     //     const count = rightIdx - leftIdx;
    //     //     return count;
    //     // }

    //     if (middleVal === num) {
    //         sortedFrequency(leftIdx = leftIdx + 1)
    //     }

    //     else if (middleVal > num) {
    //         console.log("4")
    //         return sortedFrequency(rightIdx = middleIdx)
    //     }

    //     else if (middleVal < num) {
    //         console.log("5")
    //         return sortedFrequency(leftIdx = middleIdx)
    //     }

    //     // else {
    //     //     console.log("4")
    //     //     return -1;
    //     // }
    // }

    // else if (leftIdx >= rightIdx) {
    //     console.log("6")
    //     return -1
    // }

module.exports = sortedFrequency