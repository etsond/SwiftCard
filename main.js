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
            // player 1 card
            document.querySelector("#player1").src = data.cards[0].image
            // player 2 cards
            document.querySelector("#player2").src = data.cards[1].image

            // get the value from the api for the two 2 counts
            let valueOfPlayerOne = cardStringToNum(data.cards[0].value)
            let valueOfPlayerTwo = cardStringToNum(data.cards[1].value)

            // checking for winner based on card value
            if(valueOfPlayerOne > valueOfPlayerTwo){
                document.querySelector("h3").innerText = "Winner is Player1"
            }
            else if(valueOfPlayerTwo > valueOfPlayerOne){
                document.querySelector("h3").innerText = "Winner is Player 2"
            }else{
                document.querySelector("h3").innerText = "Draw again"
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function cardStringToNum(val){
    if(val === "ACE"){
        return 14

    }else if(val === "KING"){
        return 13

    }else if(val === "QUEEN"){
        return 12
    }
    else if(val === "JACK"){
        return 11
    }
    else{
        return val
    }
}