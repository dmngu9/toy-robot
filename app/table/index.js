class Table {
    constructor(height, width) {
        this._height = height
        this._width = width
    }

    get dimension() {
        return {
            height: this._height,
            width: this._width
        }
    }
}

module.exports = { Table }
