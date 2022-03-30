const nums = [2,4,5,4,1]
/*
var findDuplicate = function (nums) {
  let items = nums.filter((item, index) => nums.indexOf(item) !== index);
    if (items.length == 1) return items[0];
    else console.log(items)
};
 
let duplicate = findDuplicate(nums) ;
console.log(duplicate);
console.log('*********************************************************');
 */
var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  while (true) {
    slow = nums[slow];
    console.log("Slow: ", nums[slow]);
    console.log("nums[fast]: ", nums[fast]);
    console.log("fast: ", nums[nums[fast]]);
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }
  console.log(slow);
  console.log(fast);
  let newSlow = 0;
  while (slow !== newSlow) {
    slow = nums[slow];
    newSlow = nums[newSlow];
  }
  return newSlow;
};
findDuplicate(nums);
