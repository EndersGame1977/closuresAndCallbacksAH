const calculator = require('./calculator');

calculator.add(5);
calculator.add(7);
console.log(calculator.getTotal());
calculator.total = 16;
console.log(calculator.getTotal());