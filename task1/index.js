import * as math from "./math-module.js";

console.log(math.add(12, 3));    
console.log(math.subtract(12, 3));    
console.log(math.multiply(12, 3));
try {
  console.log(math.divide(12, 3));   
} catch (error) {
  console.error(error.message);    
}