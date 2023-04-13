"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "EMO1",
      img: "EMO1.png",
    },
    {
      name: "EMO2",
      img: "EMO2.png",
    },
    {
      name: "EMO3",
      img: "EMO3.png",
    },
    {
      name: "EMO4",
      img: "EMO4.png",
    },
    {
      name: "EMO5",
      img: "EMO5.png",
    },
    {
      name: "EMO6",
      img: "EMO6.png",
    },
    {
      name: "EMO7",
      img: "EMO7.png",
    },
    {
      name: "EMO8",
      img: "EMO8.png",
    },
    {
      name: "EMO1",
      img: "EMO1.png",
    },
    {
      name: "EMO2",
      img: "EMO2.png",
    },
    {
      name: "EMO3",
      img: "EMO3.png",
    },
    {
      name: "EMO4",
      img: "EMO4.png",
    },
    {
      name: "EMO5",
      img: "EMO5.png",
    },
    {
      name: "EMO6",
      img: "EMO6.png",
    },
    {
      name: "EMO7",
      img: "EMO7.png",
    },
    {
      name: "EMO8",
      img: "EMO8.png",
    },
  ];
  //Mezcla aleatoria de cartas en cada ejecución
  cardArray.sort(() => 0.5 - Math.random());

  //Utilizamos DOM para enlazar con el HTML
  const game = document.querySelector(".game");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  //el bucle recorre el array de imágenes, y se crea una carta en cada iteración.
  //se añade evento click a cada carta y se llama a la función flipCard
  //se agrega la imagen como hijo de game

  let trys = 0;

  //check for matches
  //se comprueba si las cartas son iguales
  //después de la comprobación, se incrementa el contador de trys
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    trys++;

    //condicional,si clicas en la misma imagen, te avisa
    //si son iguales, te avisa has hecho un match

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/gris.png");
      cards[optionTwoId].setAttribute("src", "images/gris.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");

      // actualiza las cartas matcheadas
      cardsWon.push(cardsChosen[0]);

      // El score se incrementa en 1 punto
      resultDisplay.textContent = cardsWon.length;

      //si no son iguales, avisa que lo intentes de nuevo
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
    } else {
      cards[optionOneId].setAttribute("src", "images/gris.png");
      cards[optionTwoId].setAttribute("src", "images/gris.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    document.querySelector("h4 #trys").textContent = trys;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You won!";
    }
  }
  //flip your card, giran las cartas al clicar en ellas
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.classList.add("flip"); // add CSS class
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  //Creamos el tablero del juego
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/gris.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      card.addEventListener("transitionend", function () {
        this.classList.remove("flip"); // remove CSS class when transition completes
      });
      game.appendChild(card);
    }
  }
  createBoard();
});
