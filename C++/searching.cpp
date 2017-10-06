#include <iostream>
#include <vector>
#include <string>
#include <fstream>

using namespace std;

int linearSearch(int a[], int n) {
  for (int i = 0; i < sizeof(a) / 4; i++) {
    if (a[i] == n) {
      return i;
    }
  }
  return -1;
}

int main() {
  int arr[] = {1, 5, 4, 3, 2, 3};
  int b = linearSearch(arr, 6);
  cout << b << endl;
}