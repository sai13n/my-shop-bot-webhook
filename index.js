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

  const OrigMessage = data.queryResult.queryText;
  const action = data.queryResult.action;
  const contexts = data.queryResult.contexts;
  const parameters = data.queryResult.parameters.echoText;
  const intent = data.queryResult.intent.displayName;

  const response = { fulfillmentText: "Original Message: " + OrigMessage + " | Action: " + action + " | Contexts: " + contexts + " | Parameters EchoText: " + parameters + " | Intent: " + intent,}

  res.json(response);
  
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
