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


const container = document.getElementById('container');
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        const users = data.data;

        //per ogni utente crea una card e aggiungila al contenitore
        users.forEach(user=> {
            const card = document.createElement('div');
            card.classList.add('card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = `${user.first_name} ${user.last_name} avatar`;
            card.appendChild(avatar);

            const info = document.createElement('h1');
            name.textContent = `${user.first_name} ${user.last_name}`;
            card.appendChild(name);

            const email = document.createElement('p');
            email.textContent = user.email;
            card.appendChild(email);

            const contact = document.createElement('a')
            contact.href= user.email;
            contact.textContent=`contact`;
            card.appendChild(contact);

            container.appendChild(card);

        });
})
.catch (error=> {
            console.log(error);
        });