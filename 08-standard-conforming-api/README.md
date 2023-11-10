- [Standard Conforming APIs - Section 6 (Notes)](#standard-conforming-apis---section-6-notes)
  - [SEMANTIC VERSIONING](#semantic-versioning)
  - [THE OPEN API SPECIFICATION](#the-open-api-specification)
  - [SETTING UP THE SWAGGER CONFIG](#setting-up-the-swagger-config)
  - [BINDING SWAGGER TO ROUTER](#binding-swagger-to-router)
  - [WRITING ROUTE DOCUMENTATION](#writing-route-documentation)
  - [WRITING MODEL DOCUMENTATION](#writing-model-documentation)

# Standard Conforming APIs - Section 6 (Notes)

## SEMANTIC VERSIONING

- Semantic Versioning, more popularly known as SemVer is an industry standard for versioning your software as it is being developed.
- SemVer follows the following standard:

**MAJOR.MINOR.PATCH**

- The Major version is for any non-backwards compatible API changes, minor is for backwards compatible feature releases and patch is for bugfixes or patches being made to existing backwards compatible feature implementations.
- Major Version 0 is used for development and is not considered stable, thus alpha and beta software’s version must be v0.x.x
- All the version numbers get incremented numerically, for example after v2.9.0 we have v2.10.0 and not v3.0.0
- Semantically versioned software must have well documented API.

## THE OPEN API SPECIFICATION

> OpenAPI: https://www.openapis.org/
> The OpenAPI Specification, previously known as the Swagger Specification, is a specification for a machine-readable interface definition language for describing, producing, consuming and visualizing web services.

- The OpenAPI Spec is a specification put forth by swagger, which is a language agnostic interface for RESTful APIs.
- It allows software and people to identify the capabilities of the API without really taking a look at the documentation or the studying the source code. 
- The OpenAPI document can be declared in both YAML and JSON, we will use a few packages to dynamically generate the document on our API by using comments in our routes.
- Install the packages using:

```bash
$ npm install swagger-jsdoc swagger-ui-express
```

## SETTING UP THE SWAGGER CONFIG

Let’s try to see how we can use this to document our Library API, to begin we will create a file “/config/swagger.config.js” in that file we can begin declaring our swagger config.

Any paths we provide in the ”apis” will be used to look for our comments which the tool will use to convert to our swagger document and API documentation.

```javascript
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: name,
      version: "0.1.0",
    },
  },
  apis: ["./src/routers/*.ts", "./src/models/*.ts"],
};
```

## BINDING SWAGGER TO ROUTER

Now in “./routers/index.js” we can bind the route where the docs will be served by importing our swaggerOptions from “./config/swagger.config.js” and swaggerUi from “swagger-ui-express”.

```javascript
import { swaggerSpecification } from "../config/swagger.config.js";
import swaggerUi from "swagger-ui-express";
…
router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerOptions));
```

After this has been done our documentation shall be available on the route “/api/docs”.

## WRITING ROUTE DOCUMENTATION

We can now actually start writing comments which would create our swagger documentation

- Each documentation comment must start with ”/**” and end with “*/” the first line of the comment must have the “@openapi” tag.
- The documentation of a Route begins with the route declared for example “/api/books”, any methods belonging to the route can be declared in one indentation level in with the method specifiers get, post, put, patch, delete etc.
- The route must have some responses where each response type starts with a status code and the details are mentioned one indentation level deep on the documentation. 

```javascript
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
 *       500:
 *         description: Internal server error occurred
 */
```

## WRITING MODEL DOCUMENTATION

Models follow a similar documentation style to how we documented our API Paths.

- Each documentation comment must start with ”/**” and end with “*/” the first line of the comment must have the “@openapi” tag.
- The Model documentation begins first with defining a components and schemas indentation block.
- Inside of these we can start defining our models.
- Each of the properties of the model can be declared in the properties block and all the mandatory properties can be declared in the required block.

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
