// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. If the value is not found, return -1.

// findRotatedIndex([3, 4, 1, 2], 4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

// 1. Find the middle value
// 2. If it is === to num, then return that index. Found it
// 3. If it is 

function findRotatedIndex(arr, num, left = 0, right = arr.length - 1) {
    floorMid = Math.floor((right + left) / 2);
    ceilMid = Math.ceil((right + left) / 2);


    if (left <= right) {
        if (num === arr[floorMid]) {
            return floorMid;
        }
        else if (num === arr[ceilMid]){
            return ceilMid;
        }
        else if (num >= arr[left]) {
            return findRotatedIndex(arr, num, left, floorMid - 1)
        }
        else {
            return findRotatedIndex(arr, num, floorMid + 1, right)
        }

    }
    return -1;
}

module.exports = findRotatedIndex