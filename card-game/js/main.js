// card game war
let deckId = ''



// getting a new deck of id
function getDeck(){}
fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // storing the deckId from the request
        deckId = data.deck_id
        

    })
    .catch(err => {
        console.log(`error ${err}`)
    })



document.querySelector("button").addEventListener("click", sparTwoDeck)

function sparTwoDeck(){
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("#player1").src = data.cards[0].image
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}