const pyramidByParam = (req, res) => {
  let numsRow = Number(req.params);

  for (let i = 1; i <= numsRow; i++) {
    let row = " ";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    res.send(row);
  }
};

module.exports = { pyramidByParam };
