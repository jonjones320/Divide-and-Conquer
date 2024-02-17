// Write a function which accepts a sorted array and a value x, and returns the floor of x in the array. 
// The floor of x in an array is the largest element in the array which is smaller than or equal to x. 
// If the floor does not exist, return -1.

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 3) // 2
// findFloor([1,2,8,10,10,12,19], 13) // 12
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

function findFloor(arr, x, left = 0, right = arr.length - 1) {
    let mid = Math.floor((right + left) / 2);

    if (left > right) return -1;
    if (arr[mid] === x) {return arr[mid]}
    if (arr[right] < x) {return arr[right]}
    if (arr[left] > x) {return -1}

    if (arr[mid] > x && arr[mid - 1] < x) {
        return arr[mid - 1]
    }
    if (arr[mid] > x) {
        return findFloor(arr, x, left, mid -1);
    }
    if (arr[mid] < x) {
        return findFloor(arr, x, mid + 1, right);
    }
}

module.exports = findFloor