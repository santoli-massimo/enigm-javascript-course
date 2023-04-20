console.log('Lezione 5');
//Elementi di divisione visiva
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
console.log('Lezione relativa ai cicli')
//Elementi di divisione visiva
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
let numero=0
while(numero<10){
    console.log('interazione')
    console.log(numero)
    numero++    
}
//Elementi di divisione visiva
console.log("----------------------------------------------")
//Esempio di ciclo While
console.log('Esempio di ciclo While 1')
//Elementi di divisione visiva
console.log("----------------------------------------------")
let nomi=['pippo','paperino','topolino','alladin','iron man']
let i=0
while(i<nomi.length){
    console.log(nomi[i])
    i++
}

console.log(nomi.length)

//Elementi di divisione visiva
console.log("----------------------------------------------")

//Esempio di ciclo While
console.log('Esempio di ciclo While 2')
//Elementi di divisione visiva
console.log("----------------------------------------------")
let min=0
let max =10
while(min<=max){
    console.log(min)
    min++
}

//Elementi di divisione visiva
console.log("----------------------------------------------")

//Esempio di ciclo For
console.log('Esempio di ciclo For')
//Elementi di divisione visiva
console.log("----------------------------------------------")

let Nomi=['pippo','paperino','topolino','alladin','iron man']
for(let i=0;i<Nomi.length;i++){
    console.log(Nomi[i])
}

console.log(Nomi.length)

//Elementi di divisione visiva
console.log("----------------------------------------------")
//Esempio ciclo For
console.log('Esempio di ciclo For 2')
//Elementi di divisione visiva
console.log("----------------------------------------------")

//con condizione if 
console.log("stampo a schermo gli indici dispari con condizione if")
for(let i=0;i<nomi.length;i++){
    if(i%2!=0) {
        console.log(nomi[i])
    }
}
//Elementi di divisione visiva
console.log("----------------------------------------------")

//tramite il ciclo
console.log("stampo a schermo gli indici dispari tramite il ciclo")
for(let i=1;i<nomi.length;i=i+2){
    console.log(nomi[i])   
}
//Elementi di divisione visiva
console.log("----------------------------------------------")
console.log("Esempio di Ciclo For...Of Loop")
//Elementi di divisione visiva
console.log("----------------------------------------------")
//lavora per tutti gli elementi dell'array
for(let element of nomi){
    console.log(element)
}
//Elementi di divisione visiva
console.log("----------------------------------------------")
console.log("Esempio di Ciclo For...In Loop")
//Elementi di divisione visiva
console.log("----------------------------------------------")
//Unico ciclo che può iterare anche strutture non ordinate
for(let i in nomi){
    console.log(nomi[i])
}
console.log("----------------------------------------------")
console.log("Esempio di ciclo che utilizza Continue")
//Elementi di divisione visiva
console.log("----------------------------------------------")
for(let index in nomi){
    console.log(index)
    if(index%2===0)continue
    console.log('End')
    console.log('Fin')
    console.log('Fine')
}
console.log("----------------------------------------------")
console.log("Esempio di ciclo che utilizza Break")
//Elementi di divisione visiva
console.log("----------------------------------------------")
for(let index in nomi){
    console.log(index)
    if(index==2) break
}
console.log("----------------------------------------------")
console.log("Esempio di Funzioni")
//Elementi di divisione visiva
console.log("----------------------------------------------")
function stamaPippo(){
    console.log('Pippo')
}
console.log('*******')
stamaPippo()
console.log('*******')
console.log('*******')
stamaPippo()
console.log('*******')
console.log('*******')
stamaPippo()
console.log('*******')
//Elementi di divisione visiva
console.log("----------------------------------------------")
console.log("Esempio di Funzioni")
//Elementi di divisione visiva
console.log("----------------------------------------------")
function nomeCompleto(nome,cognome,title='Mr.'){
    return title+" "+nome+" "+cognome
}
let risultato=nomeCompleto('Massimo','Santoli','Prof.')
console.log(risultato)
console.log(nomeCompleto('Pippo','Bianchi'))
console.log(nomeCompleto('Sara','La Pietra','Mrs.'))
