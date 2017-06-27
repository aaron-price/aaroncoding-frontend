import React from "react"
import { ContentDJ } from "./ContentDJ"
import { CTAHeader } from "./CTAHeader"
import { CTABody } from "./CTABody"
import renderer from "react-test-renderer"
import {shallow, mount} from "enzyme"

describe("Mockups - ContentDJ", () => {
    let Main   = shallow(<ContentDJ smallScreen={true} />)
    let Header = shallow(<CTAHeader smallScreen={true} />)
    let Body   = shallow(<CTABody   smallScreen={true} />)

    test("Main", () => {
        expect(Main.find("CTAHeader").exists()).toBe(true)
        expect(Main.find("CTABody").exists()).toBe(true)
    })
    test("Header", () => {
        // Mobile - no subheader
        Header.setProps({smallScreen: true})
        expect(Header.find(".contentDJ-header").exists()).toBe(true)
        expect(Header.find(".contentDJ-subheader").exists()).toBe(false)

        // Desktop - has subheader
        Header.setProps({smallScreen: false})
        expect(Header.find(".contentDJ-header").exists()).toBe(true)
        expect(Header.find(".contentDJ-subheader").exists()).toBe(true)
    })

    test("Body", () => {
        // mobile = full width vid
        Body.setProps({smallScreen: true})
        expect(Body.hasClass("contentDJ-body-video--mobile"))
        expect(Body.hasClass("contentDJ-body-text--mobile"))

        // desktop = 5/8 width vid
        Body.setProps({smallScreen: false})
        expect(Body.hasClass("contentDJ-body-video--desktop"))
        expect(Body.hasClass("contentDJ-body-text--desktop"))
    })
})