import { Router } from "express";
import {
	getAllReviews,
	getReview,
	createNewReview,
	updateReviewById,
	deleteReview
} from "./review.controller";
import { body, param } from "express-validator";
import { handleInputErrors } from "../../middleware";

const router = Router();

router.post(
	"/",
	body("name")
		.trim()
		.notEmpty()
		.withMessage("El nombre del establecimiento no puede ir vacío")
		.isLength({ min: 2, max: 50 })
		.withMessage("El nombre debe tener entre 2 y 50 caracteres"),

	body("rating")
		.notEmpty()
		.withMessage("El rating no puede ir vacío")
		.isInt({ min: 1, max: 5 })
		.withMessage("El rating debe ser un número entero entre 1 y 5"),

	body("description")
		.trim()
		.notEmpty()
		.withMessage("La descripción no puede ir vacía")
		.isLength({ min: 10, max: 2000 })
		.withMessage("La descripción debe tener entre 10 y 2000 caracteres"),

	body("address")
		.trim()
		.notEmpty()
		.withMessage("La dirección no puede ir vacía")
		.isLength({ min: 5, max: 255 })
		.withMessage("La dirección debe tener entre 5 y 255 caracteres"),

	body("latitude")
		.notEmpty()
		.withMessage("La latitud es requerida")
		.isFloat({ min: -90, max: 90 })
		.withMessage("La latitud debe estar entre -90 y 90"),

	body("longitude")
		.notEmpty()
		.withMessage("La longitud es requerida")
		.isFloat({ min: -180, max: 180 })
		.withMessage("La longitud debe estar entre -180 y 180"),

	body("coverImage")
		.trim()
		.notEmpty()
		.withMessage("La imagen principal es requerida")
		.isLength({ max: 500 })
		.withMessage("La ruta de la imagen es demasiado larga"),

	body("categoryId").trim().notEmpty().withMessage("La categoría es requerida"),
	handleInputErrors,
	createNewReview,
);

router.get("/", getAllReviews);

router.get(
	"/:id",
	param("id").notEmpty().withMessage("Id requerido"),
	handleInputErrors,
	getReview,
);

router.put(
	"/:id",
	param("id").notEmpty().withMessage("Id requerido"),
	body("name")
		.trim()
		.notEmpty()
		.withMessage("El nombre del establecimiento no puede ir vacío")
		.isLength({ min: 2, max: 50 })
		.withMessage("El nombre debe tener entre 2 y 50 caracteres"),

	body("rating")
		.notEmpty()
		.withMessage("El rating no puede ir vacío")
		.isInt({ min: 1, max: 5 })
		.withMessage("El rating debe ser un número entero entre 1 y 5"),

	body("description")
		.trim()
		.notEmpty()
		.withMessage("La descripción no puede ir vacía")
		.isLength({ min: 10, max: 2000 })
		.withMessage("La descripción debe tener entre 10 y 2000 caracteres"),

	body("address")
		.trim()
		.notEmpty()
		.withMessage("La dirección no puede ir vacía")
		.isLength({ min: 5, max: 255 })
		.withMessage("La dirección debe tener entre 5 y 255 caracteres"),

	body("latitude")
		.notEmpty()
		.withMessage("La latitud es requerida")
		.isFloat({ min: -90, max: 90 })
		.withMessage("La latitud debe estar entre -90 y 90"),

	body("longitude")
		.notEmpty()
		.withMessage("La longitud es requerida")
		.isFloat({ min: -180, max: 180 })
		.withMessage("La longitud debe estar entre -180 y 180"),

	body("coverImage")
		.trim()
		.notEmpty()
		.withMessage("La imagen principal es requerida")
		.isLength({ max: 500 })
		.withMessage("La ruta de la imagen es demasiado larga"),

	body("categoryId").trim().notEmpty().withMessage("La categoría es requerida"),
	handleInputErrors,
	updateReviewById,
);

router.delete(
	"/:id",
	param("id").notEmpty().withMessage("Id requerido"),
	handleInputErrors,
	deleteReview,
);

export default router;
