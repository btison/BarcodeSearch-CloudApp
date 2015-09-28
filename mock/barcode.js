var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


function barcodeRoute() {
  var barcode = new express.Router();
  barcode.use(cors());
  barcode.use(bodyParser());

  barcode.get('/recent', function(req, res) {
    return res.json(["7622210141132","886742322705","0605168543705","9781432941048","0810815021097"]);
  });

  barcode.all('/read', function(req, res) {
    var barcodeId = req.query.barcode || req.body.barcode;
    console.log('barcode = ', barcodeId)
    if(barcodeId === "error") {
      return res.status(400).json({"error":"Invalid Barcode Id"});
    }
    return res.json(
      {
        "barcode": "7622210141132",
        "productname": "Cadbury Wispa Gold Hot Chocolate Drink",
        "imagebase64" : "data:image/jpg;base64,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",
        "price": "11.59",
        "currency": "USD"
      }
    );
  });

  return barcode;
}

module.exports = barcodeRoute;