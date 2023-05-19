const sort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }

  return [...sort(leftArr), pivot, ...sort(rightArr)];
};