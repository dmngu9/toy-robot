const robot = require("../robot")

function PlaceCommand(robot, position) {
    return () => {
        robot.position = position
    }
}

function MoveCommand(robot) {
    return () => {
        robot.forward()
    }
}

function RotateLeftCommand(robot) {
    return () => {
        robot.rotateLeft()
    }
}

function RotateRightCommand(robot) {
    return () => {
        robot.rotateRight()
    }
}

function ReportCommand(robot) {
    return () => {
        return robot.report()
    }
}

module.exports = { PlaceCommand, MoveCommand, RotateLeftCommand, RotateRightCommand, ReportCommand }