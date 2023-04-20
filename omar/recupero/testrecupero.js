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


fetch('https://reqres.in/api/users')
.then((response)=>{
if(response.status<205){ return response.json() }
throw Error(response.statusText)
})
.then((data)=>{
   let array = data.data
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log (array[index])
  
        let template = 
        ` <div class="card">
       
    
    <div class="avatar">

    <img src="https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg" alt="">
    </div>
    <div class="info">
    <span class="name">Rick Sanchez</span>
    <span class="email">rick.sanchez@gmail.com</span>
    <div class="footer">
    <a class="contact" href="mailto:rick.sanchez@gmail.com">Contact</a>
    </div>
    </div>
    </div>`}
console.log(data.data)
})
.catch((error)=>{
console.log('Errore ', error)
})
.finally(()=>{
console.log('END')
})






