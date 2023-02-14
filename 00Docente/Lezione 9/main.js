console.log('Lezione 9')

// ESERCIZIO
// Loggare in console tutti gli elementi di un array
// 1 elemento per riga
// se order è minore di 0 loggare gli elementi in ordine inverso
// rendere il valore predefinito di order uguale a 0

// ESEMPIO 1
// logList([1,2,3])
//  1
//  2
//  3

// ESEMPIO 2
// logList([1,2,3], -1)
//  3
//  2
//  1

// ESEMPIO 3
// logList() non logga niente

function logList(list, order){

    for(let i=0; i<list.length; i++){
        console.log(list[i])
    }
}


// logList([1,2,3])



// Creare un paragrafo con il testo 'Ciao Engim' ed inserirlo nel div con id uguale a 'hero'


let container = document.getElementById('hero')
if(container){
    let par = document.createElement('p')
    par.innerText = '3 Ciao Engim'
    par.style.color = 'blue'

    container.prepend(par)

    console.log({container: container})


    let head = document.getElementById('header')
    head.append(par)

    let parClone = par.cloneNode(true)
    head.append(parClone)

}


// AL click sul bottone con id 'toggle' mostrare il div con id 'content'
