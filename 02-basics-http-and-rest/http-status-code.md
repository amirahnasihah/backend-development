- [HTTP response status code](#http-response-status-code)
- [Explain HTTP status codes further.](#explain-http-status-codes-further)

# HTTP response status code

HTTP response status codes are three-digit codes returned by a web server to indicate the result of a client's request made to the server. They are an essential part of the HTTP protocol and help communicate the outcome of a request. Here is a list of some commonly used HTTP response status codes:

1xx (Informational):
- 100 Continue: The server has received the initial part of the request and is willing to process the client's request further.

2xx (Successful):
- 200 OK: The request was successful, and the server has returned the requested data.
- 201 Created: The request was successful, and a new resource was created as a result.
- 204 No Content: The request was successful, but there is no content to return in the response body.

3xx (Redirection):
- 301 Moved Permanently: The requested resource has been moved permanently to a new location.
- 302 Found (or 303 See Other): The requested resource can be found at a different location temporarily.
- 304 Not Modified: The client's cached copy of the resource is still up to date.

4xx (Client Error):
- 400 Bad Request: The server could not understand the client's request.
- 401 Unauthorized: Authentication is required to access the requested resource.
- 403 Forbidden: The server understood the request but refuses to fulfill it.
- 404 Not Found: The requested resource could not be found on the server.

5xx (Server Error):
- 500 Internal Server Error: The server encountered an error while processing the request.
- 502 Bad Gateway: The server acting as a gateway received an invalid response from an upstream server.
- 503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.
- 504 Gateway Timeout: The server acting as a gateway did not receive a timely response from an upstream server.

These are some of the most common HTTP status codes. Each code provides specific information about the result of a client's request, making it easier for developers and clients to handle different scenarios when interacting with web servers.

# Explain HTTP status codes further.

HTTP status codes are three-digit numbers that the server uses to communicate the outcome of a client's request. They are an essential part of the Hypertext Transfer Protocol (HTTP) and help both clients (e.g., web browsers) and servers understand how to handle a particular request and response. Here's a more detailed explanation of the various categories and specific status codes:

1xx (Informational):
These codes are used to provide information about the status of the request but do not indicate success or failure. They are typically used for early communication between the client and the server. For example:
- 100 Continue: Indicates that the server has received the initial part of the request and is willing to process it further.

2xx (Successful):
These codes indicate that the client's request was successfully received, understood, and processed by the server. The most commonly used status codes in this category include:
- 200 OK: The request was successful, and the server has returned the requested data.
- 201 Created: The request was successful, and a new resource has been created as a result.
- 204 No Content: The request was successful, but there is no content to return in the response body. This is often used in situations where the response should be empty.

3xx (Redirection):
These codes indicate that further action is needed to complete the request. The client is usually required to follow redirection instructions in these cases. Common redirection status codes include:
- 301 Moved Permanently: The requested resource has been permanently moved to a different location. The client should update its bookmarks or links.
- 302 Found (or 303 See Other): The requested resource can be found at a different location temporarily. The client may need to make another request to the new location.
- 304 Not Modified: The client's cached copy of the resource is still up to date, and the server doesn't send the full response, saving bandwidth.

4xx (Client Error):
These codes indicate that there was an issue with the client's request. It may be due to client-side errors or problems with the request itself. Common client error status codes include:
- 400 Bad Request: The server couldn't understand the client's request due to invalid syntax or missing information.
- 401 Unauthorized: Authentication is required to access the requested resource.
- 403 Forbidden: The server understood the request but refuses to fulfill it due to permissions or other restrictions.
- 404 Not Found: The requested resource could not be found on the server.

5xx (Server Error):
These codes indicate that the server encountered an error or issue while trying to fulfill the client's request. Common server error status codes include:
- 500 Internal Server Error: There was an unexpected error on the server while processing the request.
- 502 Bad Gateway: The server acting as a gateway received an invalid response from an upstream server.
- 503 Service Unavailable: The server is currently unable to handle the request, usually due to temporary overloading or maintenance.
- 504 Gateway Timeout: The server acting as a gateway didn't receive a timely response from an upstream server.

HTTP status codes are crucial for both developers and clients to understand and react to the outcome of HTTP requests. They provide a standardized way to communicate various scenarios and issues that can occur during web interactions.