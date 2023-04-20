let tasto=document.getElementById("invia")
function elaboratesto(event){
let nome=document.getElementById('nome')
let cognome=document.getElementById('cognome')
let email=document.getElementById('email')
let testo= nome.value + ' ' + cognome.value + ' ' + 'la tua email è :' +'  ' + email.value +' '+ 'il messaggio è andato a buon fine '
let messaggio=document.getElementById("messaggio")
messaggio.value=testo
}
tasto.addEventListener('click', function(event){
    console.log(event)
    elaboratesto();
})