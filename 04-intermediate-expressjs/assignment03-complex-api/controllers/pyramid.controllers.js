const getPyramids = (req, res) => {
  res.json({ msg: "working..." });
};

const getPyramidShape = (req, res) => {
  const { numsRow } = req.params;

  res.render("pyramid", { numsRow: parseInt(numsRow) });
};

module.exports = { getPyramids, getPyramidShape };
