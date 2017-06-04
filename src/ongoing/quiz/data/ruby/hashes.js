/* eslint-disable */
const data = [
{
title: "Ruby hash mutations - invert",
question: `
What is the output?
hash = { :one => 1, :two => 2, :three => 3 }
hash.invert
puts hash`, 
answers: [

`# invert mutates hash
{1 => :one, 2 => :two, 3 => :three}`,

`# invert does NOT mutate hash
{:one => 1, :two => 2, :three => 3}`

],
correct: 1,
resources: "https://ruby-doc.org/core-2.4.1/Hash.html#method-i-invert",
metadata: {
    language: ["Ruby"],
    tags: ["hash", "mutation"],
},
},
]

export default data