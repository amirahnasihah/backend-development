const express = require("express");

const app = express();

// start the server on port 3000
app.listen(3000, () => {
    console.log("Yay! server is live!");
});