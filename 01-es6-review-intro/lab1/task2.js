const axios = require("axios");

const getRandomCatFact = async () => {
  const res = await axios.get("https://meowfacts.herokuapp.com");
  console.log("getRandomCatFact:", res.data);
};

getRandomCatFact();
