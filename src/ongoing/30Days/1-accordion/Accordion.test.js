import React from "react"
import Accordion from "./Accordion"
import renderer from "react-test-renderer"
import {shallow} from "enzyme"

describe("30 days - accordion", () => {
    let component

    beforeEach(() => {
        component = shallow(<Accordion />)
    })

    // Iterate over each item
    for (let i = 0; i < 10; i++) {
        test("contains the outer div: " + i, () => {
            expect(component.find(`.accordion-item-${i}`).exists()).toBe(true)
        })
    }

    test("contains an inner div if it's visible", () => {
        for (let i = 0; i < 10; i++) {
            // inner div starts out hidden
            expect(component.find(`.accordion-inner-${i}`).exists()).toBe(false)
            // Then we open it
            component.find(`.accordion-outer-${i}`).simulate("click")
            // And now it's visible
            expect(component.find(`.accordion-inner-${i}`).exists()).toBe(true)
            expect(component.find(".accordion-inner").length).toEqual(i + 1)
        }
    })
})