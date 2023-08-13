// 1. **Reverse a String**
//     Write a function that takes a string and returns the string reversed.
const reverseString = (str = "") => {
  return Array.from(str).reverse().join("");
};

// 2. **Palindrome Checker**
//     Write a function that checks if a given string is a palindrome.
const isPalindrome = (str = "") => {
  const userInput = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  return userInput.join("") === [...userInput].reverse().join("");
};

// 3. **FizzBuzz**
//     For numbers from 1 to 100, print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
//     Otherwise, print the number.
const fizzBuzz = () => {
  let result;
  for (let i = 1; i < 101; i++) {
    result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (result.length === 0) result = i;
    console.log(result);
  }
};

// 4. **Factorialize a Number**
//     Write a function that takes a number and returns its factorial.
const factorial = (value = 0) => {
  if (value === 0) return 1;
  if (value < 0)
    throw new Error("factorial: parameter value must be a positive integer");
  return value * factorial(value - 1);
};

// 5. **Find the Longest Word**
//     Write a function that takes a sentence and returns the length of the longest word.
const longestWord = (str = "") => {
  if (typeof str !== "string")
    throw new Error("longestWord: parameter str must be a valid string");
  if (str.length === 0) return 0;
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s+]/g, "")
    .split(/\s+/)
    .reduce((prev, curr) => {
      return curr.length > prev ? curr.length : prev;
    }, 0);
};

// 6. **Title Case a Sentence**
//     Convert the first letter of each word in a sentence to uppercase.
const toTitleCase = (str = "") => {
  if (typeof str !== "string") throw new Error("input must be a string");
  if (str.length === 0) return "";
  return str
    .trim()
    .split(" ")
    .map((word) => {
      const [first, ...rest] = word;
      return [first.toUpperCase(), ...rest].join("");
    })
    .join(" ");
};

// 7. **Find Largest Numbers in Arrays**
//     Write a function that takes an array of arrays with numbers. Return a new array with the largest number from each provided array.
const largestInArrays = (arrays = []) => {
  if (!Array.isArray(arrays) || arrays.length === 0) return [];
  return arrays.map((subArray) => {
    if (!Array.isArray(subArray) || subArray.length === 0)
      throw new Error("Subarray should not be empty");
    return Math.max(...subArray);
  });
};

// 3. **Anagram Checker**:
//    Check if two provided strings are anagrams of each other.
const anagram = (str1, str2) => {
  const reorder = (str) => [...str].sort().join("");
  return reorder(str1) === reorder(str2);
};

// 12. **Sum All Numbers in a Range**
//     Write a function that takes an array of two numbers and returns the sum of all numbers between and including those two numbers.
const sumInRange = (arr = [(a = 0), (b = 0)]) => {
  if (!Array.isArray(arr) || arr.length !== 2)
    throw new Error("arr must be an array of length = 2");
  const [first, last] = arr.sort((a, b) => a - b);
  return ((last - first + 1) * (first + last)) / 2;
};

// 13. **Counting Duplicates**
//     Create a function that counts the number of duplicate characters in a string.

// 14. **Flatten Array**
//     Flatten a nested array. For instance, `[[1,2], [3, 4, 5], [6]]` should become `[1, 2, 3, 4, 5, 6]`.
const flatArray = (arr = []) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  return arr.reduce((prev, curr) => {
    return Array.isArray(curr)
      ? prev.concat(...flatArray(curr))
      : prev.concat(curr);
  }, []);
};

// 15. **Difference Between Two Arrays**
//     Compare two arrays and return a new array with the items that are unique to each of the two given arrays.
//     [1,2,3], [2,3,4] → [1,4]
const differenceArrays = (arr1 = [], arr2 = []) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw new Error("arr1 & arr2 must be valid arrays of numbers");
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  return Array.from(new Set([...arr1, ...arr2])).filter(
    (e) => !arr1.includes(e) || !arr2.includes(e)
  );
};

// 8. **Missing Number**:
//    Find the missing number in a given array of integers between 1 to n.
const missingNumber = (arr = []) => {
  const n = Math.max(...arr);
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((prev, curr) => {
    return (prev += curr);
  }, 0);
  return expectedSum - actualSum || n + 1;
};

// 9. **Balanced Parentheses**:
//    Check if a given string has balanced parentheses. For example, `"(a[b]{c})"` is balanced, but "a[b]{c)}" is not.
class Stack {
  #elements;
  constructor() {
    this.#elements = [];
  }
  get length() {
    return this.#elements.length;
  }
  push(element) {
    this.#elements.unshift(element);
    return this;
  }
  pop(element) {
    this.#elements.shift(element);
    return this;
  }
  top() {
    return this.#elements[0];
  }
  empty() {
    return this.#elements?.length === 0;
  }
}

