import { handleInputErrors } from "../../middleware";
import {
	getAllReviews,
	getReview,
	createNewReview,
	updateReviewById,
	deleteReview,
} from "./review.controller";
import { Router } from "express";
import { body, param } from "express-validator";

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Review:
 *    type: object
 *    properties:
 *     id:
 *      type: string
 *      description: The review ID
 *      example: "asdl8cfma1234y0uejxijefgh"
 *     name:
 *      type: string
 *      description: The establishment name
 *      example: "Café del Ángel"
 *     rating:
 *      type: integer
 *      description: The establishment rating
 *      example: 5
 *     description:
 *      type: string
 *      description: The establishment description
 *      example: "Buena calidad en café y agradable musica en vivo los fines de semana."
 *     address:
 *      type: string
 *      description: The establishment address
 *      example: "Venustiano Carranza 117, Zona Centro, 20000 Aguascalientes, Ags"
 *     latitude:
 *      type: number
 *      description: The establishment latitude
 *      example: 21.880421167988118
 *     longitude:
 *      type: number
 *      description: The establishment longitude
 *      example: 102.29929131228646
 *     coverImage:
 *      type: string
 *      description: The establishment image
 *      example: "asdasdqweqwdasf123123.jpg"
 *     categoryId:
 *      type: string
 *      description: The establishment category
 *      example: "werg4515rgagqertqwer"
 *     createdAt:
 *      type: string
 *      description: Date the record was created
 *      example: "2026-07-14T21:39:40.691Z"
 *     updatedAt:
 *      type: string
 *      description: Date the record was updated
 *      example: "2026-07-14T21:39:40.691Z"
 *
 */

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Creates a new review
 *     tags:
 *       - Reviews
 *     description: Returns a new record in the database
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:            
 *                 name:
 *                   type: string
 *                   example: "Café del Ángel"
 *                 rating:
 *                   type: integer
 *                   example: 5
 *                 description:
 *                   type: string
 *                   example: "Buena calidad en café y agradable musica en vivo los fines de semana."
 *                 address:
 *                   type: string
 *                   example: "Venustiano Carranza 117, Zona Centro, 20000 Aguascalientes, Ags"
 *                 latitude:
 *                   type: string
 *                   example: 21.880421167988118
 *                 longitude:
 *                   type: string
 *                   example: 102.29929131228646
 *                 coverImage:
 *                   type: string
 *                   example: "asdasdqweqwdasf123123.jpg"
 *                 categoryId:
 *                   type: string
 *                   example: "asdwqeqwegsdggqwe234"
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Bad Request - Invalid input data
 */
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

/**
 * @swagger
 * /api/reviews:
 *  get:
 *   summary: Get a List of reviews
 *   tags:
 *    - Reviews
 *   description: Return a list of reviews
 *   responses:
 *    200:
 *     description: Successful response
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Review'
 */
router.get("/", getAllReviews);

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     tags:
 *       - Reviews
 *     description: Return a review based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the review to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Review not found
 *       400:
 *         description: Invalid ID
 */
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
