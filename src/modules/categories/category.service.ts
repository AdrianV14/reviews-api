import prisma from "../../lib/prisma";

const getCategories = () => {
	return prisma.category.findMany();
};

const createCategory = (name: string) => {
	return prisma.category.create({ data: { name: name } });
};

const getCategoryById = (id: string) => {
	return prisma.category.findUnique({ where: { id } });
};

const updateCategory = async (id: string, name: string) => {
	const category = await prisma.category.findUnique({
		where: { id },
	});

	if (!category) {
		return null;
	}

	return prisma.category.update({
		where: { id },
		data: { name },
	});
};

const deleteCategoryById = async (id: string) => {
	const category = await prisma.category.findUnique({
		where: { id },
	});

	if (!category) {
		return null;
	}

	return prisma.category.delete({ where: { id } });
};
export {
	createCategory,
	getCategories,
	getCategoryById,
	updateCategory,
	deleteCategoryById,
};
