const { DIRECTION } = require('../constants')

class Robot {
    constructor(coordinate, direction) {
        this._coordinate = coordinate
        this._direction = direction
    }

    forward = () => {
        const moveMap = {
            [`${DIRECTION.NORTH}`]: { X: 0, Y: 1 },
            [`${DIRECTION.EAST}`]: { X: 1, Y: 0 },
            [`${DIRECTION.SOUTH}`]: { X: 0, Y: -1 },
            [`${DIRECTION.WEST}`]: { X: -1, Y: 0 },
        }
        const { x: currentX, y: currentY } = this._coordinate
        this._coordinate = {
            x: moveMap[this._direction] + currentX,
            y: moveMap[this._direction] + currentY
        }
    }

    rotateLeft = () => {
        // turn left
    }

    rotateRight = () => {
        // turn right
    }

    report = () => {
        return `${this._coordinate.x},${this._coordinate.y},${this._direction}`
    }
}

module.exports = { Robot }