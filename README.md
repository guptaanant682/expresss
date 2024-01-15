# expresss

HTTP
http - hyper text transfer protocol

What are HTTP headers
metadata -> key-value sent along with request and response

caching, authentication, manage state
x- prefix -> 2012(x- deprecated)

-Request headers - > from client
-Response Headers -> from server
-Representation Headers -> encoding/ compression
-Payload Headers -> data


Most common header
-Access: application/json
-user - Agent
-Authorization
-Content type
-Cookie
-Cache-Control

CORS
Access-Control-Allow-Origin
Access-Control-Allow-Credentials
Access-Control-Allow-Method

SECURITY
Cross-Origin-Embedder-Policy
Cross-Origin-Opener-Policy
Content-Security-Policy
X-XSS-Protection


HTTP Methods
Basic set of operations that can be used to interact with server.

GET - Retrieve a resource
HEAD - No message body(response headers only)
OPTIONS - What operations are available
TRACE - loopback test(get same data)
DELETE - remove a resource
PUT - replace a resource
POST - interact with resource(mostly add)
PATCH - change part of a resource

HTTP Status code

1xx - Informational
2xx - Success
3xx - Redirection
4xx - Cllient error
5xx - Server error

100 - Continue
101 - Processing
200 - ok
201 - created
202 - accepted
307 - teporary redirect
308 - permanent redirect
400 - Bad request
401 - Unauthorized
402 - Payment required
404 - Not Found
500 - Internal server error

