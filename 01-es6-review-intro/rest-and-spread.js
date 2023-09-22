/* Spread and Rest operators (`...`)
- Spread: allows iterable to be expanded. iterables things such as arrays and objects.
- spread operator takes array and brings out all of the constituent elements of it. elements would be in different variables instead of a singularity variable.

- Rest: extract infinite number of unnamed values.
- rest get unnamed parameters and we need to learn about destructuring first.
*/

// Spread
arr1 = [1, 2, 3, 4];
arr2 = [5, 6, 7, 8];
arr = [...arr1, ...arr2];

console.log("arr1:", arr1); // output: [ 1, 2, 3, 4 ]
console.log("spread arr1:", ...arr1); // output: 1 2 3 4
console.log("spread operator:", arr);

// Rest (destructuring)
