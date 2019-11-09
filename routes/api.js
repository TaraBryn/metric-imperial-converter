/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      
      
      var init_units = convertHandler.spellOutUnit(initUnit);
      var return_units = convertHandler.spellOutUnit(returnUnit);
      var toString = convertHandler.getString(initNum, init_units, returnNum, return_units);
      
      return (!initNum || !initUnit) ? res.send(toString) : res.json(toString);
      //res.json
    });
    
};
