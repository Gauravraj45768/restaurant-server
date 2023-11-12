// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js
const fileUpload = require("express-fileupload");
const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
const cloudinaryConnect = require("./configs/cloudinary");

const createproduct = require("./controllers/productcontroller");

const db = require("./configs/database");
db.connect();
cloudinaryConnect;
app.post("/uploaditem", createproduct);

//http://localhost:8000

app.listen(8000, () => {
  console.log("Server Establish at 8000 Port");
});
