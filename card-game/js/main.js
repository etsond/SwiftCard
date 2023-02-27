// card game war
let deckId = ''

document.querySelector("button").addEventListener("click", getDeck)

// getting a new deck of id
function getDeck(){
fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // storing the deck id in the variable
        deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

function sparTwoDeck(){
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
}