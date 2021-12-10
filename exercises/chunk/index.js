// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// First Approach
// function chunk(array, size) {
// 	const chunked = [];

// 	for (let element of array) {
// 		// Get last element of array
// 		const last = chunked[chunked.length - 1];
// 		// Check if last element does not exist, or if its length is equal to chunked size
// 		if (!last || last.length === size) {
// 			// Push a new chunk into chunked with the current element
// 			chunked.push([element]);
// 		} else {
// 			// Else add the current element to chunk
// 			last.push(element);
// 		}
// 	}

// 	return chunked;
// }

// Second Approach
function chunk(array, size) {
	const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}

module.exports = chunk;
