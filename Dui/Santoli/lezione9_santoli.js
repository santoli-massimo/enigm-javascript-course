console.log('Lezione 9')
/*loggare in console tutti gli elementi di un array , 1 elemento per riga
se order è minore di 0 loggare gli elementi in ordine diverso */
let A=[15,78,98,73,6,55,505,2]
function lista(list,order){
    if(order>0){
        for(let i=0;i<list.length;i++){
            console.log(list[i])
        }
    }
    else{
        for(let j=list.length;j>0;j--){
            console.log(list[j])
        }

    }   
}
lista(A,2)
lista(A,0)
/*-------------------------------------------------------------------------------------------------------------------------------*/
/*creare un paragrafo con il testo Ciao Engim ed inserirlo nel div con id uguale a hero */
let paragrafo=document.createElement('p')
paragrafo.innerText = "Sono un nuovo paragrafo"
paragrafo.style.color = 'blue'
let contenitore = document.getElementById('hero')
contenitore.append(paragrafo)
//evento con bottone
let bottone= document.getElementById('tuggle')
let contenuto= document.getElementById('content')
bottone.addEventListener('click', function(event){
    if(contenuto.style.display=='none'){
    contenuto.style.display='block'
    }
    else {
    contenuto.style.display='none'
    }
    })