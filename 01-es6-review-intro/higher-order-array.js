/*
higher-order array: filter(), map(), sort(), find()
*/

// filter to find odd numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const oddNumbers = arr.filter((e) => {
	return e % 2 === 1
})

console.log("array:", arr)
console.log("filter odd:", oddNumbers)