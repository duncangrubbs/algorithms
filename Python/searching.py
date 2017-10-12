import sorting

a = [5, 8, 3, 2, 12, 43, 5, 6, 89, 65, 4, 3, 12, 24, 32, 76, 45, 39, 19, 54, 83, 23, 6]
array = sorting.selection_sort(sorting.array)

def linear_search(n, arr):
  for i in range(len(arr)):
    if (arr[i] == n):
      return i
  return -1

