let arr = [4, 61, 2, 43, 8, 7, 4, 6, 5, 72, 24, 1, 4, 31, 33, 4, 56, 76, 34, 23, 84, 63, 56, 73, 12, 54, 32, 21, 54, 90, 43, 21,
            55, 43, 2, 4, 56, 786, 43, 5];



// QUICK SORT

let pivot = arr[arr.length - 1];
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

  console.log(array);
}

// quickSort();

// MERGE SORT

let a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    let middle = parseInt(arr.length / 2);
    let left   = arr.slice(0, middle);
    let right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
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

console.log(mergeSort(a));
