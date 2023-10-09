# for loop vs forEach() vs map()

`for`, `forEach`, and `map()` are JavaScript constructs used to iterate over elements in an array, but they have different purposes and use cases:

1. **`for` Loop:**
   - A `for` loop is a general-purpose loop construct that allows you to perform iterations over an array or any iterable object.
   - You have full control over the iteration process, including specifying the start and end points, the step size, and more.
   - It can be used for any kind of operation within the loop, such as modifying array elements, filtering, or any custom logic.
   - It does not return a new array; it's typically used for side effects or accumulating results.

   Example:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   for (let i = 0; i < numbers.length; i++) {
     console.log(numbers[i]);
   }
   ```

2. **`forEach()`:**
   - `forEach` is an array method that iterates over each element in the array and applies a provided callback function to each element.
   - It's used for performing some action for each element in the array but does not create a new array.
   - It is useful when you want to perform side effects like logging or updating elements in the array.

   Example:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.forEach(number => {
     console.log(number);
   });
   ```

3. **`map()`:**
   - `map()` is an array method that iterates over each element in the array, applies a provided callback function to each element, and returns a new array with the results.
   - It's used for creating a transformed version of the original array, where each element is transformed according to the provided callback function.
   - It does not modify the original array; instead, it creates a new array.

   Example:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const doubledNumbers = numbers.map(number => number * 2);
   // doubledNumbers will be [2, 4, 6, 8, 10]
   ```

In summary:

- Use a `for` loop when you need fine-grained control over the iteration process and want to perform custom operations or accumulate results.
- Use `forEach()` when you want to perform an action (e.g., logging, updating elements) for each element in the array.
- Use `map()` when you want to create a new array where each element is transformed based on a callback function.