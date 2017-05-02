const jsdom = require('jsdom');
let chai = require('chai')
const should = require("chai").should();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

function simulation(dom, wall) {
       const currentWall = dom.window.document.getElementsByClassName(`${wall}Wall`)[0]
       return currentWall.tagName === "rect" ? true : false;
}
let walls = ["left", "right","top","bottom"]
describe("The SVG elements", () => {
    walls.map((wall) => { 
        it(`should have a ${wall} wall`, () => {
              const { JSDOM } = jsdom;
              return JSDOM.fromFile("index.html",{runScripts: "dangerously", resources: "usable"})
                          .then(dom => simulation(dom, wall))
                          .should.eventually.be.true
        })
    })
})

function ballSimulation(dom) {
    const ball = dom.window.document.getElementsByClassName(`ball`)[0]
    return ball.tagName === "circle" ? true : false;
}

describe("The ball", () => {
    it(`should render a ball`, () => {
        const { JSDOM } = jsdom;
        return JSDOM.fromFile("index.html", {runScripts: "dangerously", resources: "usable"})
                    .then(dom => ballSimulation(dom))
                    .should.eventually.be.true
    })
})


