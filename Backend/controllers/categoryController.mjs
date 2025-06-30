import { getAllCategoriesM, addCategoryM, updateCategoryM, deleteCategoryM } from "../models/categoryModel.mjs";

// 1. Get all projects for a user
export const getAllCategories = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const categoryList = await getAllCategoriesM(userId);
    res.status(200).json({
      status: "success",
      categories: categoryList,
    });
  } catch (error) {
    next(error);
  }
};

// 2. Create new category for a user
export const addCategory = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newCategory = await addCategoryM(userId, req.body);
    res.status(201).json({
      status: "success",
      new_category: newCategory,
    });
  } catch (error) {
    next(error);
  }
};


// 4. Update category by id
export const updateCategory = async (req, res, next) => {
  try {
    const id = +req.params.id;
    const newCategory = req.body;

    const updatedCategory = await updateCategoryM(id, newCategory);

    if (!updatedCategory) {
      res.status(404).json({
        status: "error",
        message: `No such category found to update`,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      category: updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

// 5. Delete category by id and all associated tasks.
export const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await deleteCategoryM(id);

    if (!category) {
      res.status(404).json({
        status: "404 error",
        message: `No such category found to delete`,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Category deleted",
    });
  } catch (error) {
    next(error);
  }
};

