// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.
const removeDuplicates = function (nums) {
  if (nums.length === 1) return nums;
  let duplicates = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicates += 2;
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(
    "file: leetcode.js:24 ~ removeDuplicates ~ duplicates:",
    duplicates
  );
  return duplicates > 0 ? duplicates : nums;
};

// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.
// You must implement a solution with a linear runtime complexity and
// use only constant extra space.
// Input: nums = [2,2,1] - Output: 1
// Input: nums = [4,1,2,1,2] - Output: 4
// Input: nums = [1] - Output: 1
const singleNumber = (nums) => {
  nums.sort();
  if (nums.length === 1) return nums[0];
  for (let i = 0; i < nums.length; i += 2) {
    if (i + 1 === nums.length) {
      return nums[i];
    } else {
      if (nums[i] !== nums[i + 1]) return nums[i];
    }
  }
};
