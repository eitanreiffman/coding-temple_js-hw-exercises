//==================Exercise #1 ==========//
/*
Given the array [1, 2, 3, 5, 6, 7], find the index of the first non-consecutive element in the array.
It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/

let exerciseOneArr = [1, 2, 3, 5, 6, 7]

for (let num in exerciseOneArr){
    if (exerciseOneArr[num] - num > 1){
        console.log(num);
        break;
    }
};

//============Exercise #2 ============//
/*
Given the two arrays of numbers below, loop through them both individually
and add the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15]
Output: 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

*/

sum = 0
let numbers1 = [10, 12, -9, 3, -1, 0, 15]
for (let num of numbers1){
    if (num >= 0){
        sum += num;
    };
};
console.log(sum)

sum2 = 0
let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1]
for (let num of numbers2){
    if (num >= 0){
        sum2 += num;
    };
};
console.log(sum2)

// ====================================================================================
//============ Extra Exercises (Taken From Codewars) ============//

// Codewars Link:
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n){
    if (n > 12){
      return n - 2;
    }
    else if (12 >= n && n > 0){
      return n - 1;
    }
    else {
      return n;
    };
  };

console.log(getRealFloor(0));

// ====================================================================================

// Codewars Link:
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(string) {
    new_string = ''
    for (let c of string){
        if (c != '!'){
            new_string += c
        };
    };
    return new_string;
  };

  console.log(removeExclamationMarks('Hello World!!!!'))

// ====================================================================================

// Codewars Link:
// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

function index(array, n){
    for (let num in array){
      if (array.length - 1 >= n){
        if (num == n){
          return array[num] ** n;
        }
      } else {
        return -1;
      };
    };
  };

  console.log(index([2, 4, 5, 8, 10], 3))