/*********** ESERCIZIO LEZIONE 5 ***********/

// DESCRIZIONE:
// Nella serie "Il trono di spade" ai figli illegittimi viene assengnato un congnome standard, specifico della regione in cui sono nati.
// Es: nel NORD tutti i figli illegittimi hanno cognome 'Snow'.
// Modificare in questo file la funzione fullName (analoga alla funzione nomeCompleto vista a lezione) di modo che
// se alla funzione non viene passato il cognome venga utilizzato quello in uso nella regione corrispondente.
// Nella funzione Trovate un oggetto (bastardNamesByRegion) che ha come chiave il nome della regione
// e come valore il cognome assegnato di figli illegittimi nati in quella regione.

// DETTAGLI:
// nel caso in cui cognome non sia definito o sia null:
//   Controlla se nell'oggetto bastardNamesByRegion esiste una chiave uguale al valore di regione
//   se esiste usa il valore corripondente come cognome,
//   se non esite usa 'Doe' come congnome.
// nel caso in cui nome non sia definito o sia null usare 'John' come nome.

// ESEMPI:
// fullName(null, null, 'North') dovrebbe restituire 'John Snow'
// fullName() dovrebbe restituire 'John Doe'
// fullName(null, 'Wayne') dovrebbe restituire 'John Wayne'
// fullName('Bruce', 'Wayne') dovrebbe restituire 'Bruce Wayne'

function fullName(nome, cognome, regione) {
    let bastardNamesByRegion = {
        'Reach': 'Flowers',
        'Westerlands': 'Hill',
        'Iron Islands': 'Pyke',
        'Riverlands': 'Rivers',
        'Dorne': 'Sand',
        'North': 'Snow',
        'Arryn': 'Stone',
        'Stormlands': 'Storm',
        'Crownlands': 'Waters',
        'undefined': 'Doe'
    }
    if (cognome == undefined) {
        if (bastardNamesByRegion[regione])
            cognome = bastardNamesByRegion[regione]
        else
            cognome = 'Doe'
    }
    if (nome == undefined) {
        nome = 'Jhon'
    }
    return nome + ' ' + cognome
}
console.log(fullName(null, null, 'North'))
console.log(fullName())
console.log(fullName(null, 'Wayne'))
console.log(fullName('Bruce', 'Wayne'))
console.log(fullName('Arya', null, 'Crownlands'))
console.log(fullName('Gino', 'Pippo', 'Crownlands'))
//--------------------------------------------------------lezione 7----------------------------------------------------------------
//creare un tag img che ogni secondo cambia l'immagine
//carosello tramite array
let album = ['https://i0.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?fit=1024%2C682&ssl=1',
    'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197__480.jpg'
]
function carosello(album, id) {
    let index = 1
    setInterval(function () {
        document.getElementById('vetrina')
        /*
        let a = 'https://i0.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?fit=1024%2C682&ssl=1'
        let b = 'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197__480.jpg'
        let current = vetrina.src
        if (current === a) vetrina.src = b
        else vetrina.src = a*/
        if (index >= album.length) index = 0
        vetrina.src = album[index]
        index++

    }, 1000)
}
carosello(album, 'vetrina')