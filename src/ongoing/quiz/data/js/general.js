/* eslint-disable */
const data = [
{
title: "JS from Html",
question: `
Given the following embedded script:
<!DOCTYPE html>
<head>
  <script type="text/javascript">
    function message() {
      alert("'Ello Gov'nor!")
    }
  </script>
</head>
...

What would cause the alert popup to appear?
`, 
answers: [
`<body onload="message()"></body>`,
`<body onload="message"></body>`,
`It will happen on page load without any extra work`
],
correct: 0,
resources: "https://www.w3schools.com/jsref/event_onload.asp",
metadata: {
    language: ["js"],
    tags: ["frontend", "styles"],
},
},
{
title: "Cookies",
question: `How do you check whether the user's cookes are enabled?`, 
answers: [`navigator.Cookie`,`application.cookieEnabled`,`navigator.cookieEnabled`,`application.cookie`],
correct: 2,
resources: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled",
metadata: {
    language: ["js"],
    tags: ["frontend", "sessions"],
},
},
{
title: "JS Variable Definitions",
question: `
Suppose this is your entire script:

___________________
1 var a
2 var b = "hello"
3
4 console.log(a)
5 console.log(b)
6 console.log(c)
___________________

What will be the output?
`, 
answers: [
`
undefined
"hello"
Uncaught ReferenceError: c is not defined
`,
`
Uncaught ReferenceError: c is not defined
"hello"
undefined
`,`
undefined
"hello"
undefined
`,`
undefined
"hello"
`,`
"hello"
undefined
`],
correct: 0,
resources: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined",
metadata: {
    language: ["js"],
    tags: ["frontend", "bad parts"],
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
    tags: ["frontend"],
},
},
*/