- [Basics of HTTP and REST](#basics-of-http-and-rest)
  - [Section 1 Notes](#section-1-notes)
    - [What is HTTP](#what-is-http)
    - [HTTP Requests](#http-requests)
    - [HTTP Responses](#http-responses)
    - [HTTP Status Codes](#http-status-codes)
    - [REST](#rest)
    - [What makes a good API?](#what-makes-a-good-api)
- [HTTP and REST Quiz](#http-and-rest-quiz)

# Basics of HTTP and REST

## Section 1 Notes

### What is HTTP

- HTTP is an application layer protocol which is used to serve content over the internet between a server and client.
- HTTP (HyperText Transfer Protocol) is a communication protocol which is built on top of TCP.
- HTTP is stateless by design.
- A complete data transmission consists of a request and a response, the client sends a request and gets back a response with the corresponding data.

![What is HTTP](https://www.startertutorials.com/blog/wp-content/uploads/2023/01/Hypertext-Transfer-Protocol-1024x271.png)

Source: https://www.startertutorials.com/blog/hypertext-transfer-protocol-in-iot.html

### HTTP Requests

- A client makes an HTTP request to retrieve a certain type of information or make a certain transaction on the backend.
- An HTTP Request can be broken down into three main parts, the request line, headers and the request body.

![HTTP Requests](https://flylib.com/books/2/320/1/html/2/files/03fig02.gif)

Source: https://flylib.com/books/en/2.320.1.30/1/

### HTTP Responses

- The second part of a full HTTP data transmission is the Response, a response is when the server has analyzed the request sent to it and sends back some data conforming to the data which was requested.
- A HTTP Response can be broken down into three parts, Status Line, Response Headers and Response Body.

![HTTP Responses](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsOGbQ%2Fbtqvf2BVuXG%2FbS0WAyka7nL9OIZoqLuhKk%2Fimg.png)

Source: https://kbseung12345.tistory.com/42

### HTTP Status Codes

- A status code is meant to give a numeric identifier to how the transaction went and is meant to indicate to a consumer of the API how to move forward.

- http status codes follow the standard XYY where X is the identifier for the type of the response and YY identifies exactly the nature of the operation.

**Status Code Categories**

| Code | Categories |
|---|---|
| 1XX: | Information |
| 2XX: | Success |
| 3XX: | Redirected |
| 4XX: | Client Error |
| 5XX: | Server Error |

### REST

- REST stands for Representational State Transfer and it’s a guideline for writing and architecting cohesive and comprehensive APIs.
- Any API which conforms to the REST spec is said to be RESTful.

| GET | POST | PUT | PATCH | DELETE |
|---|---|---|---|---|
| Read Operation | Create Operation | Update (Replace) | Update (Modify) | Delete |
| Retrieve information from the API about a specific piece of data | Create a new entry in the backend | Replace an existing entry in the backend with another | Update certain properties of an existing entry in the backend | Delete a specific entry from the backend |

### What makes a good API?

- APIs shall by design be intuitive for the consumer (client)
- APIs shall be RESTful and have deterministic paths
- An API shall always follow separation of concerns and make sure one path only takes care of a specific action
- Conform to standards to prevent unexpected behavior
- Further Reading: OpenAPI Spec v3.0.3

# HTTP and REST Quiz

> ℹ️ This is an online material. Please download and read the [online exercise guide](https://prod-public-lms-sg.s3.amazonaws.com/Online+Exercise+Guide.pdf) before starting.

Progress: DONE✅️

Session 1 - HTTP and REST Quiz:

1. Which of these statements is true about HTTP?

Multiple-choice options (select one):

✅️A.
HTTP is a stateless protocol

B.
HTTP uses UDP (Unigram Data Protocol) to send and receive packets

C.
HTTP does not follow the server-client model

D.
All of the above

2. What separates the body from headers in a request?

Multiple-choice options (select one):

A.
Semicolon “;”

B.
Tab “\t”

✅️C.
Empty line with carriage return “\n”

D.
Closing angle bracket “>”

3. Which of these is not a part of the request line?

Multiple-choice options (select one):

A.
Request URI

B.
Protocol Version

C.
Method

✅️D.
Content-Type

4.What type of status is 409?

Multiple-choice options (select one):

✅️A.
Client Error

B.
Informational

C.
Redirection

D.
Server Error

5. What should the patch HTTP method be used for?

Multiple-choice options (select one):

A.
Get all entities

B.
Create a new entity

✅️C.
Update and modify some parameters of entity

D.
Update and replace an entity