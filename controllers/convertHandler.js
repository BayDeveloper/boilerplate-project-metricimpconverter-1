/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {


  let regexUnits = /(mi)|(km)|(lbs)|(kg)|(gal)|(L)/gi
  let regexNums = /[0-9]/
  let units = ['mi','km','lbs','kg','gal','L','MI','KM','LBS','KG','GAL','l']

  
  this.getNum = function(input) {


   
    if(input === 'mi' || input === 'km' || input === 'lbs' || input === 'kg' || input === 'gal' || input === 'L') {
      return 1
    } 
    
    if(input.split('/').length > 2) {
      return 'Invalid Number'
    }

    if(input.split('.').length > 2) {
      return 'Invalid Number'
    }

    let result = input.split(/[a-zA-Z]/g)[0]; 



 
    result = eval(result);


    

    return result
    
  };
  
  this.getUnit = function(input) {

    if(!input.includes('mi') && !input.includes('km') && !input.includes('lbs') && !input.includes('kg') && !input.includes('gal')&& !input.includes('l') && !input.includes('MI') && !input.includes('KM')&& !input.includes('LBS')&& !input.includes('KG') && !input.includes('GAL') && !input.includes('L') ) {
      return 'Invalid Unit'
    }
    
    if(input === 'mi' || input === 'km' || input === 'lbs' || input === 'kg' || input === 'gal' || input === 'L'|| input === 'l' || input === 'MI' || input === 'KM' || input === 'LBS' || input === 'KG' || input === 'GAL' ) {
      return input
    }

    let result;
    result = input.split(regexUnits)
    result = result.filter(elem => elem)

    if(result.length > 2) {return 'Invalid Unit'}

    if (units.includes(result[1]) && (result[1] != 'L' && result[1] != 'l')) {
      return result[1].toLowerCase();  
    } else if (units.includes(result[1]) && result[1] == 'L' || result[1] == 'l') {
      return 'L'
    } 
    
    return 'Invalid Unit'
    
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    let lowercased = initUnit.toLowerCase()
    switch(lowercased) {
  case 'mi':
    result = 'km'
    break;
  case 'km':
    result = 'mi'
    break;
  case 'lbs':
    result = 'kg'
    break;
  case 'kg':
    result = 'lbs'
    break;
  case 'gal':
    result = 'L'
    break;
  case 'l':
    result = 'gal'
    break;
}
   
    return result;
  };

  this.spellOutUnit = function(unit) {
   // if(unit != 'Invalid Unit'){

    unit = unit.toLowerCase()
 switch(unit) {
        case 'mi': return 'miles'; break;
        case 'km': return 'kilometers'; break;
        case 'lbs': return 'pounds'; break;
        case 'kg': return 'kilograms'; break;
        case 'gal': return 'gallons'; break;
        case 'l': return 'litres'; break;
        default:
          return 'unknown';
      }

   // }

  };
  
  this.convert = function(initNum, initUnit) {
    initUnit = initUnit.toLowerCase()
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    

     switch(initUnit) {
        case 'mi': return Number((initNum * miToKm).toFixed(5)); 
        case 'km': return Number((initNum / miToKm).toFixed(5));
        case 'lbs': return Number((initNum * lbsToKg).toFixed(5));
        case 'kg': return Number((initNum / lbsToKg).toFixed(5));
        case 'gal': return Number((initNum * galToL).toFixed(5));
        case 'l': return Number((initNum / galToL).toFixed(5)); 
        default:
          return 'unknown';
      }
      
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit, spellOutUnit) {



    if(initUnit != 'Invalid Unit' && initNum != 'Invalid Number') {

    //returnNum = Number(returnNum.toFixed(5));
      
    return  `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`

    }
 
  

  };
  
}

module.exports = ConvertHandler;
