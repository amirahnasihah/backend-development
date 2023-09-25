// practice: create a Math route `/math/sum?n1=10&n2=20` it will return 30
// put in url `?n1=10&n2=20`
const getSum = (req, res) => {
  // extracting n1 and n2 from request query.
  // by default it return in strings. query strings is in string format, so need to convert to Number.
  const { n1, n2 } = req.query;
  if (!(n1 && n2)) return res.json({ error: "bad request" });
  res.json([{ sum: Number(n1) + Number(n2) }, { sum: n1 + n2 }]);
};

module.exports = { getSum };
