const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
    const limit = req.query.limit || "100";
    const skip = req.query.skip || "0";
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}&title=${title}`
    );

    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId || "";
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?${characterId}?apiKey=${process.env.API_KEY}`
    );
    const data = response.data;

    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/comic/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId || "";
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.API_KEY}`
    );
    const data = response.data;
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
