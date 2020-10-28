const readline = require('readline')
const { Game } = require('./app/game')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const game = new Game()

rl.on('line', line => {
    game.play(line)
})