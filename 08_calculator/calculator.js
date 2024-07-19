//basic math functions params are primitive num 
const add = function(value_x, value_y) {
	return value_x + value_y;
};

const subtract = function(value_x, value_y) {
	return value_x - value_y;
};

//Param is array
const sum = (arr) => {
  return arr.reduce( (acc,curr) => acc+=curr ,0);
};
  
const multiply = function(arr) {
  return arr.reduce( (acc,curr) => acc*=curr ,1);
};


// adanced math functions

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
	factorialToReturn = 1;
  if (num <= factorialToReturn){
    return factorialToReturn
  }
  do {
    factorialToReturn *= num--; 
  }while (0 < num);
  return factorialToReturn;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
