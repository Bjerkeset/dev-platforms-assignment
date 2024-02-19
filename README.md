# NestJS Blog Posts API

This project is a simple implementation of a blog posts API using NestJS, Prisma ORM, and Swagger for API documentation. It provides a robust backend solution for creating, reading, updating, and deleting blog posts.

## Features

- **CRUD Operations**: Full create, read, update, and delete functionality for blog posts.
- **Validation**: Request data validation using DTOs (Data Transfer Objects).
- **Database Integration**: Uses Prisma ORM for easy database integration and management.
- **API Documentation**: Integrated Swagger for auto-generated API documentation and testing.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

## Production Link

[URL](https://dev-plattform-assignment.onrender.com/api/v1)

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- A PostgreSQL database (or modify `prisma/schema.prisma` for your database)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/Bjerkeset/dev-platforms-assignment.git
   cd dev-platforms-assignment
```

2. Install NPM packages:

```bash
   npm install
```

3. Setup your database connection in `.env`:

```bash
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

4. Run Prisma migrations to create your database schema:

```bash
   npx prisma migrate dev
```

5. Start the development server:

```bash
   npm run start:dev
```

## Usage

Once the server is running, you can access the Swagger UI for the API documentation and testing at `http://localhost:8080/api/v1`.

### Endpoints

- `POST /blog-posts`: Create a new blog post.
- `GET /blog-posts`: Retrieve all blog posts.
- `GET /blog-posts/:id`: Retrieve a single blog post by its `id`.
- `PATCH /blog-posts/:id`: Update a blog post by its `id`.
- `DELETE /blog-posts/:id`: Delete a blog post by its `id`.

## Built With

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [Swagger](https://swagger.io/) - API documentation & Design tools for teams.
- [PostgreSQL](https://supabase.com/) -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
