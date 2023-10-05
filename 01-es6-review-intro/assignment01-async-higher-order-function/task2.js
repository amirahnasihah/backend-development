const axios = require("axios");

const getRandomCatFact = async () => {
  const response = await axios.get("https://meowfacts.herokuapp.com/");

  console.log(response.data);
};

getRandomCatFact();
