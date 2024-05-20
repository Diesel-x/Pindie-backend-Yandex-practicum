const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const apiRouter = require("./routes/apiRouter");
const categoriesRouter = require("./routes/categories");

const connectToDatabase = require("./database/connect");
const cors = require("./middlewares/cors");

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);
