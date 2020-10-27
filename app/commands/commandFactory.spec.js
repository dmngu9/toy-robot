const { CommandFactory } = require('./commandFactory')

describe('(CommandFactory)', () => {
    const robot = {
        position: jest.fn(),
        forward: jest.fn(),
        rotateLeft: jest.fn(),
        rotateRight: jest.fn(),
        report: jest.fn()
    }
    const commandFactory = new CommandFactory(robot)
})