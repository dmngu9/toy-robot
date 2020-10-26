const { DIRECTION, DIRECTION_CLOCKWISE } = require('./constants')

class Robot {
    constructor(coordinate, direction) {
        this._coordinate = coordinate
        this._direction = direction
    }

    isPlaced = () => {
        return !!this._coordinate && !!this._direction
    }

    forward = () => {
        if (!this.isPlaced()) {
            return
        }
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
        if (!this.isPlaced()) {
            return
        }
        const currentDirectionIndex = DIRECTION_CLOCKWISE.findIndex(direction => direction === this._direction)
        const newDirectionIndex = (currentDirectionIndex - 1) >= 0 ? currentDirectionIndex - 1 : DIRECTION_CLOCKWISE.length - 1
        this._direction = DIRECTION_CLOCKWISE[newDirectionIndex]
    }

    rotateRight = () => {
        if (!this.isPlaced()) {
            return
        }
        const currentDirectionIndex = DIRECTION_CLOCKWISE.findIndex(direction => direction === this._direction)
        const newDirectionIndex = (currentDirectionIndex + 1) < DIRECTION_CLOCKWISE.length ? currentDirectionIndex + 1 : 0
        this._direction = DIRECTION_CLOCKWISE[newDirectionIndex]
    }

    report = () => {
        if (!this.isPlaced()) {
            return
        }
        return `${this._coordinate.x},${this._coordinate.y},${this._direction}`
    }

    set coordinate(coordinate) {
        this._coordinate = coordinate
    }

    set direction(direction) {
        this._direction = direction
    }
}

module.exports = { Robot }