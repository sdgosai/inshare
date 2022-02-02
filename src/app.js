const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path: "./.env"})
app.use(express.json());

require("../src/database_conn/conn")

const fileUploadRouter = require('../src/router/fileupload-router')
app.use(fileUploadRouter);

const port = process.env.PORT
app.get("/welcome", (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });
app.listen(port, () => {
    console.log(`node application live at ${port} 🙌`);
})