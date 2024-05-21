// Создаём роут для запросов категорий
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  hashPassword,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");

const { checkAuth } = require("../middlewares/auth");

usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  createUser,
  sendUserCreated,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  hashPassword,
  checkAuth
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
  "/users/:id",
  updateUser,
  sendUserUpdated,
  checkEmptyNameAndEmail,
  checkAuth
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted, checkAuth);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
