/* Promises, Callbacks, Asyncronous code (!!important!!)

- interact with public api (https://api.publicapis.org/)
*/
const axios = require("axios");

const getPublicAPI = async () => {
  const response = await axios.get("https://api.publicapis.org/random");
  console.log(response.data);
};

getPublicAPI();

// getRandomCatFact

const getRandomCatFact = async () => {
  const res = await axios.get("https://meowfacts.herokuapp.com");
  console.log("getRandomCatFact:", res.data);
};

getRandomCatFact();
