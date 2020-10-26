class Table {
    constructor(height, width) {
        this._height = height
        this._width = width
        this._grid = new Array(this._width).fill(null).map(col => new Array(this._height).fill(null))
    }
}

module.exports = { Table }
