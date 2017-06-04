/* eslint-disable */
const data = [
{
title: "SQL Joins - Inner Join",
question: `
You have 2 tables: Users, and Scores

table Users has the columns: id, name
table Scores has the columns: uid, score

How would you get all of the names with their related scores?
`, 
answers: [

`
SELECT name, score
FROM Users
    INNER JOIN Scores
        WHERE Users.id = Scores.uid
`,
`
SELECT name, score
FROM Users
    INNER JOIN Scores
        AS Users.id = Scores.uid
`,
`
SELECT name, score
FROM Users
    INNER JOIN Scores
        ON Users.id = Scores.uid
`,
`
SELECT name, score
FROM Users
    INNER JOIN Scores
        WITH Users.id = Scores.uid
`,

],
correct: 2,
resources: "https://www.w3schools.com/sql/sql_join_inner.asp",
metadata: {
    language: ["sql"],
    tags: ["databases", "joins"],
},
},
]

export default data