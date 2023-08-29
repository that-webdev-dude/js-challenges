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

// plusOne
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Input: digits = [9]
// Output: [1,0]
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        return [1, ...digits];
      }
    } else {
      digits[i]++;
      break;
    }
  }
  return digits;
};

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.
// TODO

// Given an integer array nums,
// rotate the array to the right by k steps, where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
const rotate = (nums, k = 0) => {
  const steps = k % nums.length;
  const tail = nums.splice(nums.length - steps, steps);
  nums.unshift(...tail);
};

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.
const rotateMatrix = (matrix) => {
  const size = matrix.length;
  for (let r = size - 1; r >= 0; r--) {
    const tail = matrix[r];
    for (let c = 0; c <= size - 1; c++) {
      matrix[c].push(tail[c]);
    }
  }

  for (let r = size - 1; r >= 0; r--) {
    for (let c = 0; c <= size - 1; c++) {
      matrix[c].shift();
    }
  }
};
