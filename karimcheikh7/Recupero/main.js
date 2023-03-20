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


let container = document.getElementsByClassName('container')[0];
let html = "";
//1.inserire fetch in fuction
function fetchCall(page = 1){
    fetch("https://reqres.in/api/users?page=" + page)
    .then(function (response) {
        console.log(response)

        if (response.status === 200) {
            console.log("success")
            return response.json()

        } else if(response.status === 404) {
            let card = document.createElement('div');
            let avatar = document.createElement('img');
            avatar.src = "https://www.shutterstock.com/image-vector/unknown-person-hidden-covered-masked-260nw-1552977773.jpg";
            card.append(avatar);
            let nome = document.createElement('h3');
            nome.innerText = "user not found";
            card.append(nome);
            container.append(card);
        }
    })
    .then(function (data) {
        console.log(data)
        let array = data.data
        for (let i = 0; i < array.length; i++) {

            html +=
            `<div class="card">
            <div class="avatar">
              <img src="${data.data[i].avatar}" alt="">
            </div>
            <div class="info">
              <span class="name">${data.data[i].first_name}</span>
              <span class="email">${data.data[i].email}</span>
              <div class="footer">
                <a class="contact" href="mailto:${data.data[i].email}">Contact</a>
              </div>
            </div>
          </div>`
        }
        container.innerHTML = html;
    })
    .catch(function (error) {
        console.log("error", error)
    })
}
fetchCall()

let page = 1

let clicco1 = document.getElementById('bottone1');
clicco1.addEventListener('click', precPage)

let clicco2 = document.getElementById('bottone2');
clicco2.addEventListener('click', nextPage)

function precPage() {
    container.innerHTML = "";
    fetchCall(--page)
}

function nextPage() {
    container.innerHTML = "";
    fetchCall(++page)
}