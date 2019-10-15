/*
*  Name: Ariane Apigo
*  Date: 2019 October 11
*  Section: AA / Chao Hsu Lin & Austin Jenchi
*
*  This is .
*/
"use strict";
(funtion() {

  window.addEventListener("load", init);

  function init() {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("fire").addEventListener("click", choose);
    document.getElementById("grass").addEventListener("click", choose);
    document.getElementById("water").addEventListener("click", choose);
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

  function choose() {
    let type = this.id;
    let ballDiv = document.getElementById("pokeballs");
    let chosenPoke = document.createElement("img");
    if (type == "fire") {
      chosenPoke.src = fire();
      ballDiv.insertBefore(chosenPoke, ballDiv.firstChild);
      ballDiv.removeChild(ballDiv.children[1]);
      document.getElementById("grass").removeEventListener("click", choose);
      document.getElementById("water").removeEventListener("click", choose);
    } else if (type == "grass") {
      chosenPoke.src = grass();
      ballDiv.insertBefore(chosenPoke, ballDiv.children[1]);
      ballDiv.removeChild(ballDiv.children[2]);
      document.getElementById("fire").removeEventListener("click", choose);
      document.getElementById("water").removeEventListener("click", choose);
    } else {
      chosenPoke.src = water();
      ballDiv.appendChild(chosenPoke);
      ballDiv.removeChild(ballDiv.children[2]);
      document.getElementById("fire").removeEventListener("click", choose);
      document.getElementById("grass").removeEventListener("click", choose);
    }
    chosenPoke.alt = "Your starter Pokémon!";
  }

  function fire() {
    let path = "img/fire/";
    let chosenGen = Math.floor(Math.random() * 7);
    let choices = ["Charmander", "Chimchar", "Cyndaquil", "Fennekin",
        "Litten", "Tepig", "Torchic"];
    return path + choices[chosenGen] + ".png";
  }

  function grass() {
    let path = "img/grass/";
    let chosenGen = Math.floor(Math.random() * 7);
    let choices = ["Bulbasaur", "Chespin", "Chikorita", "Rowlet",
        "Snivy", "Treecko", "Turtwig"];
    return path + choices[chosenGen] + ".png";
  }

  function water() {
    let path = "img/water/";
    let chosenGen = Math.floor(Math.random() * 7);
    let choices = ["Froakie", "Mudkip", "Oshawott", "Piplup",
        "Popplio", "Squirtle", "Totodile"];
    return path + choices[chosenGen] + ".png";
  }
  
  // code

})();
