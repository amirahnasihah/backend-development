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
	for (let i = 0;  i <= 5; i++) {
		console.log(n**5)
	}
}

pyramid(5)