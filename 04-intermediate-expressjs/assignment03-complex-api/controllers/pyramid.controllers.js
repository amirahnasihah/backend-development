const pyramidByParam = (req, res) => {
  let numsRow = req.params;

  for (var i = 1; i <= numsRow; i++) {
    let row = " ";

    for (var j = 1; j <= i; j++) {
      // now at row1 i = 1, j = 1; 1 <= 1;
      let withinRow = "*";
      // console.log(withinRow)
      result = Number((row += withinRow));
      console.log();
    }
  }
};

module.exports = { pyramidByParam };
