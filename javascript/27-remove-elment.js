var removeElement = function (nums, val) {
  // Initialize two pointers
  let i = 0; // pointer for non-val elements
  let j = 0; // pointer for iterating through the array

  while (j < nums.length) {
    if (nums[j] !== val) {
      // If the current element is not equal to val,
      // move it to the position of the non-val elements pointer
      nums[i] = nums[j];
      i++;
    }

    // Move the iterator pointer
    j++;
  }

  // The first k elements of nums now contain elements not equal to val,
  // and the size of nums is effectively reduced to k
  return i;
};
