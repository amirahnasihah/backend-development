const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const productsRoute = require("./routes/productsRoute");
const errorMiddleware = require("./middleware/errorMiddleware");

// dotenv
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

// cors config. this allow only example domain.com to access to your backend or to access to this API
var corsOptions = {
  origin: ["http://example.com", FRONTEND],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// routes
app.use("/api/products", productsRoute);

app.get("/", (req, res, next) => {
  // throw new Error("fake error!");
  res.send("Hi fella!");
});

app.get("/blog", (req, res, next) => {
  console.log("blog route");
  res.send("This is a blog!");
});

app.use(errorMiddleware);

// connect to database MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
      console.log("App listening on port " + PORT);
    });
  })
  .catch((error) => console.log(error));
