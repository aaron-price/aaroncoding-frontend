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
    language: ["js"],
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
    language: ["js"],
    tags: ["array", "mutation"],
},
},
{
title: "Javascript array concatenation",
question: `What's the output of the following:

var a = [1,2]
var b = [3,4]
var c = a + b

console.log(c)
`, 
answers: [
`// The + operator is not defined for arrays, so it coerces them into strings first
"1,23,4"`,
`// The + operator is not defined for arrays, so it coerces them into numbers and adds them
10`,
`// The + operator is not defined for arrays, so it coerces them into strings first
"[1,2][3,4]"`,
`// The + operator is not defined for arrays, so the compiler make an assumption about what you want
[1,2,3,4]`
],
correct: 0,
resources: "https://stackoverflow.com/questions/7124884/why-is-1-2-3-4-1-23-4-in-javascript",
metadata: {
    language: ["js"],
    tags: ["array"],
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
    language: ["js"],
    tags: ["array"],
},
},
*/