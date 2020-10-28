const { CommandFactory } = require('./commandFactory')

describe('(CommandFactory)', () => {
    const robot = {
        forward: jest.fn(),
        rotateLeft: jest.fn(),
        rotateRight: jest.fn(),
        report: jest.fn(),
        set position(position) {},
    }
    const commandFactory = new CommandFactory(robot)
    const positionSpy = jest.spyOn(robot, 'position', 'set')

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should not generate any command if input is not valid', () => {
        const command = commandFactory.generateCommand('HOP')
        command()

        expect(positionSpy).not.toHaveBeenCalled()
        expect(robot.forward).not.toHaveBeenCalled()
        expect(robot.rotateLeft).not.toHaveBeenCalled()
        expect(robot.rotateRight).not.toHaveBeenCalled()
        expect(robot.report).not.toHaveBeenCalled()
    })

    it('should not generate any command if input is lower case', () => {
        const command = commandFactory.generateCommand('move')
        command()

        expect(positionSpy).not.toHaveBeenCalled()
        expect(robot.forward).not.toHaveBeenCalled()
        expect(robot.rotateLeft).not.toHaveBeenCalled()
        expect(robot.rotateRight).not.toHaveBeenCalled()
        expect(robot.report).not.toHaveBeenCalled()
    })

    it('should not generate PLACE command if input coordinate is invalid', () => {
        const command = commandFactory.generateCommand('PLACE A,0,NORTH')
        command()

        expect(positionSpy).not.toHaveBeenCalled()
    })

    it('should not generate PLACE command if input direction is invalid', () => {
        const command = commandFactory.generateCommand('PLACE 0,0,RANDOM')
        command()

        expect(positionSpy).not.toHaveBeenCalled()
    })

    it('should generate PLACE command', () => {
        const command = commandFactory.generateCommand('PLACE 0,0,WEST')
        command()

        expect(positionSpy).toHaveBeenCalledWith({ coordinate: { x: 0, y: 0 }, direction: 'WEST' })
    })

    it('should generate MOVE command', () => {
        const command = commandFactory.generateCommand('MOVE')
        command()

        expect(robot.forward).toHaveBeenCalled()
    })

    it('should generate LEFT command', () => {
        const command = commandFactory.generateCommand('LEFT')
        command()

        expect(robot.rotateLeft).toHaveBeenCalled()
    })

    it('should generate RIGHT command', () => {
        const command = commandFactory.generateCommand('RIGHT')
        command()

        expect(robot.rotateRight).toHaveBeenCalled()
    })

    it('should generate REPORT command', () => {
        const command = commandFactory.generateCommand('REPORT')
        command()

        expect(robot.report).toHaveBeenCalled()
    })
})