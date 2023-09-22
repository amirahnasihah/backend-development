/*
How we can use rest operator in functions to get an infinite numbers of arguments
*/

// problem with below function is if we want to add more numbers?
function sum(a, b) {
  return a + b;
}

// solution with using rest operator
function sum1(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log("sum1:", sum1(1, 2, 3, 4, 7, 7, 7, 8, 8, 8, 9, 9, 10, 10)); // output: 93
