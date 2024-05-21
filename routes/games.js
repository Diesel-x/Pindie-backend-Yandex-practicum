// Файл routes/games.js

const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsVoteRequest,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.post(
  "/games",
  createGame,
  findAllGames,
  sendGameCreated,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  checkIsVoteRequest
);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
  checkIsGameExists,
  checkAuth
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted, checkAuth);

module.exports = gamesRouter;
