/*
  Name: Ariane Apigo
  Date: 2019 October 11
  Section: AA / Chao Hsu Lin & Austin Jenchi

  This is .
*/
"use strict";
// (funtion() {

  window.addEventListener("load", init);

  function init() {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("next").addEventListener("click", next);
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
    let body = document.querySelector("body");
    body.classList.add("home");
  }

  function next() {
    let stages = document.querySelectorAll("article");
    for (let i=0; i<stages.length; i++) {
      if (stages[i].classList.contains("hidden")) {
        stages[i].classList.toggle("hidden");
      } else {
        stages[i].classList.add("hidden");
      }
    }
  }
  // code

// })();
