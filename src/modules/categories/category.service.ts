import prisma from "../../lib/prisma";

const getCategories = () => {
	return prisma.category.findMany();
};

const createCategory = (name: string) => {
	return prisma.category.create({ data: { name: name } });
};

const getCategoryById = (categoryId: string) => {
	return prisma.category.findUnique({ where: { id: categoryId } });
};

const updateCategory = async (categoryId: string, name: string) => {
	const category = await prisma.category.findUnique({
		where: { id: categoryId },
	});

	if (!category) {
		return null;
	}

	return prisma.category.update({
		where: { id: categoryId },
		data: { name: name },
	});
};

const deleteCategoryById = async (categoryId: string) => {
	const category = await prisma.category.findUnique({
		where: { id: categoryId },
	});

	if (!category) {
		return null;
	}

	return prisma.category.delete({ where: { id: categoryId } });
};
export {
	createCategory,
	getCategories,
	getCategoryById,
	updateCategory,
	deleteCategoryById,
};
