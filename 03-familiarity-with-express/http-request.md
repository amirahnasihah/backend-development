- [Tell me more about HTTP methods.](#tell-me-more-about-http-methods)
  - [PUT vs PATCH](#put-vs-patch)
- [CRUD (Express only)](#crud-express-only)
- [CRUD (Express with MongoDB)](#crud-express-with-mongodb)
  - [`express.json()` and `express.urlencoded()`](#expressjson-and-expressurlencoded)
  - [`req.params` vs `req.body` vs `req.query`](#reqparams-vs-reqbody-vs-reqquery)

# Tell me more about HTTP methods.

> CRUD

HTTP (Hypertext Transfer Protocol) defines a set of methods or verbs that specify the action to be performed on a resource identified by a URL. These methods are an essential part of the HTTP request/response cycle and determine how clients (typically browsers or other software) interact with web servers to retrieve, create, update, or delete resources. Here are some of the most commonly used HTTP methods:

1. **GET**:
   - The GET method is used to request a representation of a resource without making any changes to it.
   - It is a safe and idempotent method, meaning that multiple identical GET requests should have the same effect, and it should not have any side effects on the resource.

2. **POST**:
   - The POST method is used to submit data to be processed to a specified resource.
   - It is not idempotent, as multiple identical POST requests may have different effects on the resource (e.g., creating new records with each request).
   - POST is commonly used for creating new resources on the server.

3. **PUT**:
   - The PUT method is used to update or replace a resource at a specific URL.
   - It is idempotent, meaning that multiple identical PUT requests should have the same effect as a single request.
   - When using PUT, you typically send the entire updated representation of the resource in the request body.

4. **PATCH**:
   - The PATCH method is used to apply partial modifications or updates to a resource.
   - It is idempotent, like PUT, but it only requires sending the changes that need to be applied, not the entire resource representation.

5. **DELETE**:
   - The DELETE method is used to request the removal of a resource at a specific URL.
   - It is idempotent, meaning that multiple identical DELETE requests should have the same effect as a single request.

6. **HEAD**:
   - The HEAD method is similar to GET but only requests the headers of the response, not the actual content.
   - It is often used to check resource availability, retrieve metadata, or determine if a resource has been modified without downloading the full content.

7. **OPTIONS**:
   - The OPTIONS method is used to describe the communication options for the target resource, such as which HTTP methods are allowed, or to retrieve information about the communication options available for a resource.

8. **TRACE**:
   - The TRACE method is used to retrieve a diagnostic trace of the current request and response for debugging purposes. It is not commonly used in regular web applications.

9. **CONNECT**:
   - The CONNECT method is typically used to establish network connections to a resource, often for proxy or tunneling purposes.

These HTTP methods provide a standardized way for clients to interact with web servers and perform various actions on resources. Properly using these methods is crucial for designing RESTful APIs and ensuring the predictability and reliability of web services.

## PUT vs PATCH

"PUT" and "PATCH" are two different HTTP methods used in the context of web APIs to interact with resources on a web server. They serve distinct purposes:

1. **PUT (Update or Replace):**
   - The PUT method is used to update or replace an existing resource or create a new resource if it doesn't already exist at the specified URL.
   - When you send a PUT request, you typically send the entire updated representation of the resource in the request body.
   - It is idempotent, meaning multiple identical PUT requests should have the same effect as a single request. If you send the same PUT request multiple times, it won't result in unintended changes or side effects.

   Example:
   ```bash
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
   ```bash
   PATCH /api/users/123
   Content-Type: application/json

   {
       "email": "new@email.com"
   }
   ```

In summary, use PUT when you want to completely replace or update a resource, and use PATCH when you want to make partial modifications to a resource. The choice between them depends on your specific use case and how you want to handle resource updates in your API.

# CRUD (Express only)

GET:

```javascript

```

POST:

```javascript

```

PUT:

```javascript

```

DELETE:

```javascript

```

# CRUD (Express with MongoDB)

## `express.json()` and `express.urlencoded()`

Here is the explanation that should clear doubts on `express.json()` and `express.urlencoded()` and the use of body-parser. It took me some time to figure this out.

1. What is **Middleware**? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

2. When talking about `express.json()` and `express.urlencoded()` think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)

3. You **DO NOT NEED** `express.json()` and `express.urlencoded()` **for GET Requests or DELETE Requests**.

4. You **NEED** `express.json()` and `express.urlencoded()` **for POST and PUT requests**, because in both these requests you are **sending data** (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

5. Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

   a. `express.json()` is a method inbuilt in express to recognize the incoming Request Object as a **JSON Object**. This method is called as a middleware in your application using the code: `app.use(express.json());`

   b. `express.urlencoded()` is a method inbuilt in express to recognize the incoming Request Object as **strings or arrays**. This method is called as a middleware in your application using the code: `app.use(express.urlencoded());`

6. ALTERNATIVELY, I recommend using **`body-parser`** (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. `body-parser` used to be part of express. Think of `body-parser` specifically for POST Requests (i.e. the .post request object) and/or PUT Requests (i.e. the .put request object).

7. In body-parser you can do

```javascript
// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');

// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));

// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));
```

## `req.params` vs `req.body` vs `req.query`

`req.params` is used to access route parameters, `req.body` is used to access the actual body of the request, and `req.query` is used to access any query parameters.

For example, if I declare this route:

```javascript
router.get('/user/:id', function(req, res) {});
```

In this case, `req.params` will contain `id`.

If I pass a body to this route:

```json
{
  "name": "josh"
}
```

This body will be available in `req.body`.

If I pass some query parameters to `http://myserver.com/api/user?name="josh"`, `req.query` will be `{ name: 'josh' }`.
