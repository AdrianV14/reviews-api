Reviews API

A RESTful API built with Node.js, Express, TypeScript, and Prisma ORM for managing reviews and categories. The project follows a modular architecture to keep the codebase organized and scalable.

🚀 Tech Stack
Node.js
Express 5
TypeScript
Prisma ORM
PostgreSQL
Express Validator
Dotenv
📁 Project Structure
.
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── lib/
│   │   └── prisma.ts
│   ├── middleware/
│   │   └── index.ts
│   ├── modules/
│   │   ├── categories/
│   │   │   ├── category.controller.ts
│   │   │   ├── category.routes.ts
│   │   │   └── category.service.ts
│   │   └── reviews/
│   │       ├── reviews.controller.ts
│   │       ├── reviews.routes.ts
│   │       └── reviews.service.ts
│   ├── index.ts
│   └── server.ts
│
├── package.json
└── README.md
⚙️ Installation

Clone the repository:

git clone https://github.com/AdrianV14/reviews-api.git
cd reviews-api

Install dependencies:

npm install

Create a .env file in the project root.

Example:

DATABASE_URL="postgresql://username:password@localhost:5432/reviews"
PORT=3000

Run the database migrations:

npx prisma migrate dev

Generate the Prisma Client:

npx prisma generate

Start the development server:

npm run dev
📦 Available Scripts
Command	Description
npm run dev	Starts the development server using TSX
🗄️ Database

This project uses Prisma ORM with PostgreSQL.

Useful Prisma commands:

npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
npx prisma studio
📌 API Modules
- Categories
Create category
Get categories
Get category by ID
Update category
Delete category
- Reviews
Create review
Get reviews
Get review by ID
Update review
Delete review
🏗️ Architecture

The project follows a modular architecture where each feature contains its own:

Controller
Routes
Service

This separation makes the API easier to maintain and extend.
