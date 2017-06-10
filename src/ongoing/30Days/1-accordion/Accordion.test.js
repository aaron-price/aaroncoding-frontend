import React from "react"
import Accordion from "./Accordion"
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe("30 days - accordion", () => {
    const component = shallow(<Accordion />)

    test("contains the Intro text", () => {
        expect(component.text()).toContain("Accordion")
    })

    test("contains the outer divs", () => {
        // @TODO
    })

    test("contains the inner divs", () => {
        // @TODO
    })
})