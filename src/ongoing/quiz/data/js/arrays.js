/* eslint-disable */
const data = [
{
title: "Javascript array mutations - push",
question: `
What is the output?
let arr = [1,2,3]
arr.push(4)
console.log(arr)`, 
answers: [

`# Push mutates the array
[1,2,3,4]`,

`# Push does NOT mutate the array
[1,2,3]`
],
correct: 0,
resources: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=control",
metadata: {
    language: ["Javascript"],
    tags: ["array", "mutation"],
},
},
{
title: "Javascript array mutations - pop",
question: `
What is it going to output?
arr = [1,2,3]
arr.pop()
console.log(arr)`,
answers: [

`# pop mutates the array
[1,2]`,

`# pop does NOT mutate the array
[1,2,3]`

],
correct: 0,
resources: "https://ruby-doc.org/core-2.4.1/Array.html#method-i-pop",
metadata: {
    language: ["Javascript"],
    tags: ["array", "mutation"],
},
},
]

export default data

/*
{
title: "",
question: ``, 
answers: [``,``,``,``],
correct: 0,
resources: "",
metadata: {
    language: ["css"],
    tags: ["frontend", "styles"],
},
},
*/