import prisma from "../../lib/prisma";

const getReviews = () => {
	return prisma.review.findMany();
};

const getReviewById = (reviewId: string) => {
	return prisma.review.findUnique({ where: { id: reviewId } });
};

const createReview = (
	name: string,
	rating: number,
	description: string,
	address: string,
	latitude: number,
	longitude: number,
	coverImage: string,
	categoryId: string,
) => {
	return prisma.review.create({
		data: {
			name,
			rating,
			description,
			address,
			latitude,
			longitude,
			coverImage,
			categoryId,
		},
	});
};

const updateReview = async (
	id: string,
	name: string,
	rating: number,
	description: string,
	address: string,
	latitude: number,
	longitude: number,
	coverImage: string,
	categoryId: string,
) => {
	const review = await prisma.review.findUnique({ where: { id } });

	if (!review) {
		return null;
	}

	return prisma.review.update({
		where: { id },
		data: {
			name,
			rating,
			description,
			address,
			latitude,
			longitude,
			coverImage,
			categoryId,
		},
	});
};

const deleteReviewById = async (id: string) => {
	const review = await prisma.review.findUnique({ where: { id } });

	if (!review) {
		return null;
	}

	return prisma.review.delete({ where: { id } });
};

export {
	getReviews,
	getReviewById,
	createReview,
	updateReview,
	deleteReviewById,
};
