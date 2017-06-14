import React from "react"
import Minesweeper from "./Minesweeper"
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import { cellSize, gridWidth, gridHeight, mineFrequency } from "./data"

describe("30 days - Minesweeper", () => {
    const component = mount(<Minesweeper />)

    test("Board contains cells", () => {
        expect(component.find(".minesweeper__cell--hidden").length).toEqual(gridHeight * gridWidth)
    })

    test("cells can be revealed", () => {
        const cellId = `.minesweeper__cell-0x-0y`
        const cell = component.find(cellId)
        
        expect(cell.hasClass("minesweeper__cell--hidden")).toBe(true)
        expect(cell.hasClass("minesweeper__cell--revealed")).toBe(false)

        cell.simulate("click")

        expect(cell.hasClass("minesweeper__cell--hidden")).toBe(false)
        expect(cell.hasClass("minesweeper__cell--revealed")).toBe(true)
    })
    
    // Iterate over each cell
    // This added an extra 90s to the tests, so it's been replaced by a singleton
    // for(let y = 0; y < gridHeight; y++) {
    //     for(let x = 0; x < gridWidth; x++) {
    //         test(`cell ${x * 20} x ${y * 20}`, () => {
    //             const cellId = `.minesweeper__cell-${x * 20}x-${y * 20}y`
    //             const cell = component.find(cellId)
    //             expect(cell.hasClass("minesweeper__cell--hidden")).toBe(true)
    //             expect(cell.hasClass("minesweeper__cell--revealed")).toBe(false)
                
    //             cell.simulate("click")

    //             expect(cell.hasClass("minesweeper__cell--hidden")).toBe(false)
    //             // expect(cell.hasClass("minesweeper__cell--revealed")).toBe(true)
    //         })
    //     }
    // }
})