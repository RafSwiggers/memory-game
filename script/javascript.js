const cardsArray = [{
        name: 'cap',
        img: './images/shield.jpg',
    },
    {
        name: "thor",
        img: "./images/hammer.jpg",
    },
    {
        name: 'iron-man',
        img: "./images/reactor.jpg",
    },
    {
        name: 'black-widow',
        img: './images/blackwidow.jpg',
    },
    {
        name: 'avengers',
        img: './images/avengers.png',
    },
    {
        name: 'hawkeye',
        img: './images/hawkeye.jpg',
    }
]
let delay = 1200
let gameGrid = cardsArray.concat(cardsArray)
gameGrid.sort(() => 0.5 - Math.random())
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name

    // Create front of card
    const front = document.createElement('div')
    front.classList.add('front')

    // Create back of card, which contains
    const back = document.createElement('div')
    back.classList.add('back')
    back.style.backgroundImage = `url(${item.img})`

    // Append card to grid, and front and back to each card
    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
})

grid.addEventListener('click', function(event) {
    let clicked = event.target
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
        return
    }
    if (count < 2) {
        count++
        if (count === 1) {
            firstGuess = clicked.dataset.name
            clicked.classList.add('selected')
        } else {
            secondGuess = clicked.dataset.name
            clicked.classList.add('selected')
        }
        if (firstGuess !== '' && secondGuess !== '') {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay)
                setTimeout(resetGuesses, delay)
            } else {
                setTimeout(resetGuesses, delay)
            }
        }
        previousTarget = clicked;
    }
})
let previousTarget = null
let firstGuess = ''
let secondGuess = ''
let count = 0;

function match() {
    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
        card.classList.add('match')
    })
}

function resetGuesses() {
    firstGuess = ''
    secondGuess = ''
    count = 0

    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
        card.classList.remove('selected')
    })
}