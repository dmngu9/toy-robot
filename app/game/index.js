class Game {
    constructor(commandFactory) {
        this._commandFactory = commandFactory
    }

    play = (input) => {
        const command = this._commandFactory.generateCommand(input)
        return command()
    }
}