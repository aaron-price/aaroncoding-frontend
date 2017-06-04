/* eslint-disable */
const data = [
{
title: "Ruby array mutations - push",
question: `
What is the output?
arr = [1,2,3]
arr.push(4)
puts arr`, 
answers: [

`# Push mutates the array
[1,2,3,4]`,

`# Push does NOT mutate the array
[1,2,3]`
],
correct: 0,
resources: "https://ruby-doc.org/core-2.4.1/Array.html#method-i-push",
metadata: {
    language: ["Ruby"],
    tags: ["array", "mutation"],
},
},
{
title: "Ruby array mutations - pop",
question: `
What is it going to output?
arr = [1,2,3]
arr.pop
puts arr`,
answers: [

`# pop mutates the array
[1,2]`,

`# pop does NOT mutate the array
[1,2,3]`

],
correct: 0,
resources: "https://ruby-doc.org/core-2.4.1/Array.html#method-i-pop",
metadata: {
    language: ["Ruby"],
    tags: ["array", "mutation"],
},
},
]

export default data