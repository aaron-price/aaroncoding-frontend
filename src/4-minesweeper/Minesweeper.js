import React, { Component } from "react"
import PropTypes from "prop-types"

const cellSize = 20
const gridWidth = 16
const gridHeight = 16
const mineFrequency = 0.01
let mineCount = 0
// Creates an array of random numbers. After page load, the numbers are immutable, but still random.
let boolRandArr = []
function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
for (let i = 0; i < (gridWidth * gridHeight); i++) {
    let randNum = between(0,9)
    boolRandArr.push(randNum)
    if (randNum <= mineFrequency) { mineCount += 1}
}

class Minesweeper extends Component {
    constructor() {
        super()
        this.state = { grid: [], victory: false }
        this.buildGrid = this.buildGrid.bind(this)
        this.revealer = this.revealer.bind(this)
    }

    componentDidMount() {
        this.buildGrid()
    }

    revealer(id, mine) {
        // Don't allow clicking on already revealed mines
        if (this.state.grid[id].value === "hidden") {

            // If player clicked a mine
            if (mine && !this.state.gameOver) {
                const newState = Object.assign({}, this.state)
                const newGrid = Object.assign(
                    {},
                    newState,
                    {...newState.grid[id].value = "revealed", gameOver: true}
                )
                this.setState(newGrid)
            } else if (!this.state.gameOver) {

                // Determine whether this click wins the game
                const safeCells = (gridWidth * gridHeight) - mineCount
                let victoryObj = {
                    gameOver: false,
                }
                if ((this.state.points + 1) >= safeCells) {
                    victoryObj = {
                        victory: true,
                        gameOver: false,
                    }
                }

                // Reveal the cell and add a point
                const newState = Object.assign({}, this.state)
                const newGrid = Object.assign(
                    {},
                    newState,
                    {
                        ...newState.grid[id].value = "revealed",
                        points: newState.points + 1,
                    },
                    victoryObj
                )

                this.setState(newGrid)
            }
        }
    }

    buildGrid() {
        let cellArray = [] // <-- Insert celery pun here
        for (let row = 0; row < gridWidth; row++) {
            for (let col = 0; col < gridHeight; col++) {
                let border = "none"
                if (col === 0) { border = "top" }
                if (col === gridHeight - 1) { border = "bottom" }
                cellArray.push({
                    x: row * cellSize,
                    y: col * cellSize,
                    value: "hidden",
                    border: border,
                })
            }
        }
        this.setState({grid: cellArray, points: 0, gameOver: false})
    }
    render() {
        return (
            <div className="minesweeper">
                <h1>Minesweeper</h1>
                <p>Points:
                    <span> {this.state.points} out of {(gridWidth * gridHeight) - mineCount}</span>
                    <span className="minesweeper__gameOver"> {this.state.gameOver && "GAME OVER"}</span>
                </p>
                {this.state.victory && <h1 className="minesweeper__victory">You won! Good game!</h1>}
                <svg className="container" x="0" y="0"
                     width={cellSize * gridWidth}
                     height={cellSize * gridHeight}
                     viewBox={`0 0 ${cellSize * gridWidth} ${cellSize * gridHeight}`}
                     xmlns="http://www.w3.org/2000/svg">
                    {this.state.grid.map((cell, key) => {
                        return (
                            <Cell key={key}
                                  x={cell.x}
                                  y={cell.y}
                                  value={cell.value}
                                  id={key}
                                  revealer={this.revealer}
                                  border={cell.border}
                            />)
                    })}
                </svg>
            </div>
        )
    }
}

function countNeighbours(id, border) {

    const upDir = -1
    const downDir = 1
    const leftDir = -gridHeight
    const rightDir = gridHeight

    const up = boolRandArr[id        + upDir                 ]
    const upLeft = boolRandArr[id    + upDir     + leftDir   ]
    const upRight = boolRandArr[id   + upDir     + rightDir  ]

    const down = boolRandArr[id      + downDir               ]
    const downLeft = boolRandArr[id  + downDir   + leftDir   ]
    const downRight = boolRandArr[id + downDir   + rightDir  ]

    const right = boolRandArr[id     + rightDir              ]
    const left = boolRandArr[id      + leftDir               ]
    let neighbourArr
    if (border === "top") {
        neighbourArr = [down, downLeft, downRight, right, left]
    }
    else if (border === "bottom") {
        neighbourArr = [up, upLeft, upRight, right, left]
    }
    else if (border === "none") {
        neighbourArr = [up, upLeft, upRight, down, downLeft, downRight, right, left]
    }


    let count = 0
    neighbourArr.forEach(neighbour => neighbour <= mineFrequency && count++)
    return count
}

export const Cell = props => {
    const mine = boolRandArr[props.id] <= mineFrequency
    const neighbours = mine ? "X" : countNeighbours(props.id, props.border)
    return (
        <g
            onClick={() => props.revealer(props.id, mine)}
            className={`minesweeper__cell--${props.value}`}
        >
            <rect
                className={`cell cell--${props.value}`}
                x={props.x}
                y={props.y}
                width="20"
                height="20"
                fill={props.value === "hidden" ? "#DDD" : "#AAA"}
                stroke="black"

            />
            <text x={props.x + (gridWidth / 2)}
                  y={props.y + (gridHeight)}
                  fontFamily="Verdana"
                  fontSize="15"
                  fill={!mine ? "green" : "red"}
            >{props.value !== "hidden" && neighbours}</text>
        </g>)
}
Cell.propTypes = {
    border: PropTypes.string.isRequired,
    revealer: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,

}

export default Minesweeper
