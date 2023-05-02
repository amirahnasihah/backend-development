getRandomCatFact = async () => {
  try {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const data = await response.json();
    console.log(data.data);
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

getRandomCatFact()