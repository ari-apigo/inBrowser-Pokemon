/*
 *  Name: Ariane Apigo
 *  Date: 2019 October 11
 *  Section: AA / Chao Hsu Lin & Austin Jenchi
 *
 *  This is the index.js file for my PokéPortal site. It enables the game / simulator to guide
 *  the user through the experience of receiving their first Pokémon (a starter Pokémon).
 *  All Pokémon photos were found at https://bulbapedia.bulbagarden.net/wiki/ and are licensed
 *  under fair use.
 */
"use strict";
(function() {

  window.addEventListener("load", init);
  const GENERATIONS = 7;

  /**
   * Sets up event-listeners on buttons and images.
   */
  function init() {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("fire").addEventListener("click", choose);
    document.getElementById("grass").addEventListener("click", choose);
    document.getElementById("water").addEventListener("click", choose);
  }

  /**
   * Changes view to first "stage;" starts the game / simulator.
   */
  function start() {
    let portal = document.querySelectorAll("section");
    for (let i = 0; i < portal.length; i++) {
      if (portal[i].classList.contains("hidden")) {
        portal[i].classList.toggle("hidden");
      } else {
        portal[i].classList.add("hidden");
      }
    }
    let body = document.querySelector("body");
    body.classList.add("home");
  }

  /**
   * Changes the view to the next "stage;" continues the game / simulator.
   * Note that this works because there are only two stages to the game / simulator.
   */
  function next() {
    let stages = document.querySelectorAll("article");
    for (let i = 0; i < stages.length; i++) {
      if (stages[i].classList.contains("hidden")) {
        stages[i].classList.toggle("hidden");
      } else {
        stages[i].classList.add("hidden");
      }
    }
  }

  /**
   * Chooses the user's starter Pokémon based on their type choice.
   * Also shows the final dialogue of the game / simulator.
   */
  function choose() {
    let type = this.id;
    let ballDiv = document.getElementById("pokeballs");
    let chosenPoke = document.createElement("img");
    if (type === "fire") {
      chosenPoke.src = fire();
      ballDiv.insertBefore(chosenPoke, ballDiv.firstChild);
      ballDiv.removeChild(ballDiv.children[1]);
      document.getElementById("grass").removeEventListener("click", choose);
      document.getElementById("water").removeEventListener("click", choose);
    } else if (type === "grass") {
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
    chosenPoke.alt = "Your starter Pokémon.";
    endDialogue();
  }

  /**
   * Creates path to images of fire-type starter Pokémon and chooses one from a random generation.
   * @returns {string} image path to random fire-type starter Pokémon
   */
  function fire() {
    let path = "img/Fire/";
    let chosenGen = Math.floor(Math.random() * GENERATIONS);
    let choices = ["Charmander", "Chimchar", "Cyndaquil", "Fennekin",
        "Litten", "Tepig", "Torchic"];
    return path + choices[chosenGen] + ".png";
  }

  /**
   * Creates path to images of grass-type starter Pokémon and chooses one from a random generation.
   * @returns {string} image path to random grass-type starter Pokémon
   */
  function grass() {
    let path = "img/Grass/";
    let chosenGen = Math.floor(Math.random() * GENERATIONS);
    let choices = ["Bulbasaur", "Chespin", "Chikorita", "Rowlet",
        "Snivy", "Treecko", "Turtwig"];
    return path + choices[chosenGen] + ".png";
  }

  /**
   * Creates path to images of water-type starter Pokémon and chooses one from a random generation.
   * @returns {string} image path to random water-type starter Pokémon
   */
  function water() {
    let path = "img/Water/";
    let chosenGen = Math.floor(Math.random() * GENERATIONS);
    let choices = ["Froakie", "Mudkip", "Oshawott", "Piplup",
        "Popplio", "Squirtle", "Totodile"];
    return path + choices[chosenGen] + ".png";
  }

  /**
   * Shows the final dialogue of the game / simulator.
   */
  function endDialogue() {
    let speechDialogues = document.querySelectorAll(".speech");
    for (let i = 0; i < speechDialogues.length; i++) {
      if (!speechDialogues[i].classList.contains("hidden")) {
        speechDialogues[i].classList.add("hidden");
      }
    }
    document.getElementById("endDialogue").classList.remove("hidden");
  }

})();
