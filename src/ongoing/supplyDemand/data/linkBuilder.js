// pass a string. If multiple words to match, separate with spaces.
function monthBuilder(q) {
    const jobs = q.split(" ").join("+")
    const seekers = q.split(" ").join("+OR+")
    console.log(`https://ca.indeed.com/jobs?as_and=&as_phr=&as_any=${jobs}&as_not=&as_ttl=&as_cmp=&jt=all&st=&salary=&radius=50&l=Vancouver%2C+BC&fromage=30&limit=50&sort=&psf=advsrch`)
    console.log(`https://www.indeed.com/resumes?q=%28${seekers}%29&l=Vancouver%2C+BC&co=CA&lmd=month`)
}

const words = [
    "javascript react react.js reactjs nosql node nodejs node.js mongo mongodb mongo.db",
    "php apache wordpress mysql sql javascript",
    "ruby rails postgress sql javascript",
    "javascript angular angular.js angularjs nosql node nodejs node.js mongo mongodb mongo.db",
    "python django sql mysql javascript",
]

words.forEach(word => monthBuilder(word))