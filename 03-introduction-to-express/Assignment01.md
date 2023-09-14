> Products CRUD API

Create an express application. Then build APIs based on the requirements below:

# Products API

Q1. Create an Express API for Products, containing a basic array for products and perform CRUD operations on them with the following routes. Where a product would have 3 fields, “id”, “name” and “price”.

(70 points)

| Method |      Path     |                         Result                         |
|:------:|:-------------:|:------------------------------------------------------:|
|   GET  |   /products   |                    Get all products                    |
|  POST  |   /products   |                  Create a new product                  |
|   GET  | /products/:id | Get a specific product by the id supplied in parameter |
| PATCH  | /products/:id | Update the specific product by id                      |
| DELETE | /products/:id | Delete the product specified in the id                 |

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

## PUT vs PATCH

"PUT" and "PATCH" are two different HTTP methods used in the context of web APIs to interact with resources on a web server. They serve distinct purposes:

1. **PUT (Update or Replace):**
   - The PUT method is used to update or replace an existing resource or create a new resource if it doesn't already exist at the specified URL.
   - When you send a PUT request, you typically send the entire updated representation of the resource in the request body.
   - It is idempotent, meaning multiple identical PUT requests should have the same effect as a single request. If you send the same PUT request multiple times, it won't result in unintended changes or side effects.

   Example:
   ```
   PUT /api/users/123
   Content-Type: application/json

   {
       "name": "Updated Name",
       "email": "updated@email.com"
   }
   ```

2. **PATCH (Partial Update):**
   - The PATCH method is used to apply partial modifications or updates to an existing resource. Instead of sending the entire resource representation, you send only the changes that need to be applied.
   - It is also idempotent, meaning multiple identical PATCH requests should have the same effect as a single request.
   - PATCH requests are useful when you want to update specific fields or properties of a resource without affecting the others.

   Example:
   ```
   PATCH /api/users/123
   Content-Type: application/json

   {
       "email": "new@email.com"
   }
   ```

In summary, use PUT when you want to completely replace or update a resource, and use PATCH when you want to make partial modifications to a resource. The choice between them depends on your specific use case and how you want to handle resource updates in your API.