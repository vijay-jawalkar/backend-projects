require("dotenv").config(); // load env file in our main app

const express = require("express"); // First we need to import express from express module, so that we can create our server web application

const app = express(); //create reference for our app

const port = 3000; //port on which our application will run

app.get("/", (req, res) => {
  res.send("Hello World!");
}); //it will get result on the basis of repected route

app.get("/login", (req, res) => {
  res.send("This is login page!");
});

app.get("/cartlist", (req, res) => {
  res.send("<h2>This is CartList section</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
}); //with the help of this, web application will see on local port
