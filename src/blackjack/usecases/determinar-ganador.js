/**
 * Esta funcion determinar el ganador de la partida
 * @param {Array<BigInt>} puntosJugadores Array de los puntos de los jugadores 
 */

export const determinarGanador = (puntosJugadores) => {
    let decision='';
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        decision = (puntosComputadora === puntosMinimos) ? 'Nadie gana': (puntosMinimos > 21) 
                   ?'Computadora Gana' : (puntosComputadora > 21)
                   ? 'Jugador Gana' :'Computadora Gana';
        alert(decision);
    }, 100 );

}