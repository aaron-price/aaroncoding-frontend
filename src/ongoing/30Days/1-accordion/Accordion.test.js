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
        expect(component.find(".accordion-item").length).toEqual(10)
        expect(component.find(".accordion-item-0").length).toEqual(1)
    })

    test("contains no inner divs if they're all hidden", () => {
        expect(component.find(".accordion-inner").length).toEqual(0)
    })

    test("contains an inner div if it's visible", () => {
        component.find(".accordion-outer-0").simulate("click")
        expect(component.find(".accordion-inner").length).toEqual(1)
    })
})