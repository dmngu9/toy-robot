const { Game } = require('./index')

describe('(Game)', () => {
    let game

    beforeEach(() => {
        game = new Game()
    })

    it('should not place robot if invalid PLACE command', () => {
        game.play('PLACE 1,a,NORTH')
        const res = game.play('REPORT')

        expect(res).toBe('not placed')
    })

    it('robot should not do action if PLACE command is never issued', () => {
        game.play('MOVE')
        const res = game.play('REPORT')

        expect(res).toBe('not placed')
    })

    it('lower case command is ignored', () => {
        game.play('place 1,a,NORTH')
        const res = game.play('REPORT')

        expect(res).toBe('not placed')
    })

    it('robot should not be placed outside table', () => {
        game.play('PLACE 1,4,NORTH')
        game.play('PLACE 1,5,EAST')
        const res = game.play('REPORT')

        expect(res).toBe('1,4,NORTH')
    })

    it('should place robot at right location', () => {
        game.play('PLACE 1,3,NORTH')
        const res = game.play('REPORT')

        expect(res).toBe('1,3,NORTH')
    })
    
    it('robot should not go outside table', () => {
        game.play('PLACE 4,4,NORTH')
        game.play('MOVE')
        const res = game.play('REPORT')

        expect(res).toBe('4,4,NORTH')
    })

    it('robot should be at right direction', () => {
        game.play('PLACE 4,4,NORTH')
        game.play('RIGHT')
        game.play('RIGHT')
        const res = game.play('REPORT')

        expect(res).toBe('4,4,SOUTH')
    })

    it('robot should report right location and direction', () => {
        game.play('PLACE 1,2,EAST')
        game.play('MOVE')
        game.play('MOVE')
        game.play('LEFT')
        game.play('MOVE')
        const res = game.play('REPORT')

        expect(res).toBe('3,3,NORTH')
    })
})