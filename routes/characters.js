const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    // const name = req.query.name;
    // const id = req.query.id;
    // const limit = req.query.limit || 100;
    // const skip = req.query.skip || 0;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    const data = response.data;
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(error).json({ error: error.message });
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );
    const data = response.data;
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(error).json({ error: error.message });
  }
});

module.exports = router;
