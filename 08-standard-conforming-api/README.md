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