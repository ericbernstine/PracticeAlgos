const binarySearch = (arr, target) => {
  // set low and high pointers, just like a two-pointer algo
  let low = 0;
  let high = arr.length - 1;
  // set a while loop comparing high and low pointers.
  while (low <= high) {
    // calculate left middle value but adding low to high and dividing by 2.
    let mid = Math.floor((low + high) / 2);
    // check if target equal mid value. Return if true.
    if (target == arr[mid]) {
      return mid;
    }
    // if target value is more than middle value, move low pointer up to middle, and add 1 becuase we know that target is not currently equal to middle. 
    if (target > arr[mid]) {
      low = mid + 1;
    // Do the opposite if the value is lower.
    } else {
      high = mid - 1;
    }
  }
  // Final return statement if value is not found.
  return "Not found";
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12, 16], 22));
