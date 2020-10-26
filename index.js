const readline = require('readline')
const { CommandFactory } = require('./app/commands')
const { Robot } = require('./app/robot')
const { Table } = require('./app/table')
const { Game } = require('./app/game')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const robot = new Robot()
const table = new Table(5, 5)
const commandFactory = new CommandFactory(robot)
const game = new Game(commandFactory)

rl.on('line', line => {
    game.play(line)
})