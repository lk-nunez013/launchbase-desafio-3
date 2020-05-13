const cards = document.querySelectorAll('.card-curso')

for(let card of cards){
    card.addEventListener("click", function(){
        const cardID = card.getAttribute('id')
        window.location.href = `/courses?id=${cardID}`
    })
}