console.log("ENGIM FINAL TEST 2023 (recupero)");

// OBBIETTIVO DEL TEST:
// Creare un layout simile a quelo indicato nell immagine layout.png utilizzando i dati forniti dall api 'https://reqres.in/api/users'

// PARTE A1 (obbligatoria) (50 punti)
// Effetture una richiesta http all api 'https://reqres.in/api/users'
// stampare i dati degli utenti ricevuti dal server in console

// PARTE A2 (obbligatoria) (20 punti)
// Utilizzando i dati ricevuti dal server nel punto precedente:
// Per ogni utente ricevuto dal server, creare una card contenente un elemento per le seguenti proprietà dell'utente:
// first_name, last_name, email, avatar

// PARTE B (Facoltativa) (10 punti)
// In ogni card creare un elemento cliccabile con un mailto che apra il mailer di default con l'email dell'utente preimpostata
// ES: <a href="mailto:useremail@gmail.com">Contact</a>

// PARTE C (Facoltativa) (20 punti)
// Ripodurre il layout presente nell immagine layout.png presente in questa directory
// Il bottone presente in ogni card deve essere cliccabile e eseguire il mailto con l email dell utente

// Parte D (Facoltativa) (20 punti)
// Creare una paginazione che permetta di visualizzare i 6 utenti successivi e precedenti utilizzando 2 bottoni

// Parte E (Facoltativa) (20 punti)
// Al click su una card, la card diventa selezionata e cambia sitle. Se si clicca su una card selezionata, la card torna allo stato iniziale.
// al massimo ci puo essere una sola card selezionata per volta.
// puoi utilizzare la classe .selected per gestire lo stato selezionato

// NOTE:
// IL massimo punteggio raggiungibile è: 100 punti.
// Le parti A1 e A2 sono obbligatorie, le altre sono facoltative e possono essere svolte indipendentemente tra loro.
// Se non riesci a completare una parte facoltativa, puoi comunque provare a completare le altre.
// Puoi ottenere punti anche se non completi al 100% una parte per cui consiglio di provare comunque.


<<<<<<< HEAD
=======
//A1 richiesta e stampa dei dati
let container = document.querySelector('.container')
numeroPagina = 1
let page = loadPage(numeroPagina)
function loadPage(num){
    fetch('https://reqres.in/api/users?page=' + num)
    .then((response)=>{
        if(response.status < 205)
            return response.json()
        throw Error
    })
    .then((data)=>{
        console.log(data);
        for(let i = 0; i< data.data.length; i++){
            let card = scheda(data.data[i])
            container.append(card)
        }
    })
    .catch((error)=>{
        console.log('Error ' + error);
    })
}


//A2 card ed elaborazione dati
function scheda(data){

//generazione della card, suddvisa in due sezioni principali: l'immagine e i dati 
//dati contiene nome (che al suo interno ha nome e cognome), la e-mail e il link contatta per il mailto, per semplicità viene unito tutto in un fragment
let card  = document.createElement('div');
let img = document.createElement('img');
let dati = document.createElement('div');
let nome = document.createElement('p');
let mail = document.createElement('p');
let fragment = document.createDocumentFragment()
let contact = document.createElement("a");

//append della struttura html
card.append(img)
card.append(dati)
fragment.append(nome, mail, contact)
dati.append(fragment)


//assegnazione classi
dati.classList = 'info'
nome.classList = 'name'
mail.classList = 'email'
card.classList = 'card'
img.classList = 'avatar'
contact.classList = 'contact'

//importazione dati 
img.src =  data.avatar
nome.textContent =  data.first_name + ' ' + data.last_name
mail.textContent =  data.email
contact.textContent = 'Contatta'

//mailto (Parte B)
contact.href = 'mailto:' + mail.textContent


//PARTE E: funzione per selezionare e deselezionare la card
card.onclick = function(){
    if(card.classList.contains('selected')){
        card.classList.remove("selected");
    }else{
        card.classList.add('selected');
    }
}    

    return card
}

let div = document.createElement('div')
let next = document.createElement('button')
let back = document.createElement('button')
div.classList = 'flex'

next.textContent = 'Next'
back.textContent = 'Back'
document.body.append(div)

div.append(back)
div.append(next)

//funzione per la pagina seguente
next.onclick = function (){
    container.innerHTML=''
    if(numeroPagina == 2){  
    }else{
    numeroPagina++
    }
    loadPage(numeroPagina)
}

//funzione per la pagina precedente
back.onclick = function (){ 
    container.innerHTML=''
    if(numeroPagina == 1){      
    }else{
    numeroPagina--
    }
    loadPage(numeroPagina)
}

    
>>>>>>> 11023f2618b04e0c1b46102ec7c9bb9d7b75508b
