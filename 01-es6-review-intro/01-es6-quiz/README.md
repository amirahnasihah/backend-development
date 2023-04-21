> This is an online material. Please download and read the [online exercise guide](https://prod-public-lms-sg.s3.amazonaws.com/Online+Exercise+Guide.pdf) before starting.

# Starting an online exercise

Click on the "Start" button to start working on an online exercise.

# ES6 Quiz

You can have unlimited attempts on this auto-graded exercise. The threshold of passing is 80%. If you failed the auto-graded exercise, you can reset and retry again.

You can always reset the test in TalentLabs Platform but all your previous answers would be cleared. That means you need to re-do the whole exercise again. So use that wisely. Do not put in blind guesses just because you can try unlimited times.

## Questions

1. What is the use of the map method on an array?

Multiple-choice options (select one):

A. To iterate over the array and transform it into another✅

B. To create a hash-map using the data-set

C. To create a memory map of the elements in the array

D. To map array’s elements in key-value pairs

> The `map` method on an array is used to iterate over each element of the array and apply a function to transform it into another value. The result is a new array with the same length as the original, but with each element transformed according to the function provided.

2. What would be the output of

```javascript
const result = [54, 43, 10, 76, 23, 75].filter((e) => e % 2 === 0).sort((a, b) => b - a);

console.log(result);
```

Multiple-choice options (select one):

A. [76, 54, 10]✅

B. undefined

C. [10, 54, 76]

D. [54, 10, 76]

> Explanation:

The code starts with an array of numbers `[54, 43, 10, 76, 23, 75]`.

The `.filter()` method is used to filter out any elements that are not even numbers, leaving us with `[54, 10, 76]`.

The `.sort()` method is then used to sort the remaining elements in descending order (largest to smallest) based on the result of subtracting `b` from `a` (i.e., sorting in descending order).

Therefore, the final result is `[76, 54, 10]`, which is logged to the console.

3. What is an async function?

Multiple-choice options (select one):

A. A regular function which follows the arrow function syntax

B. It is a wrapper for creating promises✅

C. A shorthand for a traditional function

D. It is the same as a traditional function

> Explanation:

An async function is a special type of function in JavaScript that allows us to work with promises in a more intuitive way. It is actually a wrapper around a regular function that returns a promise.

By using the `async` keyword before a function declaration or expression, we tell JavaScript that this function should be treated as an async function. An async function always returns a promise, which allows us to use the `await` keyword inside the function to wait for promises to resolve before continuing with the function's execution.

So, option B is the correct answer as an async function is a wrapper for creating promises.

4. What would be the output of

```javascript
let person = { name: “John”, age: 30 };

person = { name: “Jake”, …person };
console.log(person.name);
```

Multiple-choice options (select one):

A. “John”

B. Object { name: “Jake”, age: 30 }

C. “Jake”✅

D. Object { name: “John”, age: 30 }

> Explanation:

The code first declares a variable `person` and initializes it with an object that has a `name` property set to "John" and an `age` property set to 30.

Then the code creates a new object with a `name` property set to "Jake" and uses the spread syntax `...person` to copy all the properties from the original object to the new object. This effectively overwrites the `name` property of the original object with "Jake", leaving the `age` property unchanged.

Finally, the code logs the value of `person.name` to the console, which is now "Jake" because the `name` property of the `person` object was overwritten with that value during the object creation.

5. What does the find method return from an array

Multiple-choice options (select one):

A. Last matching element of the array

B. First matching element of the array✅

C. All matching elements from the array

D. Index of the first matching element of the array

> Explanation:

The `find()` method in JavaScript returns the first element of an array that satisfies the provided testing function.

If no element satisfies the testing function, it returns `undefined`.

Therefore, the correct option is B, the `find()` method returns the first matching element of the array.