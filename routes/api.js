/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      console.log('apiInput: ' + input)
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit)
      let returnUnit = convertHandler.getReturnUnit(initUnit);

      if(initUnit == 'Invalid Unit' && initNum == 'Invalid Number') {
        res.send('invalid number and unit')
      } else if(initUnit == 'Invalid Unit') {
        res.send('invalid unit')
      } else if(initNum == 'Invalid Number') {
        res.send('invalid number')
      } else {

      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      console.log('apiReturnNum: ' + returnNum)
      res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString})
      

      }





    });
    
};
