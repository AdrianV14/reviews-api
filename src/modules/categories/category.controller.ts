import { Request, Response } from "express";
import {
	createCategory,
	getCategories,
	getCategoryById,
	updateCategory,
	deleteCategoryById,
} from "./category.service";

const createNewCategory = async (req: Request, res: Response) => {
	try {
		const { name } = req.body;

		const category = await createCategory(name);

		return res.status(201).json({ data: category });
	} catch (error) {
		return res.status(500).json({
			message: "Error de servidor.",
		});
	}
};

const getAllCategories = async (req: Request, res: Response) => {
	try {
		const categories = await getCategories();

		return res.status(200).json({ data: categories });
	} catch (error) {
		return res.status(500).json({
			message: "Error de servidor.",
		});
	}
};

const getCategory = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const category = await getCategoryById(id.toString());

		if (!category) {
			return res.status(404).json({ message: "Categoria no encontrada" });
		}

		return res.status(200).json({ data: category });
	} catch (error) {
		return res.status(500).json({
			message: "Error de servidor.",
		});
	}
};

const updateCategoryById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name } = req.body;

		const category = await updateCategory(id.toString(), name);

		if (!category) {
			return res.status(404).json({ message: "Categoria no encontrada" });
		}
		return res.status(200).json({ data: category });
	} catch (error) {
		return res.status(500).json({
			message: "Error de servidor.",
		});
	}
};

const deleteCategory = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const category = await deleteCategoryById(id.toString());

		if (!category) {
			return res.status(404).json({
				message: "Categoria no encontrada.",
			});
		}

		return res.status(200).json({
			message: "Categoría eliminada correctamente.",
		});
	} catch (error) {
		return res.status(500).json({
			message: "Error de servidor.",
		});
	}
};

export {
	createNewCategory,
	getAllCategories,
	getCategory,
	updateCategoryById,
	deleteCategory,
};
