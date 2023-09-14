> Assignment 2 - Creating Simple APIs

# Task

Create an express app with the following routes

a) “/api/:animal/” where “animal” is a path parameter, when the route is visited the api should send back a response saying “<animal> is the best!”. For example, visiting “/api/dog” shall return “dog is the best!”.
(40 points)

> tips: "/api" is a route prefix. ":animal" is a route parameter. we use `req.params`

b) “/api/exponent/:n/:m” where “n” and “m” are path parameters, the api shall send back in response n^m, for example “/api/exponent/10/2” should return 100.
(60 points)

# Study Notes

## Task 1

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

