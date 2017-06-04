/* eslint-disable */
const data = [
{
title: "Mongodb Syntax - showing all the databases",
question: `
You just logged into your mongodb shell for the first time in months, and can't remember which databases you have. How do you get it to display them?
`, 
answers: [

`
db.find()
`,
`
db.findAll()
`,
`
show * dbs
`,
`
show dbs
`,

],
correct: 3,
resources: "https://docs.mongodb.com/manual/reference/mongo-shell/",
metadata: {
    language: ["nosql"],
    tags: ["databases", "syntax", "mongo"],
},
},
{
title: "Mongodb Syntax - showing all the collections",
question: `
You just logged into your mongo shell for the first time in months, and can't remember which collections you have. Assuming you already selected a database, how do you get it to display all the collections?
`, 
answers: [

`
show collections;
`,
`
show.all();
`,
`
db.collections()
`,
`
db.collections.all()
`,

],
correct: 0,
resources: "https://dev.mysql.com/doc/refman/5.7/en/show-databases.html",
metadata: {
    language: ["nosql"],
    tags: ["databases", "syntax", "mongo"],
},
},
{
title: "Mongodb Syntax - showing all the documents",
question: `
You just logged into your mongo shell, selected a database, and need to see all the documents in the "users" collection. What do you do?
`, 
answers: [

`
users.show()
`,
`
users.find()
`,
`
users.findAll()
`,
`
db.users.show()
`,
`
db.users.find()
`,
`
db.users.findAll()
`,

],
correct: 4,
resources: "https://dev.mysql.com/doc/refman/5.7/en/show-databases.html",
metadata: {
    language: ["nosql"],
    tags: ["databases", "syntax", "mongo"],
},
},
{
title: "Mongodb - filtering",
question: `
Consider a collection of posts which has documents like so: 
posts: [
  {
    _id: 0,
    post_text: "",
    post_author: "",
    post_timestamp: "",
    post_tags: ""
  }
]

Which of the following queries retrieves all the posts where the post_author is "Aaron Price"?
`, 
answers: [
`db.posts.find({"post_author" = "Aaron Price"})`,
`db.posts.find({"post_author"} = {"Aaron Price"})`,
`db.posts.find({"post_author" : "Aaron Price"})`,
`db.posts.find({"post_author"} : {"Aaron Price"})`
],
correct: 2,
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
    language: ["nosql"],
    tags: ["mongo", "databases", "syntax"],
},
},
*/