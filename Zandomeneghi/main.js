fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        const users = data.data;
        const cardContainer = $('#card-container');


        users.forEach(user => {

            const card = $('<div>').addClass('card');


            const name = $('<h2>').text(`${user.first_name} ${user.last_name}`);
            card.append(name);

            const emailLink = $('<a>')
                .attr('href', `mailto:${user.email}`)
                .text(`Email: ${user.email}`);
            const email = $('<a>').append(emailLink);
            card.append(email);


            const id = $('<p>').text(`ID: ${user.id}`);
            card.append(id);


            const avatar = $('<img>').attr('src', user.avatar);
            card.append(avatar);
            var paragrafo = document.createElement('a')
            paragrafo.innerText = "Sono un nuovo paragrafo"
            paragrafo.style.color = 'black'



            cardContainer.append(card);
        });
    })
    .catch(error => console.error(error));


