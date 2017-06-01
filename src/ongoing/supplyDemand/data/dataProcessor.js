const _ = require("lodash")
const math = require("mathjs")
const titles = [
    "June-02-2017",
    "May-28-2017",
]
const samples = titles.map(title => require(`./${title.toLowerCase()}`).default)

let processed = samples.map(sample => {
    let jobs = sample.map(ln => ln.jobs)
    let seekers = sample.map(ln => ln.seekers)

    let average = {
        jobs: _.round(_.meanBy(sample, "jobs"),2),
        seekers: _.round(_.meanBy(sample, "seekers"),2),
        jobStd: math.std(jobs),
        seekersStd: math.std(seekers),
    }

    function addFields() {
        return sample.map(ln => {
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

    let processedSample = addFields()

    function sortBy(a,b) {
        const field = "handicappedJtoS"
        const asc = false

        if (a[field] < b[field]) { return asc ? -1 : 1 }
        if (a[field] > b[field]) { return asc ? 1 : -1 }
        return 0
    }

    return processedSample.sort(sortBy)
})
processed = processed.map((original, key) => {
    return {title: titles[key], data: original}
})

export default processed