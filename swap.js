const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
  }
  
  module.exports = swap;