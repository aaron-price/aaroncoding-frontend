import React from "react"
import ReactDOM from "react-dom"
import Minesweeper  from "./Minesweeper"
import { mount } from "enzyme"

const cellSize = 20
const gridWidth = 16
const gridHeight = 16

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Minesweeper />, div)
})

test("Hold the grid in state", () => {
    const component = mount(
        <Minesweeper />
    )

    // Cell 0, 0
    expect(component.state().grid[0]).toEqual({ border:"top", x: 0, y: 0, value: "hidden"})

    // Cell 10, 10
    expect(component.state().grid[(gridHeight * gridWidth) - 1]).toEqual({
        border: "bottom",
        x: (cellSize * gridWidth) - cellSize,
        y: (cellSize * gridHeight) - cellSize,
        value: "hidden"})
})

test("The value of a cell should change when clicked", () => {
    const board = mount(<Minesweeper />)
    // First one starts hidden
    expect(board.state().grid[0]).toEqual({ border:"top", x: 0, y: 0, value: "hidden" })
    // After click...
    board.instance().revealer(0)
    // It is now revealed
    expect(board.state().grid[0]).toEqual({ border:"top", x: 0, y: 0, value: "revealed"})
})
test("Cell can contain a mine", () => {
    const board = mount(<Minesweeper />)
    // let cell = board.state().grid[0]
    // expect(cell).toEqual({x: 0, y: 0, value: "hidden"})

})