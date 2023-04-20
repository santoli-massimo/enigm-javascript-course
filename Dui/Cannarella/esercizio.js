
//Esercizi su GitHub


//***********************************************************************************************************//
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

// 1. Esercizio scrivi un programma che dica se un numero è pario o dispari
let numero=20;
if (numero%2===0){
    console.log("il numero è pari ")
}
else {
    console.log("il numero è dispari")
}

// 2. Scrivi un programma che controlli se un numero è divisibile per 3.
let numero1=17;
if(numero1%3===0){
    console.log("il numero è divisibile per 3")
}
else{
    console.log("il numero non è divisibile per 3")
}

//3. Scrivi un programma che controlli se un numero è divisibile per 3 e per 5.
let numero2 = 70;
if(numero2%3===0 && numero2%5===0){
        console.log("il numero è divisibile sia per 3 che per 5") 
}
else{
    console.log("il numero non è divisibile ne per 3 ne per 5")
}

//4. Scrivi un programma che controlli l'età di un utente e stampi un messaggio appropriato.
// 5. Scrivi un programma che controlli se un utente è maggiorenne o minorenne
let eta=22
if(eta>=18){
    console.log("sei maggiorenne")
}
else if(eta<18 && eta>=17){
    console.log("sei ancora minorenne ma sei quasi maggiorenne")
}
else{
    console.log("sei minorenne")
}
// 6. Scrivi un programma che trova il massimo tra 2 numeri.
// 7. Scrivi un programma che trova il massimo tra 3 numeri.
let n1=15
let n2=10
let n3=21
if(n1>n2 && n1>n3){
    console.log("il maggiore è n1")
}else if(n2>n3){
    console.log("il maggiore è n2")
}else{
    console.log("il maggiore è n3")
}
// 8. Scrivi un programma che esegua operazioni matematiche tra 2 numeri in base all'operatore scelto dall'utente.
let operatore="/"
let num1=10
let num2=2
if(operatore==="*"){
    console.log(num1*num2)
}else if(operatore==="/"){
    console.log(num1/num2)
}else if(operatore==="+"){
    console.log(num1+num2)
}else if(operatore==="-"){
    console.log(num1-num2)
}else{
    console.log("non hai scelto un operazione esistente")
}


//***********************************************************************************************************//
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//