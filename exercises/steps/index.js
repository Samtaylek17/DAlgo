// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// First Approach
// function steps(n) {
// 	// From 0 to n (iterate through rows)
// 	for (let row = 0; row < n; row++) {
// 		// Create empty string
// 		let stair = '';
// 		// From 0 to n (iterate through columns)
// 		for (let column = 0; column < n; column++) {
// 			// if current column is equal to or less than the current row
// 			if (column <= row) {
// 				// Add '#' to stair
// 				stair += '#';
// 			} else {
// 				// Add space to stair
// 				stair += ' ';
// 			}
// 		}
// 		console.log(stair);
// 	}
// }

// Second Approach
function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}
	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}

	steps(n, row, stair);
}

module.exports = steps;
