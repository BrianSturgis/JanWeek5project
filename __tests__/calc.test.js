import Calculator from './../src/js/calcScripts.js';

describe('Calculator', () => {
  let earthAge;
  beforeEach(() => {
    earthAge = new Calculator(43,0,0);
    earthAge.alienAge();
    
});
test('Should create and instance of Calculator', () => {
  expect(earthAge.age).toEqual(43); 
  expect(earthAge.pastLife).toEqual(0);
  expect(earthAge.lifeLeft).toEqual(0);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[0]).toEqual(179);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears).toEqual();
});



});