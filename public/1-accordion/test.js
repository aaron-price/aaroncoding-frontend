const jsdom = require('jsdom');
let chai = require('chai')
const should = require("chai").should();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

function simulation(dom, i, clicked) {
    let title = dom.window.document.getElementsByClassName("title")[i - 1];
    clicked && title.click();

    let el = dom.window.document.getElementsByClassName("body")[i - 1];
    let visible = el.style.display;
    return visible === "initial" ? "visible" : "hidden";
}

describe('HTML renders correctly', () => {
    for(var i = 1; i <= 4; ++i){
        it(`should show item ${i} when clicked`, () => {
            const { JSDOM } = jsdom;
            return JSDOM.fromFile("index.html",{runScripts: "dangerously", resources: "usable"})
                .then(dom => simulation(dom, i - 1, true))
                .should.eventually.equal("visible");
        })
        it(`should hide item ${i} when NOT clicked`, () => {
            const { JSDOM } = jsdom;
            return JSDOM.fromFile("index.html",{runScripts: "dangerously", resources: "usable"})
                .then(dom => simulation(dom, i - 1, false))
                .should.eventually.equal("hidden");
        })
    }

});