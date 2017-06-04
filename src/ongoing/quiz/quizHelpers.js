import React from "react"
function setStorage(id, correct) {
    localStorage.setItem(
        `aaroncoding_completed_drill_${id}`,
        `correct:${correct.toString()}`
    )
}
function getStorage(id) {
    return localStorage.getItem(`aaroncoding_completed_drill_${id}`)
}
function resetStorage(data) {
    data.forEach((d,id) => localStorage.removeItem(`aaroncoding_completed_drill_${id}`))
}
function findNext(id, filters, data) {
    // If no more drills, return -1
    if (data.length - 1 <= id) {
        return -1
    }
    // the language of the next drill in the array
    const nextLanguage = data[id + 1].metadata.language.toString().toLowerCase()
    return filters[nextLanguage] !== "disallowed"
        ? id + 1
        : findNext(id + 1, filters, data) // Recursive call
}
function buildFilters(languages) {
    let filters = {}
    languages.forEach(l => {
        filters[l] = "allowed"
    })
    return filters
}
function formatDrill(str) {
    let lines = str.split(/\n/g)
    return (
        <div>{lines.map((line, key) => {
            return <p key={key}>{line.split("  ").map((word, i) => {
                return <span key={i}>&nbsp;&nbsp;{word}</span>
            })}</p>
        })}</div>)
}

module.exports = {
    setStorage,
    getStorage,
    resetStorage,
    findNext,
    buildFilters,
    formatDrill,
}