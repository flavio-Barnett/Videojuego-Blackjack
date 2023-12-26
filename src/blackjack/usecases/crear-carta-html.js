/**
 * Esta funcion crea una carta en el Html
 * @param {String} carta carta del jugador o computadora : '8C' O 'KC'
 * @param {BigInt} turno turno del jugador 0 : turno del 1 er jugador , 1 : turno del 2do jugador
 * @param {HTMLCollection} divCartasJugadores Array de los div de los jugadores en el Html
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
