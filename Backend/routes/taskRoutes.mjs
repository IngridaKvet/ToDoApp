import express from "express";
import { protect } from "../controllers/authController.mjs";
import { addTask, getAllUserTasks, updateTask, deleteTask} from "../controllers/taskController.mjs";

const router = express.Router();
router
  .route("/")
  .get(protect, getAllUserTasks)
  .post(protect, addTask)
  

router 
  .route("/:id")
  .patch(protect, updateTask)
  .delete(protect, deleteTask)

export default router;
