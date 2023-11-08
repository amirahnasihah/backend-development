- [ExpressJS Basics Quiz](#expressjs-basics-quiz)
  - [1. Which of these is an example of an API?](#1-which-of-these-is-an-example-of-an-api)
  - [2. Which of these does not belong in a controller?](#2-which-of-these-does-not-belong-in-a-controller)
  - [3. Can a router sometimes contain business logic?](#3-can-a-router-sometimes-contain-business-logic)
  - [4. Which of these is the correct lifecycle of a request-\>response?](#4-which-of-these-is-the-correct-lifecycle-of-a-request-response)

# ExpressJS Basics Quiz

**Questions:**

## 1. Which of these is an example of an API?

Multiple-choice options (select one):

️A. A restful api hosted at https://foo.bar/api/v1

B. An OS framework exposing bindings to a language

C. Interface for interacting with an app

D. All of the above✅

**Explanation**

```markdown
The correct answer is option A. A restful API hosted at https://foo.bar/api/v1 is an example of an API.

Option B refers to a framework, which can expose an API, but it is not an API in itself. Option C refers to an interface, which may or may not include an API. Therefore, option D is not the correct answer.
```

## 2. Which of these does not belong in a controller?

Multiple-choice options (select one):

A. Core business logic

B. Formulation of a response

C. Interactions with 3rd party APIs and DBs✅️

D. None of these

**Explanation**

```markdown
Option D, "None of these," is not a correct answer because all of the options can potentially belong in a controller. However, if we consider which option is the least appropriate for a controller, then it would be option A, "Core business logic."

Controllers in software architecture typically handle the request/response cycle and orchestrate the interaction between the user interface, models, and other components of the system. While business logic can be an integral part of the controller's implementation, it is generally not recommended to place too much complex business logic in the controller.

Instead, business logic is typically encapsulated in the model layer or in service objects. This allows for better separation of concerns and maintainability of the codebase. Therefore, option A is the least appropriate for a controller.
```

## 3. Can a router sometimes contain business logic?

Multiple-choice options (select one):

A. Yes

B. No✅️

**Explanation**

```markdown
Option A, "Yes," is the correct answer.

While a router is primarily responsible for directing incoming requests to the appropriate controller actions or endpoints, it can sometimes contain business logic as well. This is especially true when it comes to handling routing logic that is more complex than simply matching a URL pattern to a controller action.

For example, in a web application with multi-tenancy support, a router might need to examine the domain name or subdomain of the incoming request in order to determine which tenant-specific resources to serve. This kind of routing logic might involve making database queries or other operations that involve business logic.

In such cases, it can be appropriate to include some business logic in the router to keep the code organized and avoid duplicating logic across multiple parts of the system. However, it is important to keep in mind that the primary responsibility of the router is still routing, and it should not become overly burdened with business logic.
```

## 4. Which of these is the correct lifecycle of a request->response?

Multiple-choice options (select one):

A. Interceptor -> Router -> Middleware -> Controller

B. Router -> Controller -> Middleware -> Interceptor

C. Controller -> Router -> Middleware -> Interceptor

D. Router -> Middleware -> Controller -> Interceptor✅️

**Explanation**

```markdown
The correct answer is option D: Router -> Middleware -> Controller -> Interceptor.

This is the typical order of execution for the lifecycle of a request -> response in a web application. Here's a breakdown of each step:

Router: The router is responsible for mapping incoming requests to the appropriate controller action based on the URL and HTTP method.

Middleware: Middleware functions are executed before the controller action is invoked, and they can perform tasks such as parsing request bodies, handling authentication, or adding headers to the response.

Controller: The controller is where the main business logic of the application is implemented. It receives the request data from the middleware and produces a response.

Interceptor: Finally, interceptors can be used to modify the response or perform other tasks after the controller action has completed, such as logging or error handling.

It's worth noting that the precise order and components involved in the request/response lifecycle can vary depending on the specific architecture and framework being used. However, the general pattern of router -> middleware -> controller -> interceptor is common to many web development environments.
```
