- [HTTP response status code](#http-response-status-code)
  - [1. Informational responses (100 – 199)](#1-informational-responses-100--199)
  - [2. Successful responses (200 – 299)](#2-successful-responses-200--299)
  - [3. Redirection messages (300 – 399)](#3-redirection-messages-300--399)
  - [4. Client error responses (400 – 499)](#4-client-error-responses-400--499)
  - [5. Server error responses (500 – 599)](#5-server-error-responses-500--599)

# HTTP response status code

> mdn: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

HTTP response status codes are three-digit codes returned by a web server to indicate the result of a client's request made to the server. They are an essential part of the HTTP protocol and help communicate the outcome of a request.

**HTTP Response Status Codes**

HTTP response status codes indicate the outcome of a specific HTTP request. These codes are grouped into five classes:

## 1. Informational responses (100 – 199)
- **100 Continue:** Indicates the client should continue the request or ignore the response if the request is already finished.
- **101 Switching Protocols:** Sent in response to an Upgrade request header to indicate a protocol switch.
- **102 Processing (WebDAV):** Shows that the server is processing the request, but no response is available yet.
- **103 Early Hints:** Primarily used with the Link header to allow resource preloading.

## 2. Successful responses (200 – 299)

- **200 OK:** Request succeeded, response depends on the HTTP method.
- **201 Created:** Request succeeded, and a new resource was created.
- **202 Accepted:** Request received but not acted upon; intended for asynchronous handling.
- **203 Non-Authoritative Information:** Metadata is not from the origin server.
- **204 No Content:** No content to send, but headers may be useful.
- **205 Reset Content:** Instructs the user agent to reset the document.
- **206 Partial Content:** Used when the client requests only part of a resource.
- **207 Multi-Status (WebDAV):** Conveys information about multiple resources.
- **208 Already Reported (WebDAV):** Prevents repeated enumeration of internal members.
- **226 IM Used (HTTP Delta encoding):** Server fulfilled a GET request with instance-manipulations.

## 3. Redirection messages (300 – 399)
- **300 Multiple Choices:** Multiple possible responses; user or user agent should choose.
- **301 Moved Permanently:** URL of the requested resource has changed permanently.
- **302 Found:** URI of the resource changed temporarily.
- **303 See Other:** Directs the client to get the resource at another URI with a GET request.
- **304 Not Modified:** Used for caching; response not modified.
- **305 Use Proxy (Deprecated):** Deprecated; previously used to indicate response access through a proxy.
- **307 Temporary Redirect:** Directs the client to get the resource at another URI with the same method.
- **308 Permanent Redirect:** Resource permanently located at another URI.

## 4. Client error responses (400 – 499)
- **400 Bad Request:** Server cannot process the request due to client error.
- **401 Unauthorized:** Client must authenticate for the requested response.
- **402 Payment Required (Experimental):** Reserved for digital payment systems.
- **403 Forbidden:** Client lacks access rights to the content.
- **404 Not Found:** Server cannot find the requested resource.
- **405 Method Not Allowed:** Server knows the method but does not support it.
- **406 Not Acceptable:** No content matches user agent criteria after content negotiation.
- **407 Proxy Authentication Required:** Authentication needed by a proxy.
- **408 Request Timeout:** Sent on an idle connection or for pre-connection mechanisms.
- **409 Conflict:** Request conflicts with the server's current state.
- **410 Gone:** Requested content is permanently deleted.
- **411 Length Required:** Server requires the Content-Length header field.
- **412 Precondition Failed:** Server does not meet client's indicated preconditions.
- **413 Payload Too Large:** Request entity exceeds server-defined limits.
- **414 URI Too Long:** The client's requested URI is too long.
- **415 Unsupported Media Type:** Server rejects the requested media format.
- **416 Range Not Satisfiable:** The requested range is not fulfillable.
- **417 Expectation Failed:** Server cannot meet the expectation from the Expect request header.
- **418 I'm a teapot:** Server humorously refuses to brew coffee with a teapot.
- **421 Misdirected Request:** Request directed to a server unable to respond.
- **422 Unprocessable Content (WebDAV):** Request well-formed but contains semantic errors.
- **423 Locked (WebDAV):** The accessed resource is locked.
- **424 Failed Dependency (WebDAV):** Request failed due to a previous request's failure.
- **425 Too Early (Experimental):** Server unwilling to risk processing a potentially replayed request.
- **426 Upgrade Required:** Server may perform the request after client protocol upgrade.
- **428 Precondition Required:** Request must be conditional to prevent 'lost update.'
- **429 Too Many Requests:** User sent too many requests in a short time (rate limiting).
- **431 Request Header Fields Too Large:** Server rejects request due to large header fields.
- **451 Unavailable For Legal Reasons:** Requested resource cannot be provided for legal reasons.

## 5. Server error responses (500 – 599)
- **500 Internal Server Error:** Server encounters an unknown situation.
- **501 Not Implemented:** Request method not supported by the server.
- **502 Bad Gateway:** Server, acting as a gateway, received an invalid response.
- **503 Service Unavailable:** Server is not ready to handle the request, often due to maintenance or overload.
- **504 Gateway Timeout:** Server, acting as a gateway, cannot get a response in time.
- **505 HTTP Version Not Supported:** Requested HTTP version not supported by the server.
- **506 Variant Also Negotiates:** Server has a configuration error.
- **507 Insufficient Storage (WebDAV):** Server cannot perform the request due to storage limitations.
- **508 Loop Detected (WebDAV):** Server detects an infinite loop while processing the request.
- **510 Not Extended:** Server needs further extensions to fulfill the request.
- **511 Network Authentication Required:** Client needs to authenticate to gain network access.
