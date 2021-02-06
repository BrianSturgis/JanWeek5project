import Calculator from './../src/js/calcScripts.js';

describe('Calculator', () => {
  let earthAge;
  beforeEach(() => {
    earthAge = new Calculator(43,0,30);
    earthAge.alienAge();
    earthAge.ageCheck();
    earthAge.alienExpectancy();
    
});
test('Should create and instance of Calculator', () => {
  expect(earthAge.age).toEqual(43); 
  expect(earthAge.pastLife).toEqual(0);
  expect(earthAge.lifeLeft).toEqual(30);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[0]).toEqual(179);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[1]).toEqual(69);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[2]).toEqual(23);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[2]).toEqual(23);
});
test('ageCheck should calculate the difference of 70 and 73 for determing where total will go to',() => {
  expect(earthAge.pastLife).toEqual(0);  
  expect(earthAge.lifeLeft).toEqual(30);
});
test('should calculate 33 years into Mercury years',() => {
  expect(earthAge.life[0]).toEqual(125);
});
});

