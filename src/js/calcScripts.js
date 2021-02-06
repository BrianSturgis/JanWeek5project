/* eslint-disable */
export default class Calculator {
  constructor (userInput) {
    this.age = userInput;
    this.pastLife = 0;
    this.lifeLeft = 0;
    this.alienYears = [];
    this.life = [];
  }
}

let test = 0;
let earthAge = new Calculator(0,0,0);
console.log(earthAge);
console.log(test);