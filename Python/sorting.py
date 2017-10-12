array = [1, 66, 45, 3, 2, 45, 23, 12, 68, 44, 3, 6, 9, 11, 15, 23, 56, 98, 65, 0]

# BUBBLE SORT
def bubble_sort(arr):
    for i in range(len(array)):
        for k in range(len(array) - 1):
            if (arr[k] > arr[k+1]):
                tmp = arr[k]
                arr[k] = arr[k+1]
                arr[k+1] = tmp
    return arr

# SELECTION SORT

def selection_sort(arr):
    length = len(arr)
    for i in range(length):
        min_index = find_min(arr, i, length)
        if (min_index > i):
            arr = swap(arr, i, min_index)
    return arr

def swap(arr, i, j):
    tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
    return arr

def find_min(arr, low, up):
    m = arr[low]
    min_index = 0
    for i in range(low, up):
        if (arr[i] < m):
            m = arr[i]
            min_index = i
    return min_index

# print(selectionSort(array))

