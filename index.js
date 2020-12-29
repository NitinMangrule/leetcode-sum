// Leetcode
/// Two Sum
//// Input => [1,2,3,5], sum= 6 , Output=> [0,3];
////// Logic use Map and store [ count , index ]

var twoSum = function(nums, target) {
  const result = new Map();
  const leng = nums.length;
  for (let i = 0; i < leng; i++) {
    if (result[nums[i]] >= 0) {
      return [result[nums[i]], i];
    }

    result[target - nums[i]] = i;
  }
  return [];
};

const arr = [2, 4, 6, 7, 9];
console.log(twoSum(arr, 11));
