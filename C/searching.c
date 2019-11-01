#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int binarySearch(int arr[], int x, int length) {
  int l = 0;
  int r = length - 1;
  int middle = (l + r) / 2;

  for (int i = 0; i < length; i++) {
    if (l > r) { return -1; }
    if (x > arr[middle]) {
      l = middle;
      middle = floor(((double)l + (double)r) / 2.0);
    } else if (x < arr[middle]) {
      r = middle;
      middle = floor(((double)l + (double)r) / 2.0);
    } else {
      return middle;
    }
  }
  return 0;
}

int main(int argc, char** argv) {
  int x = 10;
  if (argc != 0) {
    x = atoi(argv[1]);
  }
  int arr[] = {1, 4, 10, 45, 46, 89, 101, 150};
  int length = sizeof(arr)/sizeof(int);

  int index = binarySearch(arr, x, length);
  printf("Binary Search for %d: %d\n", x, index);

  return 0;
}