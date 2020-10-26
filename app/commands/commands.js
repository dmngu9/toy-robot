const robot = require("../robot")

function PlaceCommand(robot, table, coordinate, direction) {
    return () => {
        robot.coordinate = coordinate
        robot.direction = direction
        // TODO: table set item
    }
}

function MoveCommand(robot, table) {
    return () => {
        robot.forward()
        // TODO: table set item
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