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
/**
 * @swagger
 * components:
 *  schemas:
 *   Category:
 *    type: object
 *    properties:
 *     id:
 *      type: String
 *      description: The category ID
 *      example: "asdl8cfma1234y0uejxijefgh"
 *     name:
 *      type: String
 *      description: The category name
 *      example: "Café"
 *     createAt:
 *      type: DateTime
 *      description: Record creation date
 *      example: "2026-07-14T21:39:40.691Z"
 * 
 */

/**
 * @swagger
 * /api/categories:
 *  get:
 *   summary: Get a List of categories
 *   tags:
 *    - Categories
 *   description: Return a list of categories
 *   responses:
 *    200:
 *     description: Successful response
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Category'
 */
router.get("/", getAllCategories);

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags:
 *       - Categories
 *     description: Return a category based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the category to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *       400:
 *         description: Invalid ID
 */
router.get(
	"/:id",
	param("id").notEmpty().withMessage("Id requerido"),
	handleInputErrors,
	getCategory,
);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Creates a new category
 *     tags:
 *       - Categories
 *     description: Returns a new record in the database
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:            
 *                 name:
 *                   type: String
 *                   example: "Restaurante"
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad Request - Invalid input data
 */
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

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Updates a category with user input
 *     tags:
 *       - Categories
 *     description: Returns the updated category
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the category to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "Café"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad Request - Invalid ID or Invalid input data
 *       404:
 *         description: Product not found
 */
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
