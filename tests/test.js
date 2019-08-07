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

test('splitby', () => {
    let result
    let num = 10
    result = num.splitby(3)
    expect(result).toEqual([3.34, 3.33, 3.33])
    num = 24.02
    result = num.splitby(5)
    expect(result).toEqual([4.81, 4.81, 4.8, 4.8, 4.8])
})
