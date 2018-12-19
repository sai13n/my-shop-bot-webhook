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

  const messages = data.fulfillmentMessages;
  const action = data.action;
  const contexts = data.outputContexts;
  const parameters = data.parameters;

  const response = { fulfillmentText: "Messages: " + messages + " | Action: " + action + " | Contexts: " + contexts + " | Parameters: " + parameters,}

  res.json(response);
  
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
