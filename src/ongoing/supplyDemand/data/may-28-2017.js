const _ = require("lodash")
const math = require("mathjs")

let languages = [
    {
        name: ".net",
        jobs: 95,
        seekers: 66,
    },
    {
        name: "angular",
        jobs: 21,
        seekers: 9,
    },
    {
        name: "C#",
        jobs: 52,
        seekers: 33,
    },
    {
        name: "django",
        jobs: 3,
        seekers: 2,
    },
    {
        name: "Java",
        jobs: 197,
        seekers: 72,
    },
    {
        name: "Javascript",
        jobs: 117,
        seekers: 58,
    },
    {
        name: "mongodb",
        jobs: 6,
        seekers: 9,
    },
    {
        name: "mysql",
        jobs: 42,
        seekers: 35,
    },
    {
        name: "oracle",
        jobs: 45,
        seekers: 58,
    },
    {
        name: "php",
        jobs: 33,
        seekers: 32,
    },
    {
        name: "python",
        jobs: 83,
        seekers: 54,
    },
    {
        name: "rails",
        jobs: 31,
        seekers: 30,
    },
    {
        name: "react",
        jobs: 31,
        seekers: 8,
    },
    {
        name: "ruby",
        jobs: 25,
        seekers: 14,
    },
    {
        name: "SQL",
        jobs: 118,
        seekers: 90,
    },
    {
        name: "ui",
        jobs: 39,
        seekers: 24,
    },
    {
        name: "ux",
        jobs: 39,
        seekers: 23,
    },
    {
        name: "Wordpress",
        jobs: 31,
        seekers: 54,
    },
    {
        name: "api",
        jobs: 50,
        seekers: 24,
    },
    {
        name: "dba",
        jobs: 55,
        seekers: 9,
    },
    {
        name: "database",
        jobs: 296,
        seekers: 223,
    },
    {
        name: "html",
        jobs: 90,
        seekers: 98,
    },
    {
        name: "css",
        jobs: 80,
        seekers: 69,
    },
    {
        name: "Node",
        jobs: 10,
        seekers: 21,
    },
    {
        name: "apache",
        jobs: 17,
        seekers: 17,
    },
    {
        name: "Web design",
        jobs: 171,
        seekers: 116,
    },
    {
        name: "Graphic design",
        jobs: 79,
        seekers: 87,
    },
    {
        name: "Web developer",
        jobs: 103,
        seekers: 61,
    },
    {
        name: "TDD",
        jobs: 13,
        seekers: 4,
    },
    {
        name: "Full Stack",
        jobs: 13,
        seekers: 4,
    },
    {
        name: "Frontend",
        jobs: 8,
        seekers: 5,
    },
    {
        name: "Backend",
        jobs: 27,
        seekers: 15,
    },
    {
        name: "Ajax",
        jobs: 14,
        seekers: 15,
    },
    {
        name: "NoSql",
        jobs: 40,
        seekers: 5,
    },
]

let jobs = languages.map(ln => ln.jobs)
let seekers = languages.map(ln => ln.seekers)

let average = {
    jobs: _.round(_.meanBy(languages, "jobs"),2),
    seekers: _.round(_.meanBy(languages, "seekers"),2),
    jobStd: math.std(jobs),
    seekersStd: math.std(seekers),
}


function addFields() {
    return languages.map(ln => {
        const JobStd = ln.jobs / average.jobStd
        const SeekerStd = ln.seekers / average.seekersStd

        return Object.assign(
            ln,
            {JtoS: _.round(ln.jobs / ln.seekers, 2)},
            {JobStd: _.round(JobStd,2)},
            {SeekerStd: _.round(SeekerStd,2)},
            {handicappedJtoS: _.round((JobStd * ln.jobs) / (SeekerStd * ln.seekers),2)},
        )
    })
}

languages = addFields()

function sortBy(a,b) {
    const field = "handicappedJtoS"
    const asc = false

    if (a[field] < b[field]) { return asc ? -1 : 1 }
    if (a[field] > b[field]) { return asc ? 1 : -1 }
    return 0
}

languages = languages.sort(sortBy)

export default languages
