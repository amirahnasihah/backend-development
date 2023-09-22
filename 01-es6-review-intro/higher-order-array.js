/*
higher-order array: filter(), map(), sort(), find()

- (e) means element. traverse thru element
*/

// filter to find odd numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const oddNumbers = arr.filter((e) => {
	return e % 2 === 1
})

// map out the array
const lists = arr.map((e) => e)