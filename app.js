const btn = document.querySelector('button')
const span = document.querySelector('span')
const darkBtn = document.getElementById('dark')


const quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ];

const newQuotes = []
quotes.forEach(e => {
  newQuotes.push(` "${e}"`)
})

  

  btn.addEventListener('click', () => {
      const rand = Math.floor(Math.random() * quotes.length);
    span.textContent = newQuotes[rand]
  })

  darkBtn.addEventListener('click', () => {
    //   toggle dark-mode class
      document.body.classList.toggle('dark-mode') 
  })