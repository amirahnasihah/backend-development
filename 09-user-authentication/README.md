- [User Authentication - Section 7 (Notes)](#user-authentication---section-7-notes)
  - [WHAT IS AUTHENTICATION AND AUTHORIZATION](#what-is-authentication-and-authorization)
  - [HOW TO SECURELY STORE PASSWORDS](#how-to-securely-store-passwords)
  - [THE NEED FOR SALTING](#the-need-for-salting)
  - [JSON WEB TOKENS (JWT)](#json-web-tokens-jwt)
  - [THE LOGIN FLOW](#the-login-flow)
  - [THE ACCESS-CONTROL MIDDLEWARE](#the-access-control-middleware)

# User Authentication - Section 7 (Notes)

## WHAT IS AUTHENTICATION AND AUTHORIZATION

- Often when building out our APIs we want to restrict access to certain regions of the API to a certain area, sometimes it’s just that we need to know which user is logged in and other times we also want to give permissioned access to certain areas, for example only staff users with manager level access shall be allowed to access.

  1. **Authentication**: Authentication is the process of verifying someone is who they are claiming to be, for example, someone saying that they are “john@doe.com” and want to access the application.

  2. **Authorization**: Authorization is the process of verifying if someone has access to an area of the application when their identity is already known to the server and the API checks for the access a user shall have, for example a staff user on an e-commerce platform shall be allowed to access the financial details and the order details of every single order placed on the website. While a regular user shall only be able to see their orders and browse the product catalog.

## HOW TO SECURELY STORE PASSWORDS

Passwords are extremely confidential information and shall never be stored in plain text, as if at any time the data is leaked, or a data-breach occurs the attacker cannot take the passwords stolen from the database and use that on other websites a user may have accounts on.

**So… what do we do?**

The answer to this question lies in fundamental cryptography, a key fundamental of cryptography is hashing, in a hash, a piece of data is taken, and the algorithm deterministically produces a hash. For example ”bob” will always have the hash **“48181acd22b3edaebc8a447868a7df7ce629920a” when hashed using the SHA1 algorithm. Hashes are deterministic and case sensitive.**

| Name | SHA1 Hash                                |
| ---- | ---------------------------------------- |
| bob  | 48181acd22b3edaebc8a447868a7df7ce629920a |
| bOb  | ed3970a1eb2edb8fe9dc36d2d99a7e1e0a525899 |
| boB  | 3426697c4094ca926c64469e58feb73cd745ca1e |
| Bob  | da6645f6e22bf5f75974dc7eed5fcd6160d6b51e |

## THE NEED FOR SALTING

Our passwords are all safe now and the attacker doesn’t see the raw data, ***but, there’s a small problem***. A huge issue we have right now is that hashes are deterministic, so if the hacker can figure out the algorithm, they can see common passwords like “password” and “12345678” and find all the users who use those. Consider this table, see the hashes of the passwords of the users, “alice” and “jane”, both of them have the same password hence the same hash.

To solve this, we also add a salt to the raw password, the salt is a randomized piece of data that randomizes the result. Consider the Hashed and Salted passwords now, both “alice” and “jane” share the same passwords however the result is different.

| User   | Password       | Hash (password)                          | Hash + Salt (password)                                       |
| ------ | -------------- | ---------------------------------------- | ------------------------------------------------------------ |
| alice  | password       | 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8 | $2a$10$dIzMspeRn.yhupduZS2adubKnhuUdlTfYVJBi0NtV/DdO/G8A/HPO |
| bob    | s3cur3p4ssw0rd | 85803f5504ff701e5a8d3353779d5bdef76cbc2f | $2a$10$/o6zn.ZZO7azk3OPbzO2i.kwBRu9Gw8jG/Pl04ADTr/YE65fuLi1K |
| jane   | password       | 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8 | $2a$10$DvD.8jL/GBtsu8GX1VcovOSg34JqFhFr6sPuT2Go3MHe4dEK4VHKC |
| janice | 12345678       | 7c222fb2927d828af22f592134e8932480637c0d | $2a$10$2x9xOYrl/HEQ/KUQWIRYn.p8oq9KU9SHQwNvR9eMU36s5b.EwWEnS |

## JSON WEB TOKENS (JWT)

JSON Web Tokens are an industry standard method to claim identity. When a user successfully logs in we issue then a JWT and with each subsequent request, the consumer of the API sends over that token to prove their identity.

A JWT consists of 3 parts:

```jwt
eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJJc3N1ZXIiLCJpZCI6IjEwIiwiZXhwIjoxNjcxNjA3NjQwLCJpYXQiOjE2NzE2MDc2NDB9.jA3JiiJ-JKJPY4sDOb2n6tGLJTJpXhlw2tQJVyBiM7U
```

**Header**: header contains metadata about the token.

**Payload**: payload contains a custom JSON object which uniquely identifies the user.

**Signature**: Cryptographic signature of the encoded header and payload using a secret only known to the server.

## THE LOGIN FLOW

When the user logs in we need to give a token to the user which uniquely identifies them, to do so we will on successful validation of credentials issue both a refresh token and an access token, the access token is used by resource servers and is a short-lived entity, lasting to a lifetime of 1 hour, while a refresh token has a much longer lifespan of usually about a year.

![THE LOGIN FLOW](https://blog.logrocket.com/wp-content/uploads/2021/09/access-token-diagram.png)

## THE ACCESS-CONTROL MIDDLEWARE

- Now we need to implement an access control middleware which re-issues the access-control token if the refresh token is valid or invalidate the request and throw an error.

- The access control middleware shall set the variable “req.user” to the user which has been authenticated.

![ACCESS-CONTROL MIDDLEWARE](07-flow-login.jpeg)

fin.