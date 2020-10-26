const { COMMAND_TYPE } = require('./constants')
const { PlaceCommand, MoveCommand, RotateLeftCommand, RotateRightCommand, ReportCommand } = require('./commands')
const { DIRECTIONS } = require('../constants')

class CommandFactory {
    constructor(robot) {
        this._robot = robot
    }

    generateCommand = (input) => {
        const [commandType, ...commandVal] = input.split(' ')
        let command

        switch(commandType) {
            case COMMAND_TYPE.PLACE: 
                const [x, y, dir] = commandVal[0].split(',')
                const validDirections = new Set(Object.values(DIRECTIONS))

                if (isNaN(x) || isNaN(y) || !validDirections.has(dir)) {
                    command = () => {}
                    break
                }
                command = PlaceCommand(this._robot, null, { x, y }, dir) 
                break 
            case COMMAND_TYPE.MOVE: 
                command = MoveCommand(this._robot, null)
                break 
            case COMMAND_TYPE.LEFT:
                command = RotateLeftCommand(this._robot)
                break 
            case COMMAND_TYPE.RIGHT: 
                command = RotateRightCommand(this._robot)
                break 
            case COMMAND_TYPE.REPORT:
                command = ReportCommand(this._robot)
                break
            default:
                command = () => {}
        }
        return command
    }
}

module.exports = { CommandFactory }