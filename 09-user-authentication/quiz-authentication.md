- [Authentication Quiz](#authentication-quiz)
  - [1. What is the process of verifying someone is who they are claiming to be called?](#1-what-is-the-process-of-verifying-someone-is-who-they-are-claiming-to-be-called)
  - [2. Why should passwords not be stored in plain text?](#2-why-should-passwords-not-be-stored-in-plain-text)
  - [3. Why do we need to use a hash?](#3-why-do-we-need-to-use-a-hash)
  - [4. Why do we use salt in combination with Hashes?](#4-why-do-we-use-salt-in-combination-with-hashes)
  - [5. Consider this JWT, what is the highlighted part of the token called](#5-consider-this-jwt-what-is-the-highlighted-part-of-the-token-called)

# Authentication Quiz

todo: ecommerce (harrddd), sort and filter products, backend as API??

**Questions:**

## 1. What is the process of verifying someone is who they are claiming to be called?

Multiple-choice options (select one):

A. Authentication

B. Login

C. Sign In

D. Authorization

## 2. Why should passwords not be stored in plain text?

Multiple-choice options (select one):

A. passwords are critical pieces of data and are always prime targets of data breaches

B. Many users use the same passwords and email combinations across websites including but not limited to important personal accounts and financial accounts so it is our responsibility as developers to protect that.

C. Passwords shall never be able to be read by anyone because of how important they are

D. All of the above

## 3. Why do we need to use a hash?

Multiple-choice options (select one):

A. Hash is an unbreakable string which can only be decrypted with a secret only known the the server

B. A hash produces a randomized fixed string which can never be decrypted and can only be compared with

C. A hash encrypts the buffer of the string

D. Both (a) and (b)

## 4. Why do we use salt in combination with Hashes?

Multiple-choice options (select one):

A. Hashes when produced with the same input produce the same result so it leaves them vulnerable to password-table attacks, salts add a bit of randomness and prevent that.

B. Salts add an additional layer of encryption to the hashes.

C. A Salt appends a random string to the raw password before the hash is produced, which is only familiar to the server.

D. Both (a) and (c)

## 5. Consider this JWT, what is the highlighted part of the token called

`eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJJc3N1ZXIiLCJpZCI6IjEwIiwiZXhwIjoxNjcxNjA3NjQwLCJpYXQiOjE2NzE 2MDc2NDB9.jA3JiiJ-JKJPY4sDOb2n6tGLJTJpXhlw2tQJVyBiM7U`

Multiple-choice options (select one):

A. Payload

B. Signature

C. Hash

D. Header
