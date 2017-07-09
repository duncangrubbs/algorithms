array = [1, 66, 45, 3, 2, 45, 23, 12, 68, 44, 3, 6, 9, 11, 15, 23, 56, 98, 65, 0]

def bubbleSort(arr):
    index = 0
    while (index < len(arr)):
        for val in arr:
            if (val > arr[index + 1]):
                tmp = val
                arr[index] = arr[index + 1]
                arr[index + 1] = tmp

