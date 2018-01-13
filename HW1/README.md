# HW1  
## REST  
A script.js file containing all the methods has been created and included in the master branch of HW1 repsoitory.  
## About Me  
Created a gh-pages branch under the homework repository HW1 and uploaded a web file index.html to the branch, which contains a few details about myself.Here is the link to the github pages webpage:  
![Github page about me](https://pages.github.ncsu.edu/ksekhar/HW1/)  
## Concepts  
### 1.Explain some additional concerns related to using REST apis. 

*Limitations of Request methods and Response codes:* 

Since Request methods form an integral part of REST APIs, it is important to note that they are not supported by many client and server applications. The same issue persists with Response codes as well. The same response code is  handled differently by different web browsers. The only response codes that work the same way across all browsers are 200 OK and 500 Internal server error. Moreover, the REST vocabulary is too limited to effectively communicate across different platforms.

*Limitations of HTTP/S:*

REST uses simple HTTP for communication between machines. This makes it vulnerable to security threats such as leakage of private information, abuse of server log information or transfer of sensitive information.

*Hard to debug:*

It is pretty hard to debug REST APIs as the transaction is spread out across the request header, request method, the request address, the response code, the response payload and the actual message.

*Problems with large inputs:*

If the input is large, REST APIs use JSON or XML in the POST requests. JSON data consists of values in key,value pairs and testing all of these could be cumbersome and time consuming.

*High overhead:*

The HTTP request/response method becomes slow when the input is large and complex. A high overhead is created especially when you have REST requests which must wait for other REST requests in a cascading tree.  

### References:  
1. https://blog.barracuda.com/2015/07/09/the-challenges-in-securing-rest-apis/  
2. http://rant3000.blogspot.com/2010/11/why-using-rest-will-kill-your-project.html  

### 2. Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language. See http://graphql.org/ for details.  


| REST API | GRAPHQL |  
--------- |---------
| REST(Representational State Transfer) is an interface between two systems using HTTP to fetch data and perform operations on the data. | GraphQL is a query language for APIs that allows the client to fetch the exact data that they want by providing a detailed description of the data.  
|It has no particular specification and follows a stateless mechanism where the client and the server need not store their previous states.	| GraphQL has a specification and has a particular collection of tools which operate over a single endpoint.  
|REST APIs are intended for longevity more than performance optimization. 	| It is intended for flexibility and performance optimization.  
|It requires multiple URLs to access the actual data.	| GraphQL gets all the required data in a single request.
|The server determines the size of the resources that have to be returned in REST APIs.	|The server simply lists out the available resourses and the client specifies which resources to retrieve and the size and other attributes.  

### REST API 

#### Benefits: 
1. It separates the client from the server and databases.
2. The separation between client and server allows the independent development of the front end and back end.
3. REST APIs are useful in building scalable web applications.
4. It is independent of the type of platform or languages used, which allows it to be used across a variety of applications.

#### Disadvantages:
1. The use of multiple endpoints. Each endpoint represents a resource and when a client needs multiple resources, it needs to make multiple trips to acquire all the resources.
2. The language available for clients is very limited and hence they can only request to list out all the resources and not mention the exact data that they want.

### GRAPHQL 

#### Benefits:
1. GraphQL allows all of the data to be fetched in a single roundtrip to the server by using a single endpoint as it can follow the relationships defined in the schema to obtain the data without the need for multiple endpoints.
2. Client is no longer dependent on the server to determine the shape or size of the data. It has its own client request language, which allows the client to ask for and receive exactly what they need.
3. Since we can add new fields to existing resources, it removes the need for versioning. 

#### Disadvantages:

1. Since it allows for complex queries to fetch data, the risk of a denial-of-service attack is increased due to exhaustion of resources.
2. GraphQL allows the client to access all parts of its API, including third party modules. There is no form of information hiding.
3. Responses cannot be safely cached in GraphQL for future quick access as it does not make use of HTTP caching. In case, caching must be done, it must be performed at the application layer.

### References:  
1. https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/
2. https://bbvaopen4u.com/en/actualidad/rest-api-what-it-and-what-are-its-advantages-project-development
3. http://graphql.org/
4. https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4


