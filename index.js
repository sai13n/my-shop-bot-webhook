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

restService.post("/webhook", function(req, res) {
  const data = req.body;

  const action = data.queryResult.action;

  switch(action){
    case "test_webhook":
    let response = { fulfillmentText: "Test Webhook works!",}
    res.json(response); 
    break;

    case test_hijk:
    let response = { fulfillmentText: "HIJK Webhook works!",}
    res.json(response); 
    break;    
  }
    /*
    if (action =="test_webhook") {
    let response = { fulfillmentText: "Test Webhook works!",}
    res.json(response); 
    }
    else if (action =="test_hijk") {
     let response = { fulfillmentText: "HIJK Webhook works!",}
    res.json(response);  
    }*/

  /*switch(action) {
  case "detailed_order":

    let client_name = data.queryResult.parameters.client_name;
    let client_contact_number = data.queryResult.parameters.client_contact_number;
    let client_address = data.queryResult.parameters.client_address;
    let platter_details = data.queryResult.outputContexts.Platters;

    //let OrigMessage = data.queryResult.queryText;
    //let action = data.queryResult.action;
    //let contexts = data.queryResult.contexts;
    //let intent = data.queryResult.intent.displayName;

    let response = { fulfillmentText: "Your order is as follows: \n Platter - " + platter_details + "\n Name - " + client_name + "\n Contact Number - " + client_contact_number + "\n Address - " + client_address,}
    res.json(response); 
 
    break;
  case "test_webhook":
    let response = { fulfillmentText: "Webhook works",}
    res.json(response); 
    break;
  default:
    let response = { fulfillmentText: "Error: Unable to match action",}
    res.json(response); 
}*/

    
  
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
