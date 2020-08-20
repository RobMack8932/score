function changeTeam1Name() {
  const team1NameTextContent = document.querySelector('.team1 h2')
  const team1InputValue = document.querySelector('.team1 input').value
  team1NameTextContent.textContent = team1InputValue
}
function changeTeam2Name() {
  const team2NameTextContent = document.querySelector('.team2 h2')
  const team2InputValue = document.querySelector('.team2 input').value
  team2NameTextContent.textContent = team2InputValue
}
function addTeam1Score() {
  const team1Score = document.querySelector('.team1 h3')
  team1Score.textContent++
  const winner = document.querySelector('.team1 p')

  if (team1Score.textContent == 21) {
    winner.textContent = 'Team 1 has won the game!'
    const addPlayer2 = document.getElementById('d')
    addPlayer2.style.visibility = 'hidden'
    const subtractPlayer2 = document.getElementById('e')
    subtractPlayer2.style.visibility = 'hidden'
    const resetPlayer2 = document.getElementById('resetButton')
    resetPlayer2.style.visibility = 'hidden'
  }
}
function subtractTeam1Score() {
  const team1Score = document.querySelector('.team1 h3')
  team1Score.textContent--
  if (team1Score.textContent < 0) {
    team1Score.textContent++
  }
}
function addTeam2Score() {
  const team2Score = document.querySelector('.team2 h3')
  team2Score.textContent++
  const winner = document.querySelector('.team2 p')
  if (team2Score.textContent > 21) {
    team2Score.textContent--
  }
  if (team2Score.textContent == 21) {
    winner.textContent = 'Team 2 has won the game! '
    const addPlayer2 = document.getElementById('a')
    addPlayer2.style.visibility = 'hidden'
    const subtractPlayer2 = document.getElementById('b')
    subtractPlayer2.style.visibility = 'hidden'
    const resetPlayer2 = document.getElementById('resetButton2')
    resetPlayer2.style.visibility = 'hidden'
  }
}

function subtractTeam2Score() {
  const team2Score = document.querySelector('.team2 h3')
  team2Score.textContent--
  if (team2Score.textContent < 0) {
    team2Score.textContent++
  }
}
function resetTeam1() {
  const team1Score = document.querySelector('.team1 h3')
  team1Score.textContent = 0
}
function resetTeam2() {
  const team1Score = document.querySelector('.team2 h3')
  team1Score.textContent = 0
}
const main = () => {
  const addTeam1 = document.querySelector('.team1 i')
  addTeam1.addEventListener('onclick', addTeam1Score)

  const subtractTeam1 = document.querySelector('.team1 i')
  subtractTeam1.addEventListener('onclick', subtractTeam1Score)

  const addTeam2 = document.querySelector('.team2 i')
  addTeam2.addEventListener('onclick', addTeam2Score)

  const subtractTeam2 = document.querySelector('.team2 i')
  subtractTeam2.addEventListener('onclick', subtractTeam2Score)

  const team1Input = document.querySelector('.team1 input')
  team1Input.addEventListener('input', changeTeam1Name)

  const team2Input = document.querySelector('.team2 input')
  team2Input.addEventListener('input', changeTeam2Name)

  const resetTeam1 = document.getElementById('resetButton')
  resetTeam1.addEventListener('onclick', resetTeam1)

  const resetTeam2 = document.getElementById('resetButton')
  resetTeam2.addEventListener('onclick', resetTeam2)
}
document.addEventListener('DOMContentLoaded', main)
