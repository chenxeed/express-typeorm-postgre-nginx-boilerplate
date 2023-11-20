# express-typeorm-postgres-boilerplate

A boilerplate to create a web application with both Frontend and the API. It uses Docker for each service as container, and then use Docker Compose to run them all in a single command.
The API server can be accessed within the Frontend port thanks to nginx reverse proxy method.

API Server:
- ExpressJS
- TypeORM

Database:
- PostgreSQL

Frontend:
- NextJS

Reverse proxy:
- nginx

# Run the application

1. Run `docker compose up -d --build` to build the app
2. Go to `http://localhost:80/` to see the frontend side of the application
3. Go to `http://localhost:80/api` to see the API side of the application
