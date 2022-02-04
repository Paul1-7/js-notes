let deck = []
const cardsTypes = ['C', 'D', 'H', 'S']
const specialCards = ['A', 'J', 'Q', 'K']
let playerScore = 0
let computerScore = 0

const btnRequestCard = document.querySelector('#btnRequestCard')
const btnStop = document.querySelector('#btnStop')
const btnNewGame = document.querySelector('#btnNewGame')
const scores = document.querySelectorAll('small')
const divCardPlayer = document.querySelector('#card-player')
const divCardComputer = document.querySelector('#card-computer')

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
      deck.push(specialCard + cardType)
    }
  }

  deck = shuffleArray(deck)
  return deck
}

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

const computerShift = minPoints => {
  do {
    const card = requestCard()
    const cardImg = document.createElement('img')

    cardImg.src = `assets/cards/${card}.png`
    cardImg.classList.add('card-img')

    computerScore += cardValue(card)
    divCardComputer.append(cardImg)
    scores[1].innerText = computerScore
    if (minPoints > 21) {
      break
    }
  } while (computerScore < minPoints)

  if ((playerScore < 21 && computerScore < playerScore) || computerScore > 21) {
    console.log('congratulations, you win')
  } else if (computerScore === playerScore) {
    console.log('it´s a tie')
  } else {
    console.log('you lose')
  }
}

btnRequestCard.addEventListener('click', () => {
  if (playerScore > 21) {
    console.warn('sorry, you lost')
    btnRequestCard.disabled = true
    computerShift(playerScore)
  } else if (playerScore === 21) {
    console.warn('21, good')
    computerShift(playerScore)
  } else {
    const card = requestCard()
    const cardImg = document.createElement('img')

    cardImg.src = `assets/cards/${card}.png`
    cardImg.classList.add('card-img')
    playerScore += cardValue(card)
    divCardPlayer.append(cardImg)
    scores[0].innerText = playerScore
  }
})

btnStop.addEventListener('click', () => {
  btnStop.disabled = true
  btnRequestCard.disabled = true
  computerShift(playerScore)
})

btnNewGame.addEventListener('click', () => {
  playerScore = 0
  computerScore = 0
  deck = []
  deck = createDeck()
  scores[0].innerText = 0
  scores[1].innerText = 0
  divCardPlayer.innerHTML = ''
  divCardComputer.innerHTML = ''
  btnRequestCard.disabled = false
  btnStop.disabled = false
})
createDeck()
