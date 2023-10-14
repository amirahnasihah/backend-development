const axios = require("axios");

const getWeather = async (req, res) => {
  const query_params = req.query.q;
  const BASE_URL = "https://dummyjson.com/";

  try {
    if (!query_params) {
      res.status(400).json({ msg: "Invalid query" });
    } else {
      const response = await axios.get(
        `${BASE_URL}users/search?q=${query_params}`
      );

      if (response.data.length === 0) {
        res.status(404).json({ msg: "No data found" });
      } else {
        const apiData = response.data;

        res.status(200);
        res.render("forecast", { apiData });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getWeather };
