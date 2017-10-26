const fetch = require('isomorphic-unfetch')
const get_headers = require('./get_headers.js').get_headers
const { get_uri } = require('../services/get_uri.js')

const ping_service = (req, res, next, app) => {
    const URL = `${get_uri({res}).backend}/api/ping/`

    // Body
    const request = fetch(URL, {
        method: 'GET',
        headers: get_headers({ res }),
    })
        .then(blob => blob.json())
        .then(data => {
            res.json({ status: 200, message: data.message })
        })
        .catch(err => {
            console.error(err)
            res.json({ status: 500, message: err })
            res.end()
        })
}

module.exports = { ping_service }
