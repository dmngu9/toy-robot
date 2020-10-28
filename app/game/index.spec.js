const { Robot } = require('../robot')
const { Table } = require('../table')
const { CommandFactory } = require('../commands')
const { Game } = require('./index')

describe('(Game)', () => {
    const table = new Table(5, 5)
    const robot = new Robot(table)
    const commandFactory = new CommandFactory(robot)
    const game = new Game(commandFactory)
})