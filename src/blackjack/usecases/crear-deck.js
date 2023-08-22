import _ from 'underscore'; 


/**
 * Esta funcion crea un nuevo deck 
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array}  Regresa un nuevo deck de cartas 
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0  ) 
    throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0  ) 
    throw new Error('tiposEspeciales es obligatorio como un arreglo de string');


    let deck = []; 

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}