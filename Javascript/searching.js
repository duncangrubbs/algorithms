let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Binary Search
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);
  for (let i = 0; i < Math.log(arr.length); i++) {

    if (start > end) {
      return -1;
    }
    if (val > arr[middle]) {
      start = middle;
      middle = Math.round((start + end) / 2);
    } else if (val < arr[middle]) {
      end = middle;
      middle = Math.round((start + end) / 2);
    } else {
      return middle;
    }
  }
}

console.log(binarySearch(array, 6));
