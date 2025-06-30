import { sql } from "../dbConnection.mjs";

// 1. Get all projects for user
export const getAllCategoriesM = async (userId) => {
  const projectsList = await sql`
        SELECT categories.id, category_name, category_color, category_icon FROM users
        JOIN users_categories
        ON users.id = users_categories.user_id
        JOIN categories 
        ON categories.id = users_categories.category_id
        WHERE users.id = ${userId}
        `;

  return projectsList;
};

// 2. Create new project for a user
export const addCategoryM = async (userId, newCategory) => {
  const columns = Object.keys(newCategory);

  const [category] = await sql`
    insert into categories ${sql(newCategory, columns)}
    returning *
  `;

  await sql`
    INSERT INTO users_categories (user_id, category_id)
    VALUES (${userId}, ${category.id})
    RETURNING *;
  `;
  return category;
};

// 4. Update category by id
export const updateCategoryM = async (id, newCategory) => {
  const columns = Object.keys(newCategory);
  const [category] = await sql`
  update categories set ${sql(newCategory, columns)}
  where categories.id = ${id}
  returning *
`;
  return category;
};

// 5. Delete category by id and all associated tasks.
export const deleteCategoryM = async (id) => {
  const [category] = await sql`
delete from categories
where categories.id = ${id}
returning *
`;
  return category;
};

