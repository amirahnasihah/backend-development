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