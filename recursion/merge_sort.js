const sort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(sort(leftArr), sort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const newSort = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      newSort.push(leftArr.shift());
    } else {
      newSort.push(rightArr.shift());
    }
  }
  return [...newSort, ...leftArr, ...rightArr];
};