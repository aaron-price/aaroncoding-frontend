function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomBool() {
    return Math.random() >= 0.5
}

module.exports = {
    between,
    randomBool,
}