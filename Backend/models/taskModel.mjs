import { sql } from "../dbConnection.mjs";

// 1. Get all user tasks
export const getAllUserTasksM = async (userId) => {
  const taskList = await sql`
        SELECT tasks.id, title, description, categories.id AS category_id, category_name, category_color, category_icon ,deadline, created_at, status, priority FROM users
        JOIN users_categories
        ON users.id = users_categories.user_id
        JOIN categories
        ON categories.id = users_categories.category_id
        JOIN tasks
        ON categories.id = tasks.category_id
        WHERE users.id = ${userId}
        `;

  return taskList;
};

// 2. Create new task
export const addTaskM = async (userId, newTask) => {
  const columns = Object.keys(newTask);

  const [task] = await sql`
    insert into tasks ${sql(newTask, columns)}
    returning *
  `;

  return task;
};

// 3. Update task by id
export const updateTaskM = async (id, newTask) => {
  const columns = Object.keys(newTask);
  const [task] = await sql`
  update tasks set ${sql(newTask, columns)}
  where tasks.id = ${id}
  returning *
`;
  return task;
};

// 4. 
export const deleteTaskM = async (id) => {
  const [task] = await sql`
delete from tasks
where tasks.id = ${id}
returning *
`;
  return task;
};

