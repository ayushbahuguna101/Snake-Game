import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false
// let score = document.querySelector('#score')
// let result = 0 

function main (currentTime) {
    if(gameOver) {
        if(confirm("You lost. Press OK to restart")) {
            window.location=('/SnakeGame')
        }
        result=0
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender < 1/SNAKE_SPEED) return

    lastRenderTime = currentTime
    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
    // updateScore()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

// function updateScore() {
//     if(snakeEatsFood()) {
//         result++
//     }
//     score.textContent = result
// }