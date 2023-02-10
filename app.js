const express = require("express");
const myApp = express();

const addDays = require("date-fns/addDays");

myApp.get("/", (request, response) => {
  let date = new Date();
  let resDate = addDays(date, 100);
  response.send(
    `${resDate.getDate()}/${resDate.getMonth() + 1}/${resDate.getFullYear()}`
  );
});

module.exports = myApp;
