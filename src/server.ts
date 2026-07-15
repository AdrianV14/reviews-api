import express from "express";
import categoryRouter from "./modules/categories/category.routes";
import reviewsRouter from "./modules/reviews/review.routes"
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const server = express();
server.use(express.json());

//Routes
server.use("/api/categories", categoryRouter);
server.use("/api/reviews", reviewsRouter);

//Docs
server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default server;
