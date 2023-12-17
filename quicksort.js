const swap = require('./swap');

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
    if (leftBound < rightBound) {
        const pivotIndex = partition(array, leftBound, rightBound)
        quicksort(array, leftBound, pivotIndex - 1);
        console.log("First quicksort recursion result:", array);
        quicksort(array, pivotIndex, rightBound);
        console.log("Second quicksort recursion result:", array);
    }
    return array;
}

const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((leftIndex + rightIndex) / 2)];
    console.log('pivot', pivot);
    while (leftIndex <= rightIndex) {

        while (array[leftIndex] < pivot) {
            console.log("first nested while", array[leftIndex], '< pivot', pivot);
            leftIndex++;
            console.log('leftIndex:', array[leftIndex])
        }
        while (array[rightIndex] > pivot) {
            console.log("second nested while", array[rightIndex], '> pivot', pivot);
            rightIndex--;
            console.log('rightIndex:', array[rightIndex])
        }
        if (leftIndex <= rightIndex) {
            console.log("swap", array[leftIndex], array[rightIndex]);
            swap(array, leftIndex, rightIndex);
            leftIndex++;
            console.log('leftIndex:', array[leftIndex])
            rightIndex--;
            console.log('rightIndex:', array[rightIndex])
            console.log(array)
        }
    }
    console.log("Partition index:", array[leftIndex]);
    return leftIndex;
}

const arr = [3, 1, 4, 2, 9, 8];
quicksort(arr);