Number.prototype.round = function round() {
    return Math.round(this);
};

Number.prototype.floor = function floor() {
    return Math.floor(this);
};

Number.prototype.ceil = function ceil() {
    return Math.ceil(this);
};

Number.prototype.splitby = function split(n) {
    let arr = Array(n).fill(Math.floor((100 * this) / n) / 100)
    const remainder = (100 * this) % n
    for (let i = 0; i < remainder; i++) {
        arr[i] = arr[i] + 0.01
    }
    return arr
}
