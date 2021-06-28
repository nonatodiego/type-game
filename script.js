const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect = document.getElementById('difficulty')

// Lista de palavras do jogo
const words = [
  'javascript',
  'array',
  'fetch',
  'react',
  'modules',
  'local',
  'modal',
  'estilo',
  'desenvolvimento',
  'player',
  'async',
  'algoritmo',
  'bug',
  'chatbot',
  'codar',
  'comitar',
  'diretorio',
  'debug',
  'foo',
  'frameworks',
  'fullstack',
  'frontend',
  'backend',
  'devops',
  'update',
  'internet',
  'web',
  'hardware',
  'indentação',
  'refatorar',
  'software',
  'stack',
  'overflow',
  'application',
  'attibute',
  'browser',
  'cache',
  'classes',
  'id',
  'cms',
  'cookies',
  'crawl',
  'crm',
  'css',
  'domain',
  'favicon',
  'fields',
  'firewall',
  'template',
  'redirects',
  'registrar',
  'responsive',
  'server',
  'user',
  'interface',
  'widgets',
  'wireframe',
]

// Inicializando a palavra
let randowWord

// Inicialização a pontuação
let score = 0

// Inicializando o tempo
let time = 10

// Selecionando a dificuldade de acordo com o Local Storage ou coloca médio por padrão
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

// Definindo a dificuldade
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'


// Focus no input das palavras
text.focus()

// Começar a contagem do tempo
const timeInterval = setInterval(updateTime, 1000)

// Gera uma uma palavra diferente de acordo com o array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

// Adiciona a palavra no DOM (em tela, html)
function addWodToDOM() {
  randowWord = getRandomWord()
  word.innerHTML = randowWord
}

// Atualiza a pontuação
function updateScore() {
  score ++
  scoreEl.innerHTML = score
}

// atualiza o tempo
function updateTime() {
  time--
  timeEl.innerHTML = time + 's'

  if(time === 0) {
    clearInterval(timeInterval)

    // encerrar o jogo
    gameOver()
  }
}

// Mostrar tela de game over
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Parabéns 👏👏</h1>
    <p>Sua pontuação foi de ${score}</p>
    <button class="reload" onclick="location.reload()">Jogar Novamente</button>
    <img src="https://media1.giphy.com/media/LOzyexjYyXe7cHSaR0/giphy.gif?cid=ecf05e47xzimvceiy1x80o4krfrcs3cg2tkdzb9mfvgw3h0e&rid=giphy.gif&ct=g">
  ` 

  endgameEl.style.display = 'flex'
}

addWodToDOM()

//  Event listeners

// Escrevendo no input
text.addEventListener('input', e => {
  const insertedText = e.target.value
  if(insertedText === randowWord){
    addWodToDOM()
    updateScore()

    // Limpa o input
    e.target.value = '';

    if(difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 4;
    } else {
      time += 5;
    }

    updateTime();
  }
})

// Bnt Seetings
settingsBtn.addEventListener('click',() => {
  settings.classList.toggle('hide')
})

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value
  localStorage.setItem('difficulty', difficulty)
})


