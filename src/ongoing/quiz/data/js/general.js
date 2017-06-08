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