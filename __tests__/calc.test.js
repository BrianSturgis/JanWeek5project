import Calculator from './../src/js/calcScripts.js';

describe('Calculator', () => {
  let earthAge;
  beforeEach(() => {
    earthAge = new Calculator(70,0,0);
    
});
test('Should create and instance of Calculator', () => {
  expect(earthAge.age).toEqual(70); 
  expect(earthAge.pastLife).toEqual(0);
  expect(earthAge.lifeLeft).toEqual(0);
});

});