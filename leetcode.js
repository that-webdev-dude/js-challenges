// singleNumber
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

// twoSum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9 // Output: [0,1]
// Input: nums = [3,2,4], target = 6 // Output: [1,2]
// Input: nums = [3,3], target = 6 // Output: [0,1]
const twoSum = (nums, target) => {
  if (nums.length === 1)
    throw new Error("nums must have at least two elements");
  let complement;
  for (let i = 0; i < nums.length - 1; i++) {
    complement = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === complement) {
        return [i, j];
      }
    }
  }
};

// containsDuplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input: nums = [1,2,3,4]
// Output: false
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
const containsDuplicate = function (nums) {
  return new Set(nums).size < nums.length;
};

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Input: nums = [0]
// Output: [0]
const moveZeroes = (nums) => {
  if (nums.length === 1) return nums;
  let inputLength = nums.length;
  for (let i = 0; i < inputLength; i++) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
      inputLength--;
      i--;
    }
  }
  return nums;
};

// removeDuplicates
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
const removeDuplicates = (nums) => {
  let duplicates = 0;
  let inputLength = nums.length;
  for (let i = 0; i < inputLength - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      duplicates++;
      inputLength--;
      i--;
    }
  }
  return nums.length;
};
