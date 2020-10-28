const { CommandFactory } = require('../commands')
const { Robot } = require('../robot')
const { Table } = require('../table')

class Game {
    constructor() {
        const table = new Table(5, 5)
        const robot = new Robot(table)
        this._commandFactory = new CommandFactory(robot)
    }

    play = (input) => {
        const command = this._commandFactory.generateCommand(input)
        return command()
    }
}

module.exports = { Game }