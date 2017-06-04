const _ = require("lodash")
const ruby = require("./data/ruby/index.js").default
const js = require("./data/js/index.js").default
const sql = require("./data/sql/index.js").default

let data = _.shuffle([].concat(
  ...require("./data/css/index.js").default,
  ...require("./data/general/index.js").default,
  ...require("./data/html/index.js").default,
  ...require("./data/js/index.js").default,
  ...require("./data/nosql/index.js").default,
  ...require("./data/ruby/index.js").default,
  ...require("./data/sql/index.js").default,
  ))

// shuffle the answers inside each drill
data = data.map((drill, key) => {
    const correctStr = drill.answers[drill.correct]
    drill.answers = _.shuffle(drill.answers)
    drill.correct = drill.answers.indexOf(correctStr)

    return drill
})


const languages = [
    "javascript",
    "html",
    "css",
    "sql",
    "nosql",
    "ruby",
    "react",
    "rails",
    "general",
]
module.exports = { data, languages }