const balancedParentheses = (str = "") => {
  if (str?.length === 0) return true;
  const openingRegex = /[\(\[\{]/;
  const closingRegex = /[\)\]\}]/;
  const stack = new Stack();
  for (let i = 0; i < str?.length; i++) {
    if (openingRegex.test(str[i])) {
      stack.push(str[i]);
    } else if (closingRegex.test(str[i])) {
      switch (str[i]) {
        case ")":
          if (stack.top() === "(") {
            stack.pop();
          } else {
            return false;
          }
          break;
        case "]":
          if (stack.top() === "[") {
            stack.pop();
          } else {
            return false;
          }
          break;
        case "}":
          if (stack.top() === "{") {
            stack.pop();
          } else {
            return false;
          }
          break;
        default:
          return false;
      }
    }
  }
  return stack.empty();
};

// 10. **Debounce Function**:
//    Implement a debounce function that limits a function to be called once after a given number of milliseconds.
const debounce = (f = () => {}, duration) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      f.apply(this, args);
    }, duration);
  };
};

// 13. **Find Duplicates in an Array**:
//    Return all the non-unique values in an array.
const duplicates = (arr = []) => {
  if (!Array.isArray(arr) || arr?.length === 0) return [];
  const duplicates = new Set();
  const seen = new Set();
  for (let element of arr) {
    if (seen.has(element)) {
      duplicates.add(element);
    } else {
      seen.add(element);
    }
  }
  return Array.from(duplicates);
};

// 18. **Two Sum**:
//    Given an array of integers, find two numbers such that they add up to a specific target number.
const twoSum = (arr = [], targetSum) => {
  if (!Array.isArray(arr))
    throw new Error('parameter "arr", must be an array!');
  if (arr.length === 0) return [];
  const indexes = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = targetSum - arr[i];
    if (indexes[complement] !== undefined) {
      return [indexes[complement], i];
    }
    indexes[arr[i]] = i;
  }
  return [];
};

// 16. **Update Inventory**
//     You're given a 2D array of current inventory items and a new array of fresh inventory deliveries. Update the current inventory array with the new items. If an item already exists, add the quantity, otherwise, add the new item.

// 17. **Validate US Telephone Numbers**
//     Write a function that takes a string and returns true if it's a valid US phone number, false otherwise.

// 18. **Record Collection**
//     You have an object representing a part of your music album collection. Each album is identified by a unique id number and has several properties. Write a function to modify the collection based on given conditions.

// 19. **Symmetric Difference**
//     Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

// 20. **Linked List Operations**
//     Implement a basic linked list with methods to insert, delete, and find elements.

// 11. **Throttle Function**:
//    Implement a throttle function that allows a function to be called at most once every n milliseconds.

// 12. **Deep Clone**:
//    Implement a function to deeply clone an object.

// 14. **Implement Bind**:
//    Implement the bind function yourself without using the native `.bind()`.

// 15. **Flattening Callback Hell (Promisify)**:
//    Convert a given function which uses callbacks into a function which returns a promise.

// 16. **Max Consecutive Ones**:
//    Given a binary array, find the maximum number of consecutive 1s in it.

// 17. **Array Chunking**:
//    Write a function that divides an array into chunks of size `n`.

// 19. **Queue using Stacks**:
//    Implement a queue using two stacks.

// 20. **DOM Element Selector**:
//    Implement a simple function similar to jQuery's `$` selector. It should support ID (`#id`), class (`.classname`), and tag (`tag`) selectors.

// 8. **Mutations**
//     Create a function that takes two strings and checks if all the letters of the second string are present in the first string, regardless of case.

// 9. **Seek and Destroy**
//     Write a function that takes an initial array followed by one or more arguments. Remove all elements from the initial array that are of the same value as the arguments.

// 10. **Convert to Roman Numerals**
//     Convert a given number into a roman numeral.

// 11. **Where do I Belong**
//     Write a function that returns the lowest index at which a value should be inserted into a sorted array.
const matchVowels = (str = "") => {
  const regex = /[aeiou]/;
  const userInput = str
    .toLowerCase()
    .replace(/^[a-z0-9]g/, "")
    .split("");

  let result = 0;
  userInput.forEach((entry) => {
    if (regex.test(entry)) result++;
  });
  return result;
};
