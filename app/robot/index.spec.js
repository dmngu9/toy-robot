const { Robot } = require('./index')
const { DIRECTION } = require('./constants')

describe('(Robot)', () => {
    const table = {
        dimension: { height: 5, width: 6 }
    }
    let robot

    beforeEach(() => {
        robot = new Robot(table)
    })

    describe('(Method) isPlaced', () => {
        it('should return false if robot is not positioned', () => {
            expect(robot.isPlaced()).toBe(false)
        })

        it('should return false if robot position does not have all coordinate and direction', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 }
            }

            expect(robot.isPlaced()).toBe(false)
        })

        it('should return true if robot is positioned', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 },
                direction: DIRECTION.EAST
            }

            expect(robot.isPlaced()).toBe(true)
        })
    })

    describe('(Method) isOnTable', () => {
        it('should return false if robot coordinate is outside of table dimension', () => {
            expect(robot.isOnTable({ x: 7, y: 3 })).toBe(false)
        })

        it('should return false if robot coordinate is inside of table dimension', () => {
            expect(robot.isOnTable({ x: 5, y: 3 })).toBe(true)
        })
    })

    describe('(Method) forward', () => {
        it('should not move if robot is not placed', () => {
            robot.forward()

            expect(robot.coordinate).toBeUndefined()
        })

        it('should not move if planned move cause robot to be not on table', () => {
            robot.position = {
                coordinate: { x: 5, y: 3 },
                direction: DIRECTION.EAST
            }
            robot.forward()

            expect(robot.coordinate).toEqual({ x: 5, y: 3 })
        })

        it('should move', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 },
                direction: DIRECTION.EAST
            }
            robot.forward()

            expect(robot.coordinate).toEqual({ x: 4, y: 3 })
        })
    })

    describe('(Method) rotateLeft', () => {
        it('should not rotate if robot is not positioned', () => {
            robot.rotateLeft()

            expect(robot.coordinate).toBeUndefined()
        })

        it('should face west direction', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 },
                direction: DIRECTION.NORTH
            }
            robot.rotateLeft()

            expect(robot.direction).toBe(DIRECTION.WEST)
        })

        it('should face north direction', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 },
                direction: DIRECTION.EAST
            }
            robot.rotateLeft()

            expect(robot.direction).toBe(DIRECTION.NORTH)
        })
    })

    describe('(Method) rotateRight', () => {
        it('should not rotate if robot is not positioned', () => {
            robot.rotateRight()

            expect(robot.coordinate).toBeUndefined()
        })

        it('should face east direction', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 },
                direction: DIRECTION.NORTH
            }
            robot.rotateRight()

            expect(robot.direction).toBe(DIRECTION.EAST)
        })

        it('should face west direction', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 },
                direction: DIRECTION.SOUTH
            }
            robot.rotateRight()

            expect(robot.direction).toBe(DIRECTION.WEST)
        })
    })

    describe('(Method) report', () => {
        it('should not report if robot is not positioned', () => {
            expect(robot.report()).toBeUndefined()
        })

        it('should report', () => {
            robot.position = {
                coordinate: { x: 3, y: 3 },
                direction: DIRECTION.SOUTH
            }

            expect(robot.report()).toBe(`3,3,${DIRECTION.SOUTH}`)
        })
    })
})