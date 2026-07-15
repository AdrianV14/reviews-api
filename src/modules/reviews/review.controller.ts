import { Request, Response } from "express";
import {
	getReviews,
	getReviewById,
	createReview,
	updateReview,
	deleteReviewById,
} from "./review.service";

const getAllReviews = async (req: Request, res: Response) => {
	try {
		const reviews = await getReviews();

		return res.status(200).json({ data: reviews });
	} catch (error) {
		return res.status(500).json({ message: " Error de servidor." });
	}
};

const getReview = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const review = await getReviewById(id.toString());

		if (!review) {
			return res.status(404).json({ message: "Reseña no encontrada" });
		}

		return res.status(200).json({ data: review });
	} catch (error) {
		return res.status(500).json({ message: "Error de servidor." });
	}
};

const createNewReview = async (req: Request, res: Response) => {
	try {
		const {
			name,
			rating,
			description,
			address,
			latitude,
			longitude,
			coverImage,
			categoryId,
		} = req.body;

		const review = await createReview(
			name,
			rating,
			description,
			address,
			latitude,
			longitude,
			coverImage,
			categoryId,
		);
		return res.status(201).json({ data: review });
	} catch (error) {
		return res.status(500).json({
			message: "Error de servidor." + error,
		});
	}
};

const updateReviewById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const {
			name,
			rating,
			description,
			address,
			latitude,
			longitude,
			coverImage,
			categoryId,
		} = req.body;

		const review = await updateReview(
			id.toString(),
			name,
			rating,
			description,
			address,
			latitude,
			longitude,
			coverImage,
			categoryId,
		);

		if (!review) {
			return res.status(404).json({ message: "Reseña no encontrada." });
		}

		return res.status(200).json({ data: review });
	} catch (error) {
		return res.status(500).json({ message: "Error del servidor." });
	}
};

const deleteReview = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const review = await deleteReviewById(id.toString());

		if (!review) {
			return res.status(404).json({ message: "Reseña no encontrada" });
		}
		return res.status(200).json({ message: "Reseña eliminada correctamente." });
	} catch (error) {
		return res.status(500).json({ message: "Error de servidor." });
	}
};

export {
	getAllReviews,
	getReview,
	createNewReview,
	updateReviewById,
	deleteReview,
};
