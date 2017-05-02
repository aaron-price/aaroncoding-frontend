const jsdom = require('jsdom');
let chai = require('chai')
const should = require("chai").should();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

function simulation(dom, field) {
    let title = dom.window.document.getElementsByClassName(`form__${field}`)[0];
    return title.name;
}
let fieldsArray = ["name", "password"]
describe('Form is created', () => {
       fieldsArray.map(field => { 
            it(`should show a ${field} field`, () => {
                const { JSDOM } = jsdom;
                return JSDOM.fromFile("index.html",{runScripts: "dangerously", resources: "usable"})
                     .then(dom => simulation(dom, field))
                    .should.eventually.equal(field);
            })
        });
});
