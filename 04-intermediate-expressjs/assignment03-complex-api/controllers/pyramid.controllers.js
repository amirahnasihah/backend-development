const pyramidByParam = (req, res) => {
  // Extracting the parameter from the request
  let numsRow = Number(req.params);

  // Building the pyramid
  let result = "";
  for (let i = 1; i <= numsRow; i++) {
    let row = "s";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    // Concatenate the row to the result
    result += row + "\n";
  }

  // Sending the result as a response
  res.send(result);
};

module.exports = pyramidByParam;
