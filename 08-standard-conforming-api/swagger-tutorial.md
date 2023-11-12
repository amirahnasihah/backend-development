# Standard Conforming APIs (Tutorial)

> OpenAPI: https://www.openapis.org/
> The OpenAPI Specification, previously known as the Swagger Specification, is a specification for a machine-readable interface definition language for describing, producing, consuming and visualizing web services.

1. API: ???
2. What is the standard: ???

## Semantic Versioning

> SemVer, short for Semantic Versioning, is a versioning scheme that uses three numbers (major.minor.patch) to convey information about software changes. The idea is that increments in each number have specific meanings, helping users understand the impact of updates.

In Semantic Versioning (SemVer), SemVer follows the following standard:

**MAJOR.MINOR.PATCH**

- **Major version:** Increased for backward-incompatible changes.
- **Minor version:** Added for backward-compatible new features.
- **Patch version:** Incremented for backward-compatible bug fixes or security fixes.

It provides a clear way to communicate the nature of changes in software versions.

> Ex; v15.1.3 => 15 is Major version, 1 is Minor version, 3 is Patch version.

## The Open API Specification

> The OpenAPI Specification, often abbreviated as OAS, is a standard for describing RESTful APIs. It allows developers to define the structure of an API, including endpoints, request/response formats, and more. This helps in creating consistent and easily understandable API documentation.

## Setting the Swagger Config

- Install the packages using (continuation from previous module libraryApi).
- create a file “/config/swagger.config.js” in that file we can begin declaring our swagger config.
- go to "package.json" and change the `"version": "0.1.0"` and import the file into "swagger.config.js".
- after done the Swagger configuration, we want to connect it.

```bash
$ npm install swagger-jsdoc swagger-ui-express
```

```javascript
// "/config/swagger.config.js" //
const { name, version } = require("../package.json");
const swaggerJsdoc = require("swagger-jsdoc"); // newly add this

const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: name,
      version: version,
    },
  },
  apis: ["./routers/*.js", "./models/*.js"], // important: which routes should it actually look for. so, all ".js" file will be scanned by Swagger config.
};

// newly add this
const swaggerSpecification = swaggerJsdoc(swaggerConfig);

module.exports = { swaggerSpecification };
```

## Bind Swagger to Router

- Now in “./routers/index.js” we can bind the route where the docs will be served by importing our `swaggerConfig` from “./config/swagger.config.js” and swaggerUi from “swagger-ui-express”.
- go to "localhost:3000/api/docs" will display Swagger logo and error: Unable to render this definition.
- so, go back in swagger.config.js and require `swagger-jsdoc`. so, export `swaggerSpecification` into /routers/index.js instead of "swaggerConfig".
- then, refresh localhost:3000.

```javascript
// "/routers/index.js" //
const swaggerUi = require("swagger-ui-express");
const { swaggerSpecification } = require("../config/swagger.config");

// ...
router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecification));
```

## Writing OpenAPI Model documentation

> Models follow a similar documentation style to how we documented our API Paths.

Each documentation comment must start with `/**` and end with `*/` the **first line of the comment must have the `@openapi` tag**.

The Model documentation begins first with defining a components and schemas indentation block. Inside of these we can start defining our models. Each of the properties of the model can be declared in the properties block and all the mandatory properties can be declared in the required block.

```javascript
/**
 * @openapi
 * components:
 *   schemas:
 *     UserSchema:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         email:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date
 *         updatedAt:
 *           type: string
 *           format: date
 *       required:
 *         - email
 *         - id
 *         - createdAt
 *         - updatedAt
 */
```

- Go to "/models/book.model.js" and put Swagger Model documentation.

> need to have consistent indentation either using tab of 2-spaces or a space,
> DTO is Data Transfer Object

```javascript
// book.model.js //

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateBookDto:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           default: An amazing book
 *         author:
 *           type: string
 *           default: Jane Doe
 *       required:
 *         - title
 *         - author
 */
 
 // ...
```

- after done `CreateBookDto`, go to localhost to preview it.
- next, `UpdateBookDto` is similar but will have no mandatory fields (required block contain nothing).
- next, `BookDto` and thats just the response.

```javascript
// book.model.js //

// /** ...

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateBookDto:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           default: An amazing book
 *         author:
 *           type: string
 *           default: Jane Doe
 *       required:
 *         - title
 *         - author
 *     UpdateBookDto:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           default: An amazing book
 *         author:
 *           type: string
 *           default: Jane Doe
 *       required:
 *     BookDto:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *           default: An amazing book
 *         author:
 *           type: string
 *           default: Jane Doe
 *         createdAt:
 *           type: string
 *           format: date
 *         updatedAt:
 *           type: string
 *           format: date
 */
 
 // ...
```

## Writing OpenAPI Route documentation

> The documentation of a Route begins with the route declared for example “/api/books”, any methods belonging to the route can be declared in one indentation level in with the method specifiers "get", "post", "put", "patch", "delete" etc.
> Route documentation: https://spec.openapis.org/oas/v3.1.0#schemaObject

- Each route would have a tags.
- go to "/routers/book.router.js" and put Swagger Route documentation.

- lets start with "get"
- `$ref:` we are referencing something. `#` hash means the "root". so, from the root, we need to go into components. `$ref: "#/components"`
- remember, we declared our schemas in the components block then in schemas and then BookDto. (and we do not need hyphen) `$ref: "#/components/schemas/BookDto"` referring in book.model.js

- next is "post".
- inside the schema, can just directly reference the BookDto since we dont create an array as its not an array. `$ref: "#/components/schemas/BookDto"` 
- but, in POST we required to have request body (`requestBody:`). so, add "request" above the responses. add `required` as true since this is required. inside schema put `$ref: "#/components/schemas/CreateBookDto"`

- next lets document our by `id` route.
- first, declare the route `"/api/books/{id}"`. `{id}` this declared any param in this format (curly bracket).
- for "patch" route, 

- next is for "delete" route, is similar to patch but without requestBody

```javascript
// book.router.js //

// ...

/**
 * @openapi
 * "/api/books/":
 *   get:
 *     tags:
 *       - Books
 *     summary: Get all the books
 *     responses:
 *       200:
 *         description: Success, returns an array of all the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/BookDto"
 *       500:
 *         description: Internal server error occurred
 *   post:
 *     tags:
 *       - Books
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json
 *           schema:
 *             $ref: "#/components/schemas/CreateBookDto"
 *     responses:
 *       201:
 *         description: Accepted, created new book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BookDto"
 * 
 * /api/books/{id}:
 *   patch:
 *     tags:
 *       - Books
 *     summary: update book by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json
 *           schema:
 *             $ref: "#/components/schemas/UpdateBookDto"
 *     responses:
 *       202:
 *         description: Successfully updated the book
 *         content:
 *           application/json
 *             schema:
 *               $ref: "#/components/schemas/BookDto"
 *   delete:
 *     tags:
 *       - Books
 *     summary: delete book by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       202:
 *         description: Successfully updated the book
 *         content:
 *           application/json
 *             schema:
 *               $ref: "#/components/schemas/BookDto"
 */
 
 // ...
```

