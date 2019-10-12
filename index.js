/*
  Name: Ariane Apigo
  Date: 2019 October 11
  Section: AA / Chao Hsu Lin & Austin Jenchi

  This is .
*/
"use strict";
// (funtion() {

  window.addEventListener("load", init);

  // let startBtn = document.getElementById("start");

  function init() {
    document.getElementById("start").addEventListener("click", start);
    document.getElementsByClassName("next").addEventListener("click", next);
  }

  function start() {
    let portal = document.querySelectorAll("section");
    for (let i=0; i<portal.length; i++) {
      if (portal[i].classList.contains("hidden")) {
        portal[i].classList.toggle("hidden");
      } else {
        portal[i].classList.add("hidden");
      }
    }
  }

  function next() {
    let dialogue = document.querySelectorAll(".speech");
    
  }
  // code

// })();
