/*
higher-order array: filter(), map(), sort(), find()

- (e) means element. traverse thru element
- sort() by default is unicode. to sort numbers 
*/

// filter to find odd numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const oddNumbers = arr.filter((e) => {
	return e % 2 === 1
})

// map out the array
const lists = arr.map((e) => e)

// sort numbers in ascending order
const unsorted = [5, 3, 1, 600, 1000]

const sorted = unsorted.sort((a, b) => a - b)

// results
console.log("array:", arr)
console.log("filter odd:", oddNumbers)
console.log("map:", lists)
console.log("sorted:", sorted)