const { DIRECTION, DIRECTION_CLOCKWISE } = require('./constants')

class Robot {
    constructor(table) {
        this._coordinate = undefined
        this._direction = undefined
        this._table = table
    }

    isPlaced = () => {
        return !!this._coordinate && !!this._direction
    }

    isOnTable = (coordinate) => {
        const { x, y } = coordinate
        const { height, width } = this._table.dimension
        return x < width && y < height
    }

    forward = () => {
        if (!this.isPlaced()) {
            return
        }
        const moveMap = {
            [`${DIRECTION.NORTH}`]: { x: 0, y: 1 },
            [`${DIRECTION.EAST}`]: { x: 1, y: 0 },
            [`${DIRECTION.SOUTH}`]: { x: 0, y: -1 },
            [`${DIRECTION.WEST}`]: { x: -1, y: 0 },
        }
        const { x: currentX, y: currentY } = this._coordinate
        const newCoordinate = {
            x: moveMap[this._direction].x + currentX,
            y: moveMap[this._direction].y + currentY
        }
        if (!this.isOnTable(newCoordinate)) {
            return
        }
        this._coordinate = newCoordinate
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
        const response = `${this._coordinate.x},${this._coordinate.y},${this._direction}`
        console.log(response)
        return response
    }

    get coordinate() {
        return this._coordinate
    }

    get direction() {
        return this._direction
    }

    set position(position) {
        const { coordinate, direction } = position
        this._coordinate = coordinate
        this._direction = direction
    }
}

module.exports = { Robot }