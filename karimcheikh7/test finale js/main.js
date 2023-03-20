// OBBIETTIVO DEL TEST:
// Creare un layout simile a quelo indicato nell immagine layout.png utilizzando i dati forniti dall api 'https://reqres.in/api/users'

// PARTE A1 (obbligatoria) (50 punti)
// Effetture una richiesta http all api 'https://reqres.in/api/users'
// stampare i dati degli utenti ricevuti dal server in console

// PARTE A2 (obbligatoria) (20 punti)
// Utilizzando i dati ricevuti dal server nel punto precedente:
// Per ogni utente ricevuto dal server, creare una card contenente un elemento per ogni proprietà dell'utente:
// first_name, last_name, email, id, avatar

// PARTE B (Facoltativa) (10 punti)
// In ogni card creare un elemento cliccabile con un mailto che apra il mailer di default con l'email dell'utente preimpostata
// ES: <a href="mailto:useremail@gmail.com">Contact</a>

// PARTE C (Facoltativa) (20 punti)
// Ripodurre il layout presente nell immagine layout.png presente in questa directory
// La scritta contact presente in ogni card deve essere cliccabile e eseguire il mailto con l email dell utente

// Parte D (Facoltativa) (20 punti)
// Creare una paginazione che permetta di visualizzare gli utenti successivi/precedenti utilizzando 2 bottoni

// NOTE:
// IL massimo punteggio raggiungibile è: 100 punti.
// Le parti A1 e A2 sono obbligatorie, le altre sono facoltative e possono essere svolte indipendentemente tra loro.
// Se non riesci a completare una parte facoltativa, puoi comunque provare a completare le altre.
// Puoi ottenere punti anche se non completi al 100% una parte per cui consiglio di provare comunque.




let container = document.getElementById('primi3utenti');
let container2 = document.getElementById('secondi3utenti');
fetch("https://reqres.in/api/users")
.then(function(response){
    console.log('then 1: ' ,response)
    
if(response.status === 200){
        console.log("success")
        return response.json()
    }else if (response.status === 404){
        console.log("error")

    }
})
.then(function(data){
    console.log('then 2 : ',data)
    let array = data.data
    for(let i=0; i < 3; i++){
        let card = document.createElement('div');
        card.style.margin = "0 16px 32px";
        let id = document.createElement('h3');
        card.append(id);
        let nome = document.createElement('h3');
        nome.innerText = array[i].id + " " + array[i].first_name;
        card.append(nome);
        let email = document.createElement('p');
        email.innerText = array[i].email;
        card.append(email);
        let avatar = document.createElement('img');
        avatar.src = array[i].avatar;
        card.append(avatar);
        let contact = document.createElement('a');
        contact.href = "mailto:" + array[i].email;
        contact.innerText = "Contact";
        card.append(contact);
        container.append(card);
        

    }
    for(let i=3; i < 6; i++){
        let card = document.createElement('div');
        card.style.margin = "0 16px 32px";
        let id = document.createElement('h3');
        card.append(id);
        let nome = document.createElement('h3');
        nome.innerText = array[i].id + " " + array[i].first_name;
        card.append(nome);
        let email = document.createElement('p');
        email.innerText = array[i].email;
        card.append(email);
        let avatar = document.createElement('img');
        avatar.src = array[i].avatar;
        card.append(avatar);
        let contact = document.createElement('a');
        contact.href = "mailto:" + array[i].email;
        contact.innerText = "Contact";
        card.append(contact);
        container2.append(card);
    }
})
.catch(function(error){
    console.log("error",error)
})