"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  const data = req.body;

  const response = { fulfillmentText: data,}

  res.json(response);
  
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
