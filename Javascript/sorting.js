let a = [4, 61, 2, 43, 8, 7, 4, 6, 5, 72, 24, 1, 4, 31, 33, 4, 56, 76, 34, 23, 84, 63, 56, 73, 12, 54, 32, 21, 54, 90, 43, 21,
            55, 43, 2, 4, 56, 786, 43, 5, 67, 45, 20, 21, 34, 67, 45, 34, 89, 90, 21, 78, 34, 23, 21, 5, 3, 23, 2, 99, 234, 54, 123, 45, 867, 34, 67, 2];

// QUICK SORT

let pivot = a[a.length - 1];
let wall = 0;
let current;

function miniSort(arr) {
  for (let i = wall; i < arr.length; i++) {
    if (arr[i] < pivot) {
      let tmp = arr[i];
      arr[i] = arr[wall];
      arr[wall] = tmp;
      wall++;
    } else if (arr[i] === pivot) {
      tmp = arr[wall];
      arr[wall] = pivot;
      arr[arr.length - 1] = tmp;
    }
  }

  return arr;
}

function quickSort() {
  let k =0;
  let array;
  while (k < 100) {
    array = miniSort(arr);
    k++;
  }

  return arr;
}


// MERGE SORT

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    let middle = parseInt(arr.length / 2);
    let left   = arr.slice(0, middle);
    let right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

// BUBBLE SORT

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] > arr[k + 1]) {
        let tmp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = tmp;
      }
    }
  }
  return arr;
}


// SELECTION SORT
function selectionSort(arr) {
  // Sorted Array
  let a = [];
  
  // Outer-loop
  for (let i = 0; i < arr.length; i++) {
    arr.splice(min(arr, i, arr.length)[1], 1)
    a.push(min(arr, i, arr.length)[0]);
  }
  return a;
}

function min(a, l, u) {
  let m = a[l];
  let spot = 0;
  for (let i = l; i < u; i++) {
    if (a[i] < m) {
      m = a[i];
      spot = i;
    }
  }
  return [m, spot];
}

console.log(selectionSort(a));
console.log(bubbleSort(a));
