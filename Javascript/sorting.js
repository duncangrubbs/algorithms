let a = [8, 5, 6, 3, 2, 10, 7, 4, 1, 9];

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
    for (let k = 0; k < arr.length - 1; k++) {
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
  // Outer-loop
  let LENGTH = arr.length;
  for (let i = 0; i < LENGTH; i++) {
    let min_index = min(arr, i, LENGTH);
    if (min_index > i) {
      arr = swap(arr, i, min_index);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
  return arr;
}

function min(ar, l, u) {
  let m = ar[l];
  let spot = 0;
  for (let i = l; i < u; i++) {
    if (ar[i] < m) {
      m = ar[i];
      spot = i;
    }
  }
  return spot;
}

console.log(selectionSort(a));
