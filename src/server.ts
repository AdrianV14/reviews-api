import express from "express";
import categoryRouter from "./modules/categories/category.routes";
import reviewsRouter from "./modules/reviews/review.routes"

const server = express();

server.get("/", (req, res) => {
	res.json({ msg: "desde mi primera ruta" });
});

server.use(express.json());
server.use("/api/categories", categoryRouter);
server.use("/api/reviews", reviewsRouter);

export default server;
