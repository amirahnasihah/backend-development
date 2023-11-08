/*
higher-order array: filter(), map(), sort(), find()

- `(e)` means element. they performing in every single element as we traverse thru the array.
- `%` means divide. ex; element 1 divide by 2 is remainder by 1 or is it 0, truthy falsy condition.
- `sort()` by default is unicode. to sort numbers have to customize parameter to compare element 1 with next element.
- map() return modified array.
- find() . if not found it return undefined
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const unsorted = [5, 3, 1, 600, 1000];
const unsortedArrObject = [
  {
    id: 10,
    foo: 10,
  },
  {
    id: 14,
    foo: 10,
  },
  {
    id: 3,
    foo: 10,
  },
];
const Data = [23, 61, 83, 68, 103];

// filter to find odd numbers
const oddNumbers = arr.filter((e) => {
  return e % 2 === 1;
});

// map out the array to return squared numbers
const squared = arr.map((e) => e ** 2);

// sort numbers in ascending order
const sorted = unsorted.sort((a, b) => a - b);
const sortedArrObj = unsortedArrObject.sort((a, b) => a - b);

// find number 68 in array
const found = Data.find((e) => e === 68);

// results
console.log("array:", arr);
console.log("filter odd:", oddNumbers);
console.log("map:", squared);
console.log("sorted:", sorted);
console.log("sorted Arr Obj:", sortedArrObj);
console.log("found:", found);
