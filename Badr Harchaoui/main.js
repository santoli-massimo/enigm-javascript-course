
fetch('https://reqres.in/api/users')
.then(function(response){
    if(response.status === 200) {console.log("success")
    return response.json()
} else {
    
 console.log("Error")}

})
.then((data)=>{
console.log(data)
let cont = document.getElementById('container')
cont.style.display = 'flex'

for(i=0 ; i<data.data.length ; i++){

let div = document.createElement('div')

email = document.createElement('p')
email.innerText = data.data[i].email
div.append(email)

id = document.createElement('p')
id.innerText = data.data[i].id
div.append(id)

first_name = document.createElement('h1')
first_name.innerText = data.data[i].first_name
div.append(first_name) 

last_name = document.createElement('h2')
last_name.innerText = data.data[i].last_name
div.append(last_name)

avatar = document.createElement('img') 
avatar.style= "width:260px"
avatar.src = data.data[i].avatar
div.append(avatar)

cont.append(div)

}


})
.catch((error)=>{
console.log('Errore ', error)
})