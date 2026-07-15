
# Reviews API
A RESTful API built with Node.js, Express, TypeScript, and Prisma ORM for managing reviews and categories. The project follows a modular architecture to keep the codebase organized and scalable. 

## 🚀 Tech Stack
- Node.js
- Express 5
- TypeScript
- Prisma ORM
- PostgreSQL
- Express Validator
- Dotenv

## 📋 Prerequisites

Before running this project, make sure you have installed:

- Node.js 22+
- npm 10+
- PostgreSQL 15+
- Git

> Make sure PostgreSQL is running before executing Prisma migrations.

## ⚙️ Installation
1. Clone the repository:
```bash
git clone https://github.com/AdrianV14/reviews-api.git
cd reviews-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/reviews"
PORT=3000 # Your server PORT
```

4. Run the database migrations:
```bash
npx prisma migrate dev
```

5. Generate the Prisma Client:
```bash
npx prisma generate
```

6. Start the development server:
```bash
npm run dev
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |

## 🗄️ Database

This project uses Prisma ORM with PostgreSQL.

Useful Prisma commands:

- Create and apply migrations
```bash
npx prisma migrate dev
```
- Apply existing migrations
```bash
npx prisma migrate deploy
```
- Generate Prisma Client
```bash
npx prisma generate
```
- Open Prisma Studio
```bash
npx prisma studio
```


## 📌 API Endpoints
### Categories
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | Get all categories |
| GET | `/categories/:id` | Get a category by ID |
| POST | `/categories` | Create a category |
| PUT | `/categories/:id` | Update a category |
| DELETE | `/categories/:id` | Delete a category |

### Reviews
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reviews` | Get all reviews |
| GET | `/reviews/:id` | Get a review by ID |
| POST | `/reviews` | Create a review |
| PUT | `/reviews/:id` | Update a review |
| DELETE | `/reviews/:id` | Delete a review |

## 🏗️ Architecture

The project follows a modular architecture where each module contains its own:

- Routes
- Controllers
- Services

The application is organized into independent modules, allowing better maintainability, scalability, and separation of concerns.

## 📁 Project Structure

```text
.
├── prisma/
│   ├── migrations/
│   │   ├── init/
│   │   │   └── migration.sql
│   │   ├── rename_review_fields/
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
│
├── src/
│   ├── index.ts
│   ├── server.ts
│   │
│   ├── lib/
│   │   └── prisma.ts
│   │
│   ├── middleware/
│   │   └── index.ts
│   │
│   └── modules/
│       ├── categories/
│       │   ├── category.controller.ts
│       │   ├── category.service.ts
│       │   └── category.routes.ts
│       │
│       └── reviews/
│           ├── review.controller.ts
│           ├── review.service.ts
│           └── review.routes.ts
│
├── package.json
├── tsconfig.json
├── .gitignore
├── prisma.config.ts
├── tsconfig.json
└── .env
