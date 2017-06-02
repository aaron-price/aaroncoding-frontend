// pass a string. If multiple words to match, separate with spaces.
function monthBuilder(q) {
    const jobs = q.split(" ").join("+")
    const seekers = q.split(" ").join("+OR+")
    console.log(`https://ca.indeed.com/jobs?as_and=&as_phr=&as_any=${jobs}&as_not=&as_ttl=&as_cmp=&jt=all&st=&salary=&radius=50&l=Vancouver%2C+BC&fromage=30&limit=50&sort=&psf=advsrch`)
    console.log(`https://www.indeed.com/resumes?q=%28${seekers}%29&l=Vancouver%2C+BC&co=CA&lmd=month`)
}

const words = [
    "postgresql postgres",
    "mongodb mongo",
    "couchdb",
    "sql",
    "nosql",
    "ruby rails",
    "node nodejs node.js",
    "javascript js",
    "angular angularjs angular.js",
    "php",
    "wordpress",
]

words.forEach(word => monthBuilder(word))