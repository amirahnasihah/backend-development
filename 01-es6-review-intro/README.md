- [An Introduction to ES6 - Section 0 (Notes)](#an-introduction-to-es6---section-0-notes)
  - [What is ES6](#what-is-es6)
  - [Arrow Functions](#arrow-functions)
  - [Higher Order Array Methods](#higher-order-array-methods)
    - [Example 1. `filter()` - returns a new array with only the elements that pass the test implemented by the callback function.](#example-1-filter---returns-a-new-array-with-only-the-elements-that-pass-the-test-implemented-by-the-callback-function)
    - [Example 2. `map()` - returns a new array with each element modified according to the callback function.](#example-2-map---returns-a-new-array-with-each-element-modified-according-to-the-callback-function)
    - [Example 3. `sort()` - sorts the array based on a comparison function.](#example-3-sort---sorts-the-array-based-on-a-comparison-function)
    - [Example 4. `find()`](#example-4-find)
    - [Example 5. `reduce()` - applies the callback function to reduce an array to a single value.](#example-5-reduce---applies-the-callback-function-to-reduce-an-array-to-a-single-value)
    - [Example 6. `forEach()` - executes the callback function for each element in the array.](#example-6-foreach---executes-the-callback-function-for-each-element-in-the-array)
    - [Example 7. `every()` - checks if every element in the array passes a test implemented by the callback function.](#example-7-every---checks-if-every-element-in-the-array-passes-a-test-implemented-by-the-callback-function)
    - [Example 8. `some()` - checks if at least one element in the array passes a test implemented by the callback function.](#example-8-some---checks-if-at-least-one-element-in-the-array-passes-a-test-implemented-by-the-callback-function)
  - [Rest and Spread](#rest-and-spread)
  - [Array and Object Destructuring](#array-and-object-destructuring)
  - [The need for promises](#the-need-for-promises)
  - [What is a promise?](#what-is-a-promise)
  - [Async / Await](#async--await)
- [More Explanation](#more-explanation)
  - [Modify or not the original array?](#modify-or-not-the-original-array)
- [Assignment 1 - Async Function \& Higher Order Functions Exercises](#assignment-1---async-function--higher-order-functions-exercises)
  - [Task 1 (30 points)](#task-1-30-points)
  - [Task 2 (70 points)](#task-2-70-points)

# An Introduction to ES6 - Section 0 (Notes)

## What is ES6

- ECMAScript provides the spec which JavaScript conforms to.
- ES6 was the spec which was introduced in 2015.
- It introduces a wide array of modern methods to write comprehensive and clean code.
- Adds intuitive syntax sugar and operators.
- Adds excellent support for asynchronous behavior.

## Arrow Functions

Arrow functions provide a quick shorthand to traditional functions but they are limited by the scope which they can operate in.

They can’t be used as constructors and can’t access, `this`, `super` or **arguments**.

```javascript
// traditional function
function fooFunc(param) {
    console.log(“hello”);
}

// arrow function
const fooFunc = (param) => {
    console.log(“hello”);
}
```

**JS FACT**

## Higher Order Array Methods

- Higher order array methods allow you to take an array and perform certain operations on them.
- - **Filter**: get a new array of elements which matches a certain criteria.
- - **Map**: recreate a new array after performing operations on elements on an array.
- - **Sort**: order array by a certain criteria.
- - **Find**: search through an array and find an element.

> source: [Higher Order Array Methods in JavaScript](https://dev.to/shrihankp/higher-order-array-methods-in-javascript-14e7)

```markdown
Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.
```

**JS FACT**

Higher-order array methods are methods in JavaScript that take a callback function as an argument and operate on arrays. These methods allow you to write more concise, declarative and functional code.

### Example 1. `filter()` - returns a new array with only the elements that pass the test implemented by the callback function.

The `filter()` function is what you'd use if you're creating a search bar from a given list of items, for example. The `filter()` method also creates a new array by executing the passed callback on every element of the array, and keeps it in the resulting array IF and ONLY IF the element passes the Boolean test returned by the callback.

The callback passed into the `filter()` method accepts any of the three arguments: item, index and array; same as the `map()` method.

The **filter() method does not modify the original array**. Instead, it creates a new array that contains the elements that meet the specified condition. The original array remains unchanged.

**Example 1**
Given an array of costs of different products, create a new array with the costs from the input array if the cost is <= $350, and print it to the console.

Solution:

```javascript
const originalArray = [1, 2, 3, 4, 5];

// Using filter to create a new array of even numbers
const newArray = originalArray.filter((number) => number % 2 === 0);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [2, 4]
```

**Example 2**
Given an array of objects with the city name and population, create an array with objects from the first array if the population of that particular city is >= 5 million.

Solution:

```javascript
const givenArray = [
  { "name": "Shanghai", "population": 24300000 },
  { "name": "Los Angeles", "population": 3792621 },
  { "name": "New Delhi", "population": 21800000 },
  { "name": "Mumbai", "population": 18400000 },
  { "name": "Chicago", "population": 2695598 },
  { "name": "Houston", "population": 2100263 },
];

const newArray = givenArray.filter( ({ population }) => population >= 5000000);

console.log(newArray); // console: [{name: "Shanghai", population: 24300000}, {name: "New Delhi", population: 21800000}, {name: "Mumbai", population: 18400000}]
```

### Example 2. `map()` - returns a new array with each element modified according to the callback function.

It forms a new array by calling the function passed into it as an argument, on each and every element of the Array. It will map each of the return values of the callback and create a new array.

The callback passed to the map() function can accept any of the three arguments: item, index, array.

**Example 1**
Given an array of integers, create a new array in which the double of each integer in the first array is stored, and log it to the console.

Solution:

```javascript
const givenArray = [477, 8914, 40461, 599148];

const newArray = givenArray.map(n => n * 2);

console.log(newArray); // console: [954, 17828, 80922, 1198296]
```

**Example 2**
Given an array of singular nouns, create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

Solution:

```javascript
const givenArray = [ 'pen', 'book', 'code' ];

const newArray = givenArray.map(w => w + 's');

console.log(newArray); // console: ['pens', 'books', 'codes']
```

### Example 3. `sort()` - sorts the array based on a comparison function.

The `sort` method is self-explanatory: it "sorts" an array in place and returns a sorted the array. The default sort order is ascending.

> Note the words "in place". It means that the original array is changed and the same reference to the array is returned. So, originalArray = newArray, if nothing is sorted.

It takes a Function that specifies the criteria of sorting.

**Example 1**
Given an array of numbers, sort the array by ascending order and log the sorted array to the console.

Solution:

```javascript
const givenArray = [4, 5, 2, 1, 3];

givenArray.sort((a, b) => a - b);

console.log(givenArray);

0:1
1:2
2:3
3:4
4:5
length:5
```

**Example 2**
Given an array of contacts, sort them in alphabetical order by name, and log the sorted array.

Solution:

```javascript
const givenArray = [
  {"name": "Yosha Gamuda", "phone": 1234567890},
  {"name": "Portia Umeng", "phone": 4894759371},
  {"name": "Yosha Gamuda", "phone": 1234567890},
  {"name": "Portia Umeng", "phone": 4894759371}
];

givenArray.sort(({name: name1}, {name: name2}) => {
  name1 = name1.toUpperCase();
  name2 = name2.toUpperCase();
  return (name1 < name2 ? -1 : (name1 > name2) ? 1 : 0);
});

console.log(givenArray);
```

The way `sort()` works is a bit different than the others. Quoting [this MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):

> If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction). If a and b are two elements being compared, then:
> 
If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAScript standard only started guaranteeing this behavior in 2019, thus, older browsers may not respect this.
If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.
To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN).

### Example 4. `find()`

`Array.prototype.find`

The `find` method **returns the first element of the array that satisfies the Boolean test in the callback**. If no element passes the Boolean test, `undefined` is returned.

The callback passed to the find function can accept any of the three arguments: `item`, `index`, `array`.

**Example**
Given an array of objects with fruits, find the 'apples' and log the corresponding object to the console.

Solution:

```javascript
const fruits = [
  {"name": "bananas", "quantity": 8},
  {"name": "cherries", "quantity": 3},
  {"name": "apples", "quantity": 80}
];

const apples = fruits.find( ({name}) => name  "apples" );
console.log(apples); // console: {"name": "apples", "quantity": 80}
```

### Example 5. `reduce()` - applies the callback function to reduce an array to a single value.

### Example 6. `forEach()` - executes the callback function for each element in the array.

### Example 7. `every()` - checks if every element in the array passes a test implemented by the callback function.

### Example 8. `some()` - checks if at least one element in the array passes a test implemented by the callback function.

## Rest and Spread

```javascript
let arr = [0, 43, 54, 65, 76, 98];
```

- Spread operator allows an iterable to be expanded.

- Rest operator allows you extract an infinite number of unnamed values, this can be used to pass an infinite number of arguments to a function which will be captured in the form of an array.

## Array and Object Destructuring

Destructuring allows you to extract values from an object or an array in a very clean semantic manner.

```javascript
let arr = [0, 43, 54, 65, 76, 98];
const [firstElem, …others] = arr;
```

This code will extract the first element in a variable called firstElem and move everything else to an array called others.

-----

```javascript
let person = { name: “John”, age: 23 };
const { name, age } = person;
```

This code will take the properties “name” and “age” of the variable person and extract them into variables called name and age.

## The need for promises

A callback is needed when we need to perform a blocking action which might take a while to execute and may indeed fail, we do not want to block the main thread, so instead we wait for the action to finish and then continue the execution from there.

```javascript
// assume a function which needs a callback
function fooBar(param, callback) { … }

// nested callback
fooBar(fooParam, function (param) {
    fooBar(barParam, function (param) {
    …
    }));
});
```

If we need to sequentially execute such callback heavy function then the code quickly starts becoming unreadable with nested callbacks and error handling also subsequently in this chain becomes a pain.

## What is a promise?

A very simple way to understand how a promise works in essence is that it’s a piece of code which “promises” to give a result some time in the future. It returns a result and a status, which can be pending, resolved or rejected. Here is a sample declaration of a promise.

```javascript
const fooPromise = new Promise(function (resolve, reject) {
    resolve(“done!”);
});

fooPromise
    // execute when promise resolves to something
    .then((result) => { … })
    // execute when rejected
    .catch((err) => { … })
    // execute after every time a promise finishes
    .finally(() => { … });
```

Promises greatly improve error handling and improve the syntax quite a bit but we still run into a quasi-callback hell scenario with nested promise resolutions.

## Async / Await

async / await provides an easy syntax wrapper to writing promises where each function marked with the keyword async will return a promise which would resolve to the value returned or reject to the error raised.

Async await syntax fixes the problem of having large unreadable indentations in nested callbacks and makes working with promises a charm.

```javascript
const fooFunc = async (…params) => {
    return fooBar;
}

// store resolved result in the variable called result or
// gracefully handle the error
const result = await fooFunc().catch((err) => { … });
```

# More Explanation

## Modify or not the original array?

1. Filter

The `filter()` method does not modify the original array. Instead, it creates a new array that contains the elements that meet the specified condition. The original array remains unchanged.

Here's an example to illustrate this:

```javascript
const originalArray = [1, 2, 3, 4, 5];

// Using filter to create a new array of even numbers
const newArray = originalArray.filter((number) => number % 2 === 0);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [2, 4]
```

As you can see, the `originalArray` remains the same, and a new array `newArray` is created by `filter()` to contain only the even numbers. The original array is not modified.

---

Here's how `map()`, `sort()`, and `find()` work in terms of modifying the original array:

1. **`map()` Method**: The `map()` method also does not modify the original array. It creates a new array by applying a specified function to each element in the original array. The original array remains unchanged. Here's an example:

```javascript
const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map((number) => number * 2);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [2, 4, 6, 8, 10]
```

In this example, `map()` is used to double each number in the original array, but the original array remains the same.

2. **`sort()` Method**: The `sort()` method does modify the original array by rearranging its elements in place. It does not create a new array. Here's an example:

```javascript
const originalArray = [3, 1, 2, 5, 4];

originalArray.sort();

console.log(originalArray); // [1, 2, 3, 4, 5]
```

In this example, `sort()` rearranges the elements of `originalArray` in ascending order.

3. **`find()` Method**: The `find()` method does not modify the original array. It searches for the first element in the array that satisfies a specified condition and returns that element. The original array remains unchanged. Here's an example:

```javascript
const originalArray = [1, 2, 3, 4, 5];

const result = originalArray.find((number) => number > 3);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(result); // 4
```

In this example, `find()` identifies the first number in the original array that is greater than 3, which is 4. The original array is not modified.

# Assignment 1 - Async Function & Higher Order Functions Exercises

## Task 1 (30 points)

**Task 1**: Given below you find an array of objects containing data for 5 customers, using higher order array methods, filter the array so that it only contains customers who have “isPayingCustomer” set to true and then sort them in a descending order based on their “totalAmountSpent”. (30 points)

```javascript
[
  {
    name: "Jeff",
    totalAmountSpent: 203,
    isPayingCustomer: true,
  },
  {
    name: "Alex",
    totalAmountSpent: 0,
    isPayingCustomer: false,
  },
  {
    name: "Courtney",
    totalAmountSpent: 400,
    isPayingCustomer: true,
  },
  {
    name: "Bob",
    totalAmountSpent: 300,
    isPayingCustomer: true,
  },
  {
    name: "Stella",
    totalAmountSpent: 230,
    isPayingCustomer: true,
  },
];
```

-----

Answer & explanation:

```javascript
const payingCustomers = customers.filter((customer) => customer.isPayingCustomer);

const sortedCustomers = payingCustomers.sort((a, b) => b.totalAmountSpent - a.totalAmountSpent);

console.log(sortedCustomers);
```

In the code above, we first use the filter() method to filter out the customers who are not paying customers by checking the isPayingCustomer property.

Then we sort the resulting array of paying customers by totalAmountSpent property in descending order by using the sort() method. We sort in descending order by using the comparison function b.totalAmountSpent - a.totalAmountSpent instead of a.totalAmountSpent - b.totalAmountSpent.

Finally, we log the sorted array to the console using console.log().

> Source: https://dev.to/shrihankp/higher-order-array-methods-in-javascript-14e7

Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.

The most commonly used such methods when it comes to arrays.

`Array.prototype.map`

This is one of the simplest functions you are going to use while working with Arrays. It forms a new array by calling the function passed into it as an argument, on each and every element of the Array. It will map each of the return values of the callback and create a new array.

The callback passed to the `map()` function can accept any of the three arguments: `item`, `index`, `array`

Source (array methods): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Task 2 (70 points)

**Task 2**: Write an asynchronous function called “getRandomCatFact” which queries to the “https://meowfacts.herokuapp.com/" and then display the fun fact returned in the response in the console. (70 points)

-----

```javascript
const axios = require("axios");

const getRandomCatFact = async () => {
  const res = await axios.get("https://meowfacts.herokuapp.com");
  console.log("getRandomCatFact:", res.data);
};

getRandomCatFact();
```

Or

```javascript
getRandomCatFact = async () => {
  try {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    console.log(data.data);
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

getRandomCatFact();
```