import { pedirCarta, determinarGanador ,acumularPuntos,crearCarta} from "./";
/**
 *Esta funcion sirve para el turno de la computadora
 * @param {BigInt} puntosMinimos Puntos que hizo el jugador
 * @param {Array<String>} deck baraja del deck
 * @param {Array<BigInt>} puntosJugadores Array de los puntos de los jugadores y computadora
 * @param {HTMLCollection}puntosHTML Array de <small> del Html
 * @param {HTMLCollection} divCartasJugadores Array de <div> en Html
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores , puntosHTML,divCartasJugadores) => {
  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores , puntosHTML);
    crearCarta(carta, puntosJugadores.length - 1 ,divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
