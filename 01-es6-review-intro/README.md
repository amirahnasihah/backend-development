- [An Introduction to ES6 (Review)](#an-introduction-to-es6-review)
  - [Section 0 Notes](#section-0-notes)
    - [What is ES6](#what-is-es6)
    - [Arrow Functions](#arrow-functions)
    - [Higher Order Array Methods](#higher-order-array-methods)
    - [Rest and Spread](#rest-and-spread)
    - [Array and Object Destructuring](#array-and-object-destructuring)
    - [The need for promises](#the-need-for-promises)
    - [What is a promise?](#what-is-a-promise)
    - [Async / Await](#async--await)
- [ES6 Quiz](#es6-quiz)
- [Assignment 1 - Async Function \& Higher Order Functions Exercises](#assignment-1---async-function--higher-order-functions-exercises)
  - [Task 1 (30 points)](#task-1-30-points)
  - [Task 2 (70 points)](#task-2-70-points)

# An Introduction to ES6 (Review)

## Section 0 Notes

### What is ES6

- ECMAScript provides the spec which JavaScript conforms to.
- ES6 was the spec which was introduced in 2015.
- It introduces a wide array of modern methods to write comprehensive and clean code.
- Adds intuitive syntax sugar and operators.
- Adds excellent support for asynchronous behavior.

### Arrow Functions

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

### Higher Order Array Methods

- Higher order array methods allow you to take an array and perform certain operations on them.
- **Filter**: get a new array of elements which matches a certain criteria
- **Map**: recreate a new array after performing operations on elements on an array
- **Sort**: order array by a certain criteria
- **Find**: search through an array and find an element

### Rest and Spread

```javascript
let arr = [0, 43, 54, 65, 76, 98];
```

- Spread operator allows an iterable to be expanded.

- Rest operator allows you extract an infinite number of unnamed values, this can be used to pass an infinite number of arguments to a function which will be captured in the form of an array.

### Array and Object Destructuring

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

### The need for promises

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

### What is a promise?

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

### Async / Await

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

# ES6 Quiz

> ℹ️ This is an online material. Please download and read the [online exercise guide](https://prod-public-lms-sg.s3.amazonaws.com/Online+Exercise+Guide.pdf) before starting.

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

**JS FACT**

Source: https://dev.to/shrihankp/higher-order-array-methods-in-javascript-14e7

Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.

The most commonly used such methods when it comes to arrays.

`Array.prototype.map`

This is one of the simplest functions you are going to use while working with Arrays. It forms a new array by calling the function passed into it as an argument, on each and every element of the Array. It will map each of the return values of the callback and create a new array.

The callback passed to the `map()` function can accept any of the three arguments: `item`, `index`, `array`

Source (array methods): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Task 2 (70 points)

**Task 2**: Write an asynchronous function called “getRandomCatFact” which queries to the “https://meowfacts.herokuapp.com/" and then display the fun fact returned in the response in the console. (70 points)

**JS FACT**

```JavaScript

```