import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calcScripts.js';

$(document).ready(function() {
  $("#inputNumber").submit(function(event) {
    event.preventDefault();
    let inputtedAge = parseInt($("#numbers").val());
    let result = new Calculator(inputtedAge);
    result.alienAge();
    result.ageCheck();
    result.alienExpectancy();
    $(".answer0").text("On Mercury you are " + result.alienYears[0] +" years old");
    $(".answer1").text("On Venus you would be " + result.alienYears[1] +" years old");
    $(".answer2").text("But on Mars you would only be " + result.alienYears[2] +" years old, crazy huh?");
    $(".answer3").text("Then there is Jupiter where you would be " + result.alienYears[3] +" years old.  I don't even get that");
  });
});