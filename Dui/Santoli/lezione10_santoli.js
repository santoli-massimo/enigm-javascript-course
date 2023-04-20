console.log('Lezione 10 ')
// http://reqres.in/

let utente={
    avatar:"https://reqres.in/img/faces/1-image.jpg",
    email:"george.bluth@reqres.in",
    first_name:"George",
    id:1,
    last_name:"Bluth"    
}

fetch('https://reqres.in/api/users')
    .then(function(response){
        console.log('then 1: ',response)
        if(response.ok){
        console.log('Richiesta andata a buon fine')
        return response.json()}
        else{
            console.log('ERROR 404')
        }
    })
    .then(function(data){
        console.log('then 2 : ',data)
        console.log(data.data)
        let elemento=data.data
        let cartella=document.createElement('div');
        cartella.style.width='100%';
        cartella.style.height='300px';
        cartella.style.border='solid 2px';
        cartella.style.display='flex';
        cartella.style.justifyContent='center';
        //let tabella=document.createElement('table')
        //tabella.style.border="solid 2px";
        for(i=0;i<elemento.length;i++){
            /*//Stampa a schermo i paragrafi con le email
            let paragrafo=document.createElement('p')
            document.body.append(paragrafo)
            paragrafo.innerText=elemento[i].email
            paragrafo.style.color = 'blue'*/
            /*//Questo crea una tabella dove soni tutti le castelle incolonnate 
            let riga=document.createElement('tr')
            let colonna=document.createElement('th')
            let immagine=document.createElement('img')
            colonna.innerText=elemento[i].first_name
            riga.append(colonna)
            tabella.append(riga)
            riga=document.createElement('tr')
            let colonna1=document.createElement('td')
            colonna1.innerText=elemento[i].email
            riga.append(colonna1)
            tabella.append(riga)
            let colonna2=document.createElement('td')
            immagine.src=elemento[i].avatar;
            colonna2.append(immagine)
            riga.append(colonna2)
            tabella.append(riga)*/
            let scheda=document.createElement('div')
            let nome=document.createElement('h1')
            let email=document.createElement('p')
            let foto=document.createElement('img')
            nome.innerText=elemento[i].first_name
            email.innerText=elemento[i].email
            foto.src=elemento[i].avatar;
            scheda.append(nome,email,foto)
            cartella.append(scheda)
        }
        //document.body.append(tabella)
        document.body.append(cartella)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('END')
    })
   
