array = [1, 66, 45, 3, 2, 45, 23, 12, 68, 44, 3, 6, 9, 11, 15, 23, 56, 98, 65, 0]

def bubbleSort():
    index = 0
    while (index < len(array)):
        for val in array:
            if (val > array[index + 1]):
                tmp = val
                array[index] = array[index + 1]
                array[index + 1] = tmp
