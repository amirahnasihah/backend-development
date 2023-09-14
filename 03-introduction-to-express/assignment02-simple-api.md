> Assignment 2 - Creating Simple APIs

- [Task](#task)
- [Study Notes](#study-notes)
  - [Task (a)](#task-a)
    - [Route Parameters](#route-parameters)
    - [`req.params`](#reqparams)
    - ["prefix" and a route parameter](#prefix-and-a-route-parameter)
  - [Task (b)](#task-b)
    - [exponent](#exponent)
    - [exponent vs factorial](#exponent-vs-factorial)

# Task

Create an express app with the following routes

a) “/api/:animal/” where “animal” is a path parameter, when the route is visited the api should send back a response saying “<animal> is the best!”. For example, visiting “/api/dog” shall return “dog is the best!”.
(40 points)

> tips: the uses of `req.params` to access route parameters which is `:animal` where we will get the name of a specified animal in a dynamic and different URL using colon (`:`)

b) “/api/exponent/:n/:m” where “n” and “m” are path parameters, the api shall send back in response n^m, for example “/api/exponent/10/2” should return 100.
(60 points)

# Study Notes

## Task (a)

HTTP GET request usually carries data in
- Headers (not discuss in this chapter)
- **Path**, such as
  - https://www.youtube.com/watch **?v=iYM2zFP3Zn0**
  - https://www.facebook.com/ **node.express**

![HTTP GET request parameters](https://excelerator.solutions/wp-content/uploads/2017/08/vba-http-get-image-1.jpg)

When we pass a value **via the resource path section**, it is called an **Route parameter**.

When we pass a value **via the query section**, it is called an **query string**.

> tips: after question mark symbol `?` is a `query`

### Route Parameters

Also called as Route Params.

Route parameters are a way **to capture values from the URL in a dynamic and flexible manner when defining routes** in web applications. These parameters are used to make your routes respond to different inputs or data (example; the use of colon `:`).

Here are some key points about route parameters:

1. **Definition**: In Express.js and similar frameworks, you define route parameters by placing a colon (`:`) before a parameter name in the route path.

   For example:
   ```javascript
   app.get('/api/:id', (req, res) => {
     // ...
   });
   ```

2. **Dynamic Values**: Route parameters act as placeholders for dynamic values in the URL. When a request is made to a route with a parameter, Express extracts the value from the URL and makes it available in the `req.params` object.

   For example, when a user visits `/api/123`, `req.params.id` will be set to `123`.

3. **Accessing Parameters**: You can access route parameters within your route handler using `req.params`. The parameter name in `req.params` corresponds to the name you defined in the route.

   For example:
   ```javascript
   app.get('/api/:id', (req, res) => {
     const { id } = req.params; // Access the "id" parameter
     // ...
   });
   ```

4. **Multiple Parameters**: You can have multiple route parameters in a single route path, allowing you to capture more information from the URL.

   For example:
   ```javascript
   app.get('/user/:userId/posts/:postId', (req, res) => {
     const { userId, postId } = req.params; // Access both parameters
     // ...
   });
   ```

5. **Optional Parameters**: You can make route parameters optional by providing a `?` after the parameter name. This means that the parameter may or may not be present in the URL.

   For example:
   ```javascript
   app.get('/api/:id?', (req, res) => {
     const { id } = req.params; // "id" is optional
     // ...
   });
   ```

Route parameters are a powerful way to create dynamic and flexible routes in web applications, allowing you to handle a wide range of scenarios without needing to define a separate route for each possible input.

### `req.params`

> The route will dynamically extract and respond to the provided animal name.

In Express.js, `req.params` is a property of the `req` object (the request object) that allows you to access route parameters. **Route parameters are dynamic parts of the URL that are specified in the route path using colons (`:`).**

When a client makes a request to an Express.js server and that request matches a route with defined parameters, Express.js automatically parses the values from the URL and makes them available in the `req.params` object. You can access these parameter values using the parameter names defined in your route.

Here's an example:

```javascript
const express = require('express');
const app = express();

// Define a route with a parameter
app.get('/api/:animal', (req, res) => {
  const { animal } = req.params; // Access the "animal" parameter
  res.send(`You selected ${animal}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, when a user visits a URL like `/api/dog`, `req.params.animal` will contain the value `"dog"`, which is the value extracted from the URL's `:animal` parameter. You can then use this value in your route handler to customize the response based on the parameter's value.

### "prefix" and a route parameter

In the example `/api/:animal`, `/api` is the route prefix, and `:animal` is a route parameter.

- `/api` is a static route prefix. It's the common part of the URL that all routes starting with `/api` share.

- `:animal` is a route parameter. It's a dynamic part of the URL and serves as a placeholder for variable data. For example, if you visit `/api/dog`, `:animal` will capture the value "dog" from the URL, and you can access it in your route handler as a parameter.

## Task (b)

### exponent

In mathematics, an "exponent" refers to a numerical notation that indicates how many times a number (the base) should be multiplied by itself. When you see an expression like "10^2," it means that 10 should be multiplied by itself 2 times. 

So, "10^2" can be calculated as follows:

10^2 = 10 * 10 = 100

In this calculation, "10" is the base, and "2" is the exponent. When you raise a number to an exponent, you are essentially performing repeated multiplication of the base number by itself as many times as the exponent specifies.

In the example you provided, "10^2" equals 100 because you are multiplying 10 by itself two times, resulting in 100 as the final value. This is a fundamental concept in mathematics and is often used in various calculations and scientific contexts.

> Certainly! In simple plain English for coding beginners:

```txt
Exponentiation is a way of multiplying a number by itself a certain number of times. It's like saying, "Take this number and use it as many times as the small number tells you to."

For example, if you have 2^3, it means take the number 2 and multiply it by itself three times:

2^3 = 2 * 2 * 2 = 8

So, 2^3 is equal to 8. It's a shorthand way of writing down multiple multiplications of the same number.

In coding, you might use exponentiation when you need to calculate things like compound interest, growth rates, or any situation where a number needs to be repeatedly multiplied by itself.
```

### exponent vs factorial

No, exponentiation and factorial are not the same concepts; they are quite different mathematical operations.

Exponentiation:
- Exponentiation involves raising a number (the base) to a certain power (the exponent).
- It's denoted as "base^exponent" or "base**exponent" in mathematical notation.
- For example, 10^2 means multiplying 10 by itself two times, resulting in 100 (10 * 10).

Factorial:
- Factorial is an operation that involves multiplying a sequence of consecutive positive integers from 1 up to a given number.
- It's denoted as "n!" where "n" is a non-negative integer.
- For example, 5! (read as "five factorial") is calculated as 5 * 4 * 3 * 2 * 1, which equals 120.

In summary, exponentiation is about raising a number to a power, while factorial is about multiplying a sequence of integers. These operations serve different purposes and are used in various mathematical and computational contexts.