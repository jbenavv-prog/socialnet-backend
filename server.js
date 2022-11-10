require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const { SERVER_PORT, SERVER_HOST, MONGODB_URI } = process.env;

require('./routes')(app);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(
        `DB connected and listening on ${SERVER_HOST}:${SERVER_PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
