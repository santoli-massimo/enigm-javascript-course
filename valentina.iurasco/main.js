console.log("Lezione 2 JS")

/*let numero=0

while (numero<10){
    console.log ('iterazione')
    console.log(numero)
    numero = numero+1
}

let nomi = ['pippo','papperino','alladin','mate','minnie']
console.log(nomi)
console.log(nomi.length)



let i=0
for (let i=0; i<=nomi.length; i++){
    console.log(nomi[i])
}



while(i<nomi.length){
   console.log(nomi[i])
    i=i+1
    }
 

 
   for (let i=1; i<=nomi.length; i=i+2){
        console.log(nomi[i])
  }



    for (let i=0; i<=nomi.length; i++){
   if(i%2==0){
        console.log(nomi[i])
    }
}



for (let i=0; i<=nomi.length,i=+2;){
    console.log(nomi[i])
}



for(let element of nomi){                 //modaltà più semplice per numerare tutti gli elementi di un array
    console.log(element)
}



for(let i in nomi){
  if(i%2===0)
    {continue}
    console.log(nomi[i])




function stampaPippo(){
    let nome = "valentina"
    let cognome = "moriiur"
    console.log (nome+ ' ' +cognome)
}
stampaPippo()



function nomeCompleto (nome, cognome, title='Mr.'){
    let x= title+''+nome+' '+cognome
    return x
}
let risultato=nomeCompleto('valentina', 'moriiur')
console.log(risultato)

console.log(nomeCompleto('pippo','marco'))

console.log(nomeCompleto('mara','mirka','Mrs.'))



let persona = {
  nome:'alessandro',
  cognome:'moro',
  eta:30,
 operazione: function() {
   console.log(nome+ " "+ cognome)
},
};
       //faccio cose
persona.operazione ;{
function funzione2(par){
  par();
}
}


//calcolatrice con funzioni

let numeri={
  n1:1,
  n2:2,
  n3:3,
  n4:4,
  n5:5
}
console.log (numeri);


function addizione (n1,n4) {
  let somma = n1 + n4;
  return somma;
}
addizione(numeri.n1, numeri.n4);



function sottrazione (n5, n1){
let meno = n5 - n1;
return meno;
}
sottrazione (numeri.n5, numeri.n1);


function moltiplicazione (n2,n3) {
  let prodotto = n2 * n3;
  return prodotto;
}
moltiplicazione (numeri.n2, numeri.n3);


function divisione (n4,n2) {
  let div = n4 / n2;
  return div;
}
divisione (numeri.n4, numeri.n2);


function calcolatrice (add, sottr, mol ,div, n1, n2, operazione){
  let risultato;
if (operazione === "addizione"){
   risultato =add(n1, n2);
 } else if (operazione === "sottrazione"){
   risultato= sottr(n1, n2);
 } else if (operazione === "moltiplicazione"){
   risultato = mol ( n1, n2);
 } else if (operazione === "divisione"){
   risultato = div (n1,n2);
 } else {

 }
 return risultato;
}

calcolatrice (addizione, sottrazione, moltiplicazione, divisione, 5, 2, "moltiplicazione");

let nome = "Dudu"
let cognome = nome;

persona= {
  nome: "Dudu",
  cognome:"Moro",
}

let contenitore=document.getElementById('contenitore')



console.log({contenitore:contenitore})
//per stampare il dom di un sito



console.log(contenitore.style)
contenitore.style.backgroundColor='#4e4e4e'

console.log(contenitore.style.backgroundColor)
// cambia colore sfondo
let y = document.querySelector('#contenitore > div> :first-child')
//console.log(y)

let z = document.querySelector('#contenitore > div > *')
console.log(z)
//console.log(y)

setInterval(function(){
  let immagine = document.getElementById('immagine')
  let a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnj_Zpf_fB_iW7eeSIaC2mkRIR72qw4QNbQ&usqp=CAU'
  let b = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynm8Ji7TZambLCmfkzr2tr03FO0qxPm4eDzO8StGjnV7elbIrsLY8RjUH-j2ZXn7CzWw&usqp=CAU'
  let current = immagine.src 
  if(current === a) immagine.src = b
  
  else immagine.src = a
}, 1000)

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

  if (nome === undefined || nome === null) {

      nome = 'John'
  }

  if (cognome === undefined || cognome === null) {
      if (regione === undefined || regione === null) {
          cognome = 'Doe'
      }
  }
  else {
      bastardName = bastardNamesByRegion[regione]

      if (bastardName === undefined) {
          cognome = 'Doe'
      }
      else {
          cognome = bastardName
      }
  }
return nome+ ' ' +cognome
}
let x = fullName(null, "Wayne");
console.log(x)



 function logList(list, order){
  if (order)
  for (let i=0; i<list.lenght; i++){
      console.log (logList[i])
}
  }

let logList =([1, 2, 3]);
console.log (logList);


let paragrafo=document.createElement('p');
paragrafo.innerText= 'Ciao sono Engim';
paragrafo.style.color='orange';
paragrafo.style.fontSize='35px';

let container=document.getElementById('hero');
container.append(paragrafo);

let container1 = document.getElementById('hero');
if(container1){
    let par = document.createElement('p')
    par.innerText='Ciao Mondo!'
    par.style.color='blue'
    container1.append(par)
}

let container2 = document.getElementById('hero');
if(container1){
    let par = document.createElement('p')
    par.innerText='Ciao Mondo!!!!!'
    par.style.color='green'
    container1.prepend(par)
}
 

let head=document.getElementById('header');
head.append(par);


let button = document.getElementById('toggle')
button.addEventListener('click', function(){
  document.getElementById('content').style.display='block'
})

setTimeout (function(){
  console.log('timeout')
}, 1000);

console.log('pipo');


fetch('https://reqres.in/api/users')
.then(function(response){
  console.log (response)
  if(response.status===200){
    console.log ('succes')
  }
  else{
    console.log('error')
  }
})



fetch('https://reqres.in/api/users')
.then((response)=>{
// Qui Posso esaminare:
// - Stato della risposta
// - Metadati (ES: headers)
console.log(response)
return response.text()
})
.then((data)=>{
// In questo blocco ho accesso ai dati
console.log(data)
})



// questo è il modo per generare errori voluti
fetch('https://reqres.in/api/users')
.then((response)=>{
if(response.status<205){ return response.json() }
throw Error(response.statusText)
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
console.log('Errore ', error)
})*/




fetch('https://reqres.in/api/users')    //fetch è una funzione assincrona
.then(function(response){
  console.log('then 1:', response)

  if (response.status === 200){
    console.log('succes')
    return response.json();

  /*let result= response.json()                 //creando qui una variabile possiamo evitare la seconda parte di then
    console.log(result);*/
  }
  else{
    console.log('Error')
  }
})
.then(function(data){
  console.log ('Then 2:', data)
  for (i=0; i<=data.data.length; i++);
  let utente =document.createElement(utente);
  


})

.catch(function(error){
  console.log({error})
})

let utente={
  avatar: "https://reqres.in/img/faces/1-image.jpg",
email: "george.bluth@reqres.in",
first_name: "George",
id: 1,
last_name: "Bluth",

}
let utenti = document.getElementById('cards');
