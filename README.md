# Lab 5: Node/Express Data Representation and Querying

## What is Express.js?

Express.js is a lightweight web application framework for Node.js. It provides tools for creating HTTP servers, defining routes, handling requests and responses, serving static files, and building APIs. Express makes it easier to build web applications without handling Node.js HTTP details directly.

## Run the project

```bash
npm install
node server.js
```

The server runs at [http://localhost:3000](http://localhost:3000).

## Available routes

- `GET /` — displays the welcome message.
- `GET /hello/:name/:sname` — greets a person using URL parameters.
- `GET /api/movies` — returns the sample movies as JSON.
- `GET /index` — serves the HTML forms.
- `GET /name?firstname=...&lastname=...` — handles GET form submissions.
- `POST /name` — handles POST form submissions.
