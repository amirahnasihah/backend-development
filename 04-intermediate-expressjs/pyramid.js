/*
Create an Express API which has one route “/pyramid/:n” which creates a pyramid with “n” rows, for example visiting “/pyramid/5” will render.

```
*
* *
* * *
* * * *
* * * * *
```
*/

let star = 5

for (var i = 1; i <= star; i++) {
	for (var j = 1; j <= star; j++) {
		console.log(i + " " + j)
	}
	
}

//pyramid("*")