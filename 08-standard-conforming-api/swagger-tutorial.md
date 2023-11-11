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

- Each documentation comment must start with `/**` and end with `*/` the **first line of the comment must have the `@openapi` tag**.
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

test-_db