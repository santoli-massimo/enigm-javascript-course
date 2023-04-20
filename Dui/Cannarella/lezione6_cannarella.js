//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
console.log("------------------------------")
console.log("Lezione N°6 Funzioni")
console.log("------------------------------")
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
console.log("Esempio di Funzione")
console.log("------------------------------")
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let persona={
    nome:"Alessandro",
    cognome:"Cannarella",
    eta:29,
    operazione: function(){
        console.log(this.nome + " " + this.cognome+" "+this.eta);
    }
}
persona.operazione();
function funzione(par1,par2,par3){
//faccio cose

}
function funzione2(par){
    par();
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
console.log("------------------------------")
console.log("Funzione calcolatrice")
console.log("------------------------------")
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let N1=19
let N2=3
function addizione(N1,N2){
    return N1+N2
}
function sottrazione(N1,N2){
    return N1-N2
}
function divisione(N1,N2){
    return N1/N2
}
function prodotto(N1,N2){
    return N1*N2
}
function calcolatrice(N1,N2,add,sott,div,prod,operazione){
    let risultato=0
    if(operazione==="addizione"){
        risultato=add(N1,N2)
    }else if(operazione==="sottrazione"){
        risultato=sott(N1,N2)
    }else if (operazione==="divisione"){
        risultato=div(N1,N2)
    }else if(operazione==="prodotto"){
        risultato=prod(N1,N2)
    }else{
        console.log("Errore")
    }
    return risultato
}
console.log(calcolatrice(N1,N2,addizione,sottrazione,divisione,prodotto,"prodotto"));