const c = require('../index.js')

test('Sanity check', () => {

})

test('round', () => {
    let result;
    result = 6.7.round()
    expect(result).toBe(7)
    result = 2.3.round()
    expect(result).toBe(2)
})

test('floor', () => {
    let result;
    result = 6.7.floor()
    expect(result).toBe(6)
    result = 2.3.floor()
    expect(result).toBe(2)
})

test('ceil', () => {
    let result;
    result = 6.7.ceil()
    expect(result).toBe(7)
    result = 2.3.ceil()
    expect(result).toBe(3)
})

test('splitbetween', () => {
    let result
    let num = 10
    result = num.splitbetween(3)
    expect(result).toEqual([3.34, 3.33, 3.33])
    num = 24.02
    result = num.splitbetween(5)
    expect(result).toEqual([4.81, 4.81, 4.8, 4.8, 4.8])
})

test('pad', () => {
    let result;
    result = 12.24.pad(3, 3)
    expect(result).toBe('012.240')
    result = 120.1.pad(2, 5)
    expect(result).toBe('120.10000')
})

test('toDollars', () => {
    let result;
    result = 12.5.toDollars()
    expect(result).toBe('$12.50')
    result = 1.524.toDollars()
    expect(result).toBe('$1.52')
})

test('degreesToRadians', () => {
    let result;
    result = 360.0.degreesToRadians()
    expect(result).toBe(2 * Math.PI)
    result = 900.0.degreesToRadians()
    expect(result).toBe(5 * Math.PI)
})

test('radiansToDegrees', () => {
    let result;
    result = (2 * Math.PI).radiansToDegrees()
    expect(result).toBe(360)
    result = (Math.PI).radiansToDegrees()
    expect(result).toBe(180)
})

test('tax', () => {
    let result;
    result = 100.0.tax(0.2)
    expect(result).toBe(20)
    result = 15.0.tax(.10)
    expect(result).toBe(1.5)
})

test('withTax', () => {
    let result;
    result = 100.0.withTax(0.2)
    expect(result).toBe(120)
    result = 15.0.withTax(.10)
    expect(result).toBe(16.5)
})

