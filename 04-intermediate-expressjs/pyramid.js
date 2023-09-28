/*
Create an Express API which has one route “/pyramid/:n” which creates a pyramid with “n” rows, for example visiting “/pyramid/5” will render.

*
* *
* * *
* * * *
* * * * *

- pyramid have 5 rows.
- iterates within each row.
- 
*/

let numsRow = 5;

for (var i = 1; i <= numsRow; i++) {
	let row = "+"
	console.log(row)
	
	for (var j = 1; j <= i; j++) {
		// now at row1 i = 1, j = 1; 1 <= 1;
	}
}


/*
row1
row1, col1
row1, col1, col 2
*/