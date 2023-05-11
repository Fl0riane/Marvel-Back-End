require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
app.use(charactersRoutes);
app.use(comicsRoutes);

app.get("/", (req, res) => {
  res.json("Bienvenue sur l'API MARVEL");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
