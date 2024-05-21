const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName,
} = require("../middlewares/categories");

const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put(
  "/categories/:id",
  updateCategory,
  sendCategoryUpdated,
  checkAuth
);
categoriesRouter.delete(
  "/categories/:id",
  deleteCategory,
  sendCategoryDeleted,
  checkAuth
);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
