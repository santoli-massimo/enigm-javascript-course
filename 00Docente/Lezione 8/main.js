
function nomeCompleto(nome, cognome, title='Mr.', callback){
    let risultato = title + ' ' +nome+ ' '+ cognome
    if(callback!==undefined){
        risultato = callback(risultato)
    }
    return risultato
}


function upperCase(text){ return text.toUpperCase() }
function lowerCase(text){ return text.toLowerCase() }
function toTitle(text){ return '<h1>' + text + '</h1>' }

console.log( nomeCompleto('Massimo', 'Santoli') )
console.log( nomeCompleto('Massimo', 'Santoli', undefined, upperCase) )
console.log( nomeCompleto('Massimo', 'Santoli', 'Signor', lowerCase) )
console.log( nomeCompleto('Massimo', 'Santoli', 'Signor', toTitle) )

