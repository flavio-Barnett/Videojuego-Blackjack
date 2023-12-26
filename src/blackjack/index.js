import _ from "underscore";
import { crearDeck, pedirCarta, turnoComputadora, crearCarta,acumularPuntos} from "./usecases";

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  const habilitarBotones = () => {
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  const deshabilitarBotones = () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
  };

  // Esta función inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

    habilitarBotones();
  };


  // Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21 || puntosJugador === 21) {
      deshabilitarBotones();
      turnoComputadora(puntosJugador, deck, puntosJugadores,puntosHTML,divCartasJugadores);
    }
  });

  btnDetener.addEventListener("click", () => {
    deshabilitarBotones();
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores,puntosHTML,divCartasJugadores);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
