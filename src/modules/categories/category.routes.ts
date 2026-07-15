import { Router } from "express";
import { body, param } from "express-validator";
import {
	getAllCategories,
	createNewCategory,
	getCategory,
	updateCategoryById,
	deleteCategory,
} from "./category.controller";
import { handleInputErrors } from "../../middleware";

const router = Router();

router.get("/", getAllCategories);

router.get(
	"/:id",
	param("id").notEmpty().withMessage("Id requerido"),
	handleInputErrors,
	getCategory,
);

router.post(
	"/",
	body("name")
		.trim()
		.notEmpty()
		.withMessage("El nombre de la categoría no puede ir vacío")
		.isLength({ min: 2, max: 50 })
		.withMessage("El nombre debe tener entre 2 y 50 caracteres"),
	handleInputErrors,
	createNewCategory,
);

router.put(
	"/:id",
	param("id").notEmpty().withMessage("Id requerido"),
	body("name")
		.trim()
		.notEmpty()
		.withMessage("El nombre de la categoría no puede ir vacío")
		.isLength({ min: 2, max: 50 })
		.withMessage("El nombre debe tener entre 2 y 50 caracteres"),
	handleInputErrors,
	updateCategoryById,
);

router.delete(
	"/:id",
	param("id").notEmpty().withMessage("Id requerido"),
	handleInputErrors,
	deleteCategory,
);

export default router;
