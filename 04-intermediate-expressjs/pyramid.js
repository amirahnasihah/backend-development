/*
Create an Express API which has one route “/pyramid/:n” which creates a pyramid with “n” rows, for example visiting “/pyramid/5” will render.

```
*
* *
* * *
* * * *
* * * * *
```

row1
row1, col1
row1, col1, col 2
*/

let heightRow = 5

for (var i = 1; i <= heightRow; i++) {
	
	let row = ""
	
	for (var j = 1; j <= i; j++) {
		
		row += "#"
		
	}
	
	console.log(row)
}
