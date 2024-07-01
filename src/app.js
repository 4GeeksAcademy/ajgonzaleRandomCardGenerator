/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let suit = Math.floor(Math.random() * 4);
  let number = Math.floor(Math.random() * 12);
  let color = "black";
  if (suit < 2) color = "red";

  let suitsDivList = document.querySelectorAll(".suit");

  for (let i = 0; i < suitsDivList.length; i++) {
    suitsDivList[i].innerHTML = suits[suit];
    suitsDivList[i].style.color = color;
  }

  let numberDiv = document.querySelector(".number");
  numberDiv.innerHTML = numbers[number];
  numberDiv.style.color = color;
};
