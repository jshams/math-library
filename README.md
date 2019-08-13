# Math Library

![Build Status](https://travis-ci.com/jshams/math-library.svg?branch=master)
![Codecov](https://img.shields.io/codecov/c/github/jshams/math-library)
![npm](https://img.shields.io/npm/v/makeschool-math)
![npm bundle size](https://img.shields.io/bundlephobia/min/makeschool-math)

## Installation

Start by running this command in your project's directory
```
npm install makeschool-math --save
```
And then requring it on the top of your index.js file 
```
require('makeschool-math')
```

## Methods and code samples

- All methods can be called on number objects

---

## Round
Rounds a decimal number to an integer

Example: `3.8.round()` -> 4

Code sample:
```javascript
let n = 2.5
n.round() // returns 3
n = 2.2
n.round() // returns 2
```

## Floor
Rounds down a decimal number to an integer

Example: `3.8.floor()` -> 3

Code sample:
```javascript
let n = 2.8
n.floor() // returns 2
n = 3.1
n.floor() // returns 3
```

## Ceil
Rounds up a decimal number to an integer

Example: `3.8.ceil()` -> 4

Code sample:
```javascript
let n = 2.5
n.ceil() // returns 3
n = 3.1
n.ceil() // returns 4
```

## Split Between
Splits a decimal number between n people in dollars and returns an array of prices. if it doesn't divide evenly then some will be charged an extra penny.

Example `10.42.splitBetween(5)` -> `[2.09, 2.09, 2.08, 2.08, 2.08]`

Code sample:
```javascript
let n = 25.25
n.splitBetween(5) // returns [5.05, 5.05, 5.05, 5.05, 5.05]
n = 10
n.splitBetween(3) // returns [3.34, 3.33, 3.33]
```
## Pad
pads Number with x zeros before, and y zeros after. 

Example: `34.801.pad(4,4)` -> '0034.801'

Code sample:
```javascript
let n = 2.5
n.pad(2,3) // returns '02.500'
n = 2.2
n.pad(5,5) // returns '00002.20000'
```

## Degrees to radians
Converts a number from degrees to radians.

f(x) = x * 180/π

Example: `180.degreesToRadians()` -> `3.1415926`

Code Sample:

```javascript
let n = 360
n.degreesToRadians() // returns '02.500'
n = 2.2
n.pad(5,5) // returns '00002.20000'
```

## Radians to degrees
Converts a number from degrees to radians

f(x) = x * π/180

Example: `6.28319.radiansToDegrees()` -> `360.0002689`

Code Sample:
```javascript
6.28319.radiansToDegrees() // returns 360.0002689
```
## To Dollars
Returns a dollar amount of a given number in string form with an added dollar sign ($) in front. It will also fix the decimal places to only 2 places (hundredth place).

Example: `125.65.toDollars()` -> `'$125.65'`

Code Samples:

```javascript
125.65.toDollars()   // returns '$125.65'
35.5723.toDollars()  // returns '$35.57'
23.4.toDollars()     // returns '$23.40'
```
## Tax
Given a number a tax amount this method returns how much the tax is.

Example: `100.0.tax(0.2)` -> `20`
```javascript
100.0.tax(0.2) // returns 20.0
80.0.tax(0.5) // returns 40.0
12.0.tax(0.25) // returns 3.0
```

## With Tax
Given a number a tax amount this method returns the number with tax.

Example: `100.0.withTax(0.2)` -> `120.0`

Code Samples:
```javascript
100.0.withTax(0.2) // returns 120.0
90.0.withTax(0.5) // returns 135.0
12.0.withTax(0.25) // returns 15.0
```