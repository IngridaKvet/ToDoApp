import { getAllUserTasksM, addTaskM, updateTaskM, deleteTaskM} from "../models/taskModel.mjs";

// 1. Get all user tasks
export const getAllUserTasks = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const taskList = await getAllUserTasksM(userId);
    res.status(200).json({
      status: "success",
      user_tasks: taskList,
    });
  } catch (error) {
    next(error);
  }
};

// 2. Create new task in a category
export const addTask = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newTask = await addTaskM(userId, req.body);
    res.status(201).json({
      status: "success",
      new_task: newTask,
    });
  } catch (error) {
    next(error);
  }
};
// 3. Update a task by id
export const updateTask = async (req, res, next) => {
  try {
    const id = +req.params.id;
    const newTask = req.body;

    const updatedTask = await updateTaskM(id, newTask);

    if (!updatedTask) {
      res.status(404).json({
        status: "error",
        message: `No such task found to update`,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      updated_task: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};


// 4. Delete a task
export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await deleteTaskM(id);

    if (!task) {
      res.status(404).json({
        status: "404 error",
        message: `No such task found to delete`,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Task deleted",
    });
  } catch (error) {
    next(error);
  }
};