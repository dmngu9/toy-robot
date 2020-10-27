const { Table } = require('./index')

describe('(Table)', () => {
    it('should return correct dimension', () => {
        const table = new Table(3, 5)

        expect(table.dimension).toEqual({ height: 3, width: 5 })
    })
})