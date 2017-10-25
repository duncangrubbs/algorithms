u_a = [5, 8, 3, 2, 12, 43, 5, 6, 89, 65, 4, 3, 12, 24, 32, 76, 45, 39, 19, 54, 83, 23, 6]
s_a = [1, 3, 7, 12, 15, 23, 45, 46, 77, 80, 120, 122, 132, 145, 146, 150, 199, 234, 543, 760, 766, 777]

def linear_search(n, arr):
  for i in range(len(arr)):
    if (arr[i] == n):
      return i
  return -1

def binary_search(n):
  l = 0
  r = len(s_a)
  mid = 0
  while (mid != l):
    mid = Math.floor((r - l) / 2)
    if (n == s_a[mid]):
      return mid
    elif (n > s_a[mid]):
      l = mid
    elif (n < s_a[mid]):
      r = mid
  return -1

print(binary_search(3))

