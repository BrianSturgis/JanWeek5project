/* eslint-disable */
export default class Calculator {
  constructor (userInput) {
    this.age = userInput;
    this.pastLife = 0;
    this.lifeLeft = 0;
    this.alienYears = [];
    this.life = [];
  }
  alienAge(){
    let array = [0.24, 0.62, 1.88, 11.86];
    for(let i = 0; i < array.length; i++) {
      this.alienYears.push(Math.round(this.age  / array[i]));
    }
  }
}

let test = 0;
let earthAge = new Calculator(43,0,0);
console.log(earthAge);
console.log(test);
earthAge.alienAge();