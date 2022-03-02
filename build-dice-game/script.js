// Game state variables
let player1Score = 0
let player2Score = 0
let activePlayer = true
const play1Dice = document.getElementById('oneDice')
const play2Dice = document.getElementById('twoDice')
let playOneS = document.getElementById('oneScore')
let playTwoS = document.getElementById('twoScore')
const d1c1 = document.getElementById('1-1')
const d1c2 = document.getElementById('1-2')
const d1c3 = document.getElementById('1-3')
const d1c4 = document.getElementById('1-4')
const d1c5 = document.getElementById('1-5')
const d1c6 = document.getElementById('1-6')
const d1c7 = document.getElementById('1-7')

const d2c1 = document.getElementById('2-1')
const d2c2 = document.getElementById('2-2')
const d2c3 = document.getElementById('2-3')
const d2c4 = document.getElementById('2-4')
const d2c5 = document.getElementById('2-5')
const d2c6 = document.getElementById('2-6')
const d2c7 = document.getElementById('2-7')

const btnRoll = document.getElementById('btn-roll')

btnRoll.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * 6) + 1
  if (activePlayer) {
    play1Dice.classList.add('active-d')
    play2Dice.classList.remove('active-d')
    playOneS.classList.remove('inactiveSc')
    playTwoS.classList.add('inactiveSc')

    if (randomNum === 1) {
      d1c4.classList.add('active-c')
      d1c1.classList.remove('active-c')
      d1c2.classList.remove('active-c')
      d1c3.classList.remove('active-c')
      d1c5.classList.remove('active-c')
      d1c6.classList.remove('active-c')
      d1c7.classList.remove('active-c')
      player1Score += randomNum
      playOneS.textContent = `Score: ${player1Score}`
    } else if (randomNum === 2) {
      d1c1.classList.add('active-c')
      d1c7.classList.add('active-c')
      d1c2.classList.remove('active-c')
      d1c3.classList.remove('active-c')
      d1c4.classList.remove('active-c')
      d1c5.classList.remove('active-c')
      d1c6.classList.remove('active-c')
      player1Score += randomNum
      playOneS.textContent = `Score: ${player1Score}`
    } else if (randomNum === 3) {
      d1c1.classList.add('active-c')
      d1c4.classList.add('active-c')
      d1c7.classList.add('active-c')
      d1c2.classList.remove('active-c')
      d1c3.classList.remove('active-c')
      d1c5.classList.remove('active-c')
      d1c6.classList.remove('active-c')
      player1Score += randomNum
      playOneS.textContent = `Score: ${player1Score}`
    } else if (randomNum === 4) {
      d1c1.classList.add('active-c')
      d1c3.classList.add('active-c')
      d1c5.classList.add('active-c')
      d1c7.classList.add('active-c')
      d1c2.classList.remove('active-c')
      d1c4.classList.remove('active-c')
      d1c6.classList.remove('active-c')
      player1Score += randomNum
      playOneS.textContent = `Score: ${player1Score}`
    } else if (randomNum === 5) {
      d1c1.classList.add('active-c')
      d1c3.classList.add('active-c')
      d1c4.classList.add('active-c')
      d1c5.classList.add('active-c')
      d1c7.classList.add('active-c')
      d1c2.classList.remove('active-c')
      d1c6.classList.remove('active-c')
      player1Score += randomNum
      playOneS.textContent = `Score: ${player1Score}`
    } else {
      d1c1.classList.add('active-c')
      d1c2.classList.add('active-c')
      d1c3.classList.add('active-c')
      d1c5.classList.add('active-c')
      d1c6.classList.add('active-c')
      d1c7.classList.add('active-c')
      d1c4.classList.remove('active-c')
      player1Score += randomNum
      playOneS.textContent = `Score: ${player1Score}`
    }
  } else {
    play2Dice.classList.add('active-d')
    play1Dice.classList.remove('active-d')
    playOneS.classList.add('inactiveSc')
    playTwoS.classList.remove('inactiveSc')

    if (randomNum === 1) {
      d2c4.classList.add('active-c')
      d2c1.classList.remove('active-c')
      d2c2.classList.remove('active-c')
      d2c3.classList.remove('active-c')
      d2c5.classList.remove('active-c')
      d2c6.classList.remove('active-c')
      d2c7.classList.remove('active-c')
      player2Score += randomNum
      playTwoS.textContent = `Score: ${player2Score}`
    } else if (randomNum === 2) {
      d2c3.classList.add('active-c')
      d2c5.classList.add('active-c')
      d2c1.classList.remove('active-c')
      d2c2.classList.remove('active-c')
      d2c4.classList.remove('active-c')
      d2c6.classList.remove('active-c')
      d2c7.classList.remove('active-c')
      player2Score += randomNum
      playTwoS.textContent = `Score: ${player2Score}`
    } else if (randomNum === 3) {
      d2c3.classList.add('active-c')
      d2c4.classList.add('active-c')
      d2c5.classList.add('active-c')
      d2c1.classList.remove('active-c')
      d2c2.classList.remove('active-c')
      d2c6.classList.remove('active-c')
      d2c7.classList.remove('active-c')
      player2Score += randomNum
      playTwoS.textContent = `Score: ${player2Score}`
    } else if (randomNum === 4) {
      d2c1.classList.add('active-c')
      d2c3.classList.add('active-c')
      d2c5.classList.add('active-c')
      d2c7.classList.add('active-c')
      d2c2.classList.remove('active-c')
      d2c4.classList.remove('active-c')
      d2c6.classList.remove('active-c')
      player2Score += randomNum
      playTwoS.textContent = `Score: ${player2Score}`
    } else if (randomNum === 5) {
      d2c1.classList.add('active-c')
      d2c3.classList.add('active-c')
      d2c4.classList.add('active-c')
      d2c5.classList.add('active-c')
      d2c7.classList.add('active-c')
      d2c2.classList.remove('active-c')
      d2c6.classList.remove('active-c')
      player2Score += randomNum
      playTwoS.textContent = `Score: ${player2Score}`
    } else {
      d2c1.classList.add('active-c')
      d2c2.classList.add('active-c')
      d2c3.classList.add('active-c')
      d2c5.classList.add('active-c')
      d2c6.classList.add('active-c')
      d2c7.classList.add('active-c')
      d2c4.classList.remove('active-c')
      player2Score += randomNum
      playTwoS.textContent = `Score: ${player2Score}`
    }
  }
  activePlayer = !activePlayer
})