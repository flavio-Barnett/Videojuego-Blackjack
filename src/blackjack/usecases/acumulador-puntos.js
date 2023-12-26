
import { valorCarta } from "./";
/**
 * Esta funcion acumula los puntos de los jugadores o computadora
 * @param {String} carta Ejemplo : '6A' o 'JA' 
 * @param {BigInt} turno jugador turno : 0 , computadora turno : 1 
 * @param {Array<BigInt>} puntosJugadores Array de los puntos de los jugdores Ejemplo : [5,6]
 * @param {HTMLCollection} puntosHTML Coleccion de <small> en html
 * @returns retorna el puntaje del jugador o computadora
 */

export const acumularPuntos = (carta, turno ,puntosJugadores,puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}