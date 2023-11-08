- [Task 1 (30 points)](#task-1-30-points)
- [Task 2 (70 points)](#task-2-70-points)

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