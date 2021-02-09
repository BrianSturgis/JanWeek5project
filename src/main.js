/*eslint-disable*/
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calcScripts.js';

$(document).ready(function(){
  $("#inputNumber").submit(function(event){
    event.preventDefault();
    let inputtedAge = parseInt($("#numbers").val());
    console.log(inputtedAge);
    let result = new Calculator(inputtedAge);
    result.alienAge();
    result.ageCheck();
    result.alienExpectancy();
    console.log(result);
    
    $(".answer0").text("you would be " + result.alienYears[0] +" years old on Mercury");
    $(".answer1").text("you would be " + result.alienYears[1] +" years old on Venus");
    $(".answer2").text("you would be " + result.alienYears[2] +" years old on Mars");
    $(".answer3").text("you would be " + result.alienYears[3] +" years old on Jupiter");
    
  });
});
