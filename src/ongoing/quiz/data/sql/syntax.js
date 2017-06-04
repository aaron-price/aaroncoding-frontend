/* eslint-disable */
const data = [
{
title: "SQL Syntax - showing all the databases",
question: `
You just logged into your mysql terminal for the first time in months, and can't remember which databases you have. How do you get it to display them?
`, 
answers: [

`
SHOW DBS;
`,
`
SELECT * FROM DBS;
`,
`
SHOW DATABASES;
`,
`
SHOW * FROM DATABASES;
`,

],
correct: 2,
resources: "https://dev.mysql.com/doc/refman/5.7/en/show-databases.html",
metadata: {
    language: ["sql"],
    tags: ["databases", "syntax"],
},
},
{
title: "SQL Syntax - showing all the tables",
question: `
You just logged into your mysql terminal for the first time in months, and can't remember which tables you have. Assuming you already selected a database, how do you get it to display all the tables?
`, 
answers: [

`
SELECT TABLES FROM DATABASE;
`,
`
db.tables()
`,
`
SHOW * TABLES;
`,
`
SHOW TABLES;
`,

],
correct: 3,
resources: "https://dev.mysql.com/doc/refman/5.7/en/show-databases.html",
metadata: {
    language: ["sql"],
    tags: ["databases", "syntax"],
},
},
]

export default data