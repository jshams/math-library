# Math Library

[![Build Status](https://travis-ci.com/jshams/math-library.svg?branch=master)]
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

All methods can be called on number objects

### Round
Rounds a decimal number to an integer
Example: `3.8.round()` -> 4
Code sample:
```javascript
let n = 2.5
n.round() // returns 3
n = 2.2
n.round() // returns 2
```

### Floor
Rounds down a decimal number to an integer
Example: `3.8.floor()` -> 3
Code sample:
```javascript
let n = 2.8
n.floor() // returns 2
n = 3.1
n.floor() // returns 3
```

### Ceil
Rounds up a decimal number to an integer
Example: `3.8.ceil()` -> 4
Code sample:
```javascript
let n = 2.5
n.ceil() // returns 3
n = 3.1
n.ceil() // returns 4
```

### Pad
pads Number with x zeros before, and y zeros after. 
Example: `34.801.pad(4,4)` -> '0034.801'
Code sample:
```javascript
let n = 2.5
n.pad(2,3) // returns '02.500'
n = 2.2
n.pad(5,5) // returns '00002.20000'
```

### Degrees to radians

### Radians to degrees

### To Dollars

### Tax

### With Tax

### Interest

### Mortgage

### Int to hex




