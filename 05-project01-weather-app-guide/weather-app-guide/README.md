# What to install?

> express, ejs, dotenv, axios, nodemon
> folder config, public, routes, controllers, views
> require express, path, dotenv, axios. mw json, urlencoded, view engine --ejs, static --public, cors

# Project Specifications

1. `/(root route)`
- Render a search page where users can search for a location.
- This page can be **rendered with an EJS** template which takes a single **query** and **forwards it to the forecast route**, **passing on the input value into it as the query string**.

2. `/forecast?q=query (forecast)`
- Render the results for the specific location.
- 

## Folder structure

### config (dotenv, config, path)

For keeping secrets like API keys

```env
EXPRESS_OPENCAGE_API = 123456789
PORT = 3000
TEST_ENV = "development"
```
