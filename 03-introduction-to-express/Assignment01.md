Product API

Create an express application. Then build APIs based on the requirements below:

# Products API

Q1. Create an Express API for Products, containing a basic array for products and perform CRUD operations on them with the following routes. Where a product would have 3 fields, “id”, “name” and “price”.

(70 points)

Method Path Result

GET /products Get all products

POST /products Create a new product

GET /products/:id Get a specific product by the id supplied in parameter

PATCH /products/:id Update the specific product by id

DELETE /products/:id Delete the product specified in the id


# Pyramid Route Shape

Q2. Create an Express API which has one route “/pyramid/:n” which creates a pyramid with “n” rows, for example visiting “/pyramid/5” will render.
(30 points)

```
*
* *
* * *
* * * *
* * * * *
```