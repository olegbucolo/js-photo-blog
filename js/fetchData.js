`< li class="card" >

</li >`

const ulCards = document.querySelector(".ul-cards")

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(endpoint)
    .then(r => {
        const ulCards = document.querySelector('.ul-cards');

        r.data.forEach(card => {
            ulCards.innerHTML += `
                <div class=" li-card col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img class="img-card pb-3" src="${card.url}" alt="Vacanze">  
                        <p class="p-card card-title fs-1">${card.title}</p>          
                    </div>   
                </div>
            `;
        });
    });
