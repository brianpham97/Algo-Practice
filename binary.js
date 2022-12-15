const binary = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {return mid}
    else if (arr[mid] > target) {right = mid - 1}
    else {left = mid + 1}
  }
    return -1;
}

module.exports = binary
