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

const pyramid = (n) => {
	for (let i = 0;  i < 5; i++) {
		console.log(i)
		for (var j = 0; j < i; j++) {
			console.log(j)
		}
	}
}

//pyramid("*")
pyramid("j")