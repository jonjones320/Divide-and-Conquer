// Write a function which accepts an array of distinct numbers sorted in increasing order.
// The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

// To find the number of rotations, we must find how many index positions the smallest number is from arr[0].
// 1) Find the smallest number and its index position
// 2) Its index position is the "n" number of times it has been "rotated" 

function findRotationCount(arr, low = 0, high = arr.length - 1) {
    mid = Math.floor((high + low) / 2);

    if (high < low) {
        return 0;
    }
    
    if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
        return mid;
    }

    if (arr[mid] > arr[mid + 1]) {
        return mid + 1;
    }

    if (arr[mid] > arr[high]) {
        return findRotationCount(arr, low = mid + 1, high)
    }    

    if (arr[mid] < arr[high]) {
        return findRotationCount(arr, low, high = mid - 1)
    }    

  
}

module.exports = findRotationCount