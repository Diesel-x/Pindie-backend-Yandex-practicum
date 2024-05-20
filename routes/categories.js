// Создаём роут для запросов категорий
const categoriesRouter = require("express").Router();

// Импортируем вспомогательные функции
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
  checkEmptyName
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
