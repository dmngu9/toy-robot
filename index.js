const readline = require('readline')
const { CommandFactory } = require('./app/commands/commandFactory')
const { Robot } = require('./app/robot')
const { Table } = require('./app/table')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const robot = new Robot()
const table = new Table(5, 5)
const commandFactory = new CommandFactory(robot)

rl.on('line', line => {
    const command = commandFactory.generateCommand(line)
    command()
})