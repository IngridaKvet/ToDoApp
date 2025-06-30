import express from "express";
import { protect } from "../controllers/authController.mjs";
import { addCategory, deleteCategory, getAllCategories, updateCategory } from "../controllers/categoryController.mjs";

const router = express.Router();
router
  .route("/")
  .get(protect, getAllCategories)
  .post(protect, addCategory);
router 
  .route("/:id")
  .patch(protect, updateCategory)
  .delete(protect, deleteCategory)

export default router;
