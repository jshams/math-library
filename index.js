Number.prototype.round = function round() {
    return Math.round(this);
};

Number.prototype.floor = function floor() {
    return Math.floor(this);
};

Number.prototype.ceil = function ceil() {
    return Math.ceil(this);
};

Number.prototype.splitbetween = function splitbetween(n) {
    let arr = Array(n).fill(Math.floor((100 * this) / n) / 100)
    const remainder = (100 * this) % n
    for (let i = 0; i < remainder; i++) {
        arr[i] = arr[i] + 0.01
    }
    return arr
}

Number.prototype.pad = function pad(before, after) {
    let thisSplitByDecimal = this.toString().split('.')
    let numWithPadding = ''
    if (before > thisSplitByDecimal[0].length) {
        numWithPadding += '0'.repeat(before - thisSplitByDecimal[0].length)
    }
    numWithPadding += thisSplitByDecimal[0] + '.' + thisSplitByDecimal[1]
    if (after > thisSplitByDecimal[1].length) {
        numWithPadding += '0'.repeat(after - thisSplitByDecimal[1].length)
    }
    return numWithPadding
}

Number.prototype.toDollars = function toDollars() {
    return `$${this.toFixed(2)}`
}

Number.prototype.degreesToRadians = function degreesToRadians() {
    return this * (Math.PI / 180)
}

Number.prototype.radiansToDegrees = function radiansToDegrees() {
    return this / (Math.PI / 180)
}

Number.prototype.tax = function tax(rate) {
    return this * rate
}

Number.prototype.withTax = function withTax(rate) {
    return this * (1 + rate)
}