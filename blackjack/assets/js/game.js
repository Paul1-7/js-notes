let deck = []
const cardsTypes = ['C', 'D', 'H', 'S']
const specialCards = ['A', 'J', 'Q', 'K']

function shuffleArray (array) {
  return array.sort(() => Math.random() - 0.5)
}
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const cardType of cardsTypes) {
      deck.push(i + cardType)
    }
  }

  for (const cardType of cardsTypes) {
    for (const specialCard of specialCards) {
      deck.push(cardType + specialCard)
    }
  }

  deck = shuffleArray(deck)

  return deck
}

createDeck()

const requestCard = () => {
  if (deck.length === 0) {
    throw 'there is no card in the deck'
  }

  return deck.pop()
}

const cardValue = card => {
  const value = card.substring(0, card.length - 1)

  return isNaN(value) ? (value === 'A' ? 11 : 10) : Number(value)
}

const score = cardValue(requestCard())

console.log(score)
