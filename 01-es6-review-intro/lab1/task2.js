async function getRandomCatFact() {
  try {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const data = await response.json();
    console.log(data.data[0]);
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

getRandomCatFact()