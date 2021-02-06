import Calculator from './../src/js/calc.js';

describe('Calculator', () => {
  let earthAge;
  beforeEach(() => {
    earthAge = new Calculator(0,0,0);
    earthAge.alienAge();
    earthAge.ageCheck();
    earthAge.alienExpectancy();
});