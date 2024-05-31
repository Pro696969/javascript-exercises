const convertToCelsius = function(F) {
  let C = (F-32)/1.8
  return Math.round(C*10)/10
  
};

const convertToFahrenheit = function(C) {
  let F = (C*1.8) + 32
  return Math.ceil(F*10)/10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
