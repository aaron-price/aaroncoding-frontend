function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function weighted_random(min, max, cfg) {
    // cfg = [{ range: [a, b], likelihood: 50 }, { range: [b, c], likelihood: 30 }]
    let options = []
    cfg.forEach(dataset => {
        for (let i = 0; i < dataset.likelihood; i++) {
            options.push(between(dataset.range[0], dataset.range[1]))
        }
    })
    // console.log('options', options)
    return options[between(0, options.length + 1)]
}

function randomBool() {
    return Math.random() >= 0.5
}

module.exports = {
    between,
    randomBool,
    weighted_random,
}
