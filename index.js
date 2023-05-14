require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

mongoose.connect("mongodb://localhost/Marvel");

const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const userRoutes = require("./routes/user");

app.use(charactersRoutes);
app.use(comicsRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json("Bienvenue sur l'API MARVEL");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
