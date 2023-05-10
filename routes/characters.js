const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    const name = req.query.name;
    const id = req.query.id;
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    const characters = response.data;
    res.status(400).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/characters/:id", async (req, res) => {
  try {
    const name = req.query.name;
    const id = req.query.id;
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    const characters = response.data;
    res.status(400).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );

    const characterId = response.data;
    console.log(response.data);
    res.status(400).json(characterId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
