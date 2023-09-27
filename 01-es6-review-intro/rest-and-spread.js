/* Spread and Rest operators (`...`)
- Spread: allows iterable to be expanded. iterables things such as arrays and objects.
- spread operator takes array and brings out all of the constituent elements of it. elements would be in different variables instead of a singularity variable.

- Rest: extract infinite number of unnamed values.
- rest get unnamed parameters and we need to learn about destructuring first.
- destructuring: array and object destructure. allows us to extract values from an object or an array in a very clean semantic manner.
*/

// Spread
arr1 = [1, 2, 3, 4];
arr2 = [5, 6, 7, 8];
arrNonSpread = [arr1, arr2];
arr = [...arr1, ...arr2];

console.log("arr1:", arr1); // output: [ 1, 2, 3, 4 ]
console.log("spread arr1:", ...arr1); // output: 1 2 3 4
console.log("arrNonSpread:", arrNonSpread); // output: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
console.log("spread operator:", arr);

// Rest (destructuring)
// array destructuring: below code will extract the first element in a variable called firstElem and move everything else to an array called others.
// normally, we using array slice() but alternatively we can use array destructuring.
let arrDest = [0, 43, 54, 65, 76, 98];
const [firstElem, ...others] = arrDest;
// const [first, second, third, ...rest] = arrDest;

console.log("...others:", ...others); // output: 43 54 65 76 98
console.log("firstElem:", firstElem); // output: 0
// console.log("1,2,3,rest:", first, second, third, rest); // output: 0 43 54 [ 65, 76, 98 ]

// object destructuring: below code will take the properties “name” and “age” of the variable person and extract them into variables called name and age
let person = { name: "John", age: 23 };
const { name, age } = person;

console.log("name:", name); // output: John
console.log("age:", age); // output: 23

let obj = {
  nickname: "John",
  lifetime: 29,
  career: "coder",
  languages: ["JS", "CPP", "PY"],
};

// const { nickname, lifetime, career, languages } = obj;
// const { nickname, lifetime, ...rest } = obj;
const { first, second, ...rest } = obj;

console.log("obj:", nickname, lifetime, rest); // output: John 29 { career: 'coder', languages: [ 'JS', 'CPP', 'PY' ] }

obj = {
  // make sure the thing you want to update is below the spreading.
  ...obj,
  nickname: "Jane",
};

console.log(obj); // output: nickname is updated to Jane
