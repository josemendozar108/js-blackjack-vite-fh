/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} image de retorno 
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error ('La carta es un argumento obligatorio'); 

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; 
    imgCarta.classList.add('carta');
    imgCarta.style.width ='85px'; 

    return imgCarta; 

}