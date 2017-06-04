/* eslint-disable */
const data = [
{
title: "HTML abbr tag",
question: `What does the <abbr> tag do?`,
answers: [`
Automatically Compresses several words inside it into an abbreviation
for example 
  <abbr>Aaron Coding</abbr> 
...would display as "AC"
`,
`
Lets you define an abbreviated alt text, similar to an <img>
<abbr alt="AC">Aaron Coding</abbr>
And displays "AC" by default, with "Aaron Coding" visible upon mouse hover.
`,
`
Lets you define an abbreviated alt text, similar to an <img>
<abbr title="AC">Aaron Coding</abbr>
And displays the title "AC" by default, with "Aaron Coding" visible upon mouse hover.
`,
`
Lets you define a full alt text for an abbreviation, similar to an <img>
<abbr title="Aaron Coding">AC</abbr>
And displays contents "AC" by default, with "Aaron Coding" visible upon mouse hover.
`],
correct: 3,
resources: "",
metadata: {
    language: ["css"],
    tags: ["frontend", "styles"],
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