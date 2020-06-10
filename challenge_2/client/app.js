

var createCSV = function(jsonObject) {

  var parsedObj = JSON.parse(jsonObject);
  var result = 'firstName,lastName,county,city,role,sales\n';

  var parseData = function (pObj) {


    var employee = `${pObj.firstName}, ${pObj.lastName}, ${pObj.county}, ${pObj.city}, ${pObj.role}, ${pObj.sales}\n`;

    result += employee;

    if (pObj.children.length > 0) {
      for (let i = 0; i < pObj.children.length; i++) {
        parseData(pObj.children[i]);
      }
    }
  }

  parseData(parsedObj);


  return result;
};

module.exports = createCSV;