const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

let arvaukset = 0

const words = [
    "ohjelmointi",
    "javascript",
    "tietokanta",
    "käyttäjä",
    "käyttöjärjestelmä",
    "muuttuja",
    "tyylitiedosto",
    "kirjasto",
    "käyttöliittymä",
    "käyttäjäkokemus"
]

let randomWord = ""
let maskedWord = ""

const newGame = () => {
    arvaukset = 0
    const random = Math.floor(Math.random() * 10) + 1
    randomWord = words[random]
    maskedWord = "*".repeat(randomWord.length)
    console.log(randomWord)
    output.innerHTML = maskedWord

}

const win = () => {
    alert(`Arvasit oikein, sana on ${randomWord}!`)
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomWord.length;i++) {
        const char = randomWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
}
    }
    output.innerHTML = maskedWord
}
newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        arvaukset++
        span.innerHTML = arvaukset
        console.log(arvaukset)
        e.preventDefault()
        const guess = input.value
        if (guess.toLowerCase() === randomWord.toLowerCase()) {
            win()

        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomWord.toLowerCase()) {
                win()

            }
        } else {
            alert('Väärin!')
        }
        input.value = ''
    }
})