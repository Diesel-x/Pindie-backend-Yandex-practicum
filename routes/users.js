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
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  createUser,
  sendUserCreated,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  hashPassword
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
  "/users/:id",
  updateUser,
  sendUserUpdated,
  checkEmptyNameAndEmail
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
