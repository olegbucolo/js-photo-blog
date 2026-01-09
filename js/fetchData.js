const ulCards = document.querySelector(".ul-cards")
const imgOverlay = document.querySelector(".wrapper-abs-img.d-none");

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(endpoint)
    .then(r => {
        const ulCards = document.querySelector('.ul-cards');

        r.data.forEach(card => {
            ulCards.innerHTML += `
                <div class="li-card col-12 col-md-6 col-lg-4" cardId="${card.id}">
                    <div class="card border-0 rounded-0" >
                        <img class="img-card pb-3" src="${card.url}"  alt="Vacanze">  
                        <p class="p-card card-title fs-1">${card.title}</p>          
                    </div>   
                </div>
            `;
            const cards = document.querySelectorAll(".li-card");
            cards.forEach(cardDOM => {
                cardDOM.addEventListener('click', () => {
                    // Get currentId from the data based on the current index
                    let currentCardId = cardDOM.getAttribute('cardId');
                    const cardUrlAtId = r.data.find(c => c.id == currentCardId).url
                    imgOverlay.innerHTML =
                        `
                        <div class="img-box">    
                        <button onClick="toggleOverlay()">Esci</button>
                            <img src=${cardUrlAtId}>
                        </div>
                        `
                    toggleOverlay();
                })
            })
        });
    });

function toggleOverlay() {
    if (imgOverlay.classList.contains('d-none')) {
        imgOverlay.classList.remove('d-none');
        imgOverlay.classList.add('d-flex');

    } else {
        imgOverlay.classList.remove('d-flex');
        imgOverlay.classList.add('d-none');
    }
    // imgOverlay.classList.toggle('d-none');
    document.body.style.overflow = 'hidden';
}