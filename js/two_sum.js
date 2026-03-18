// This script demonstrates a hash set approach to solve the two-sum problem.
// It defines a function that checks if any two numbers in an array sum up to a given target using a Set for efficient lookup.
// Example usage and output are provided at the bottom.

function twoSum(arr, target) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (set.has(complement)) {
      return true;
    }
    set.add(arr[i]);
  }
  return false;
}

// Example usage:
const arr = [0, -1, 2, -3, 1];
const target = -2;
console.log("Result for arr = [0, -1, 2, -3, 1], target = -2:", twoSum(arr, target)); // Should print true
console.log("Result for arr = [1, 2, 3, 4], target = 8:", twoSum([1, 2, 3, 4], 8)); // Should print false
