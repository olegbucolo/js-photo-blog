`< li class="card" >

</li >`

const ulCards = document.querySelector(".ul-cards")

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(endpoint)
    .then(r => {
        console.log(r.data)
        r.data.forEach(card =>
            ulCards.innerHTML += `<li class="card" >
            <img class="img-card" src=${card.url} alt="Vacanze">  
            <p class="p-card fs-1">${card.title}</p>          
        </li>`
        )

    })