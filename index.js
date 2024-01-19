const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Adaa Server-Side!");
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
