import React from "react"
import Paper from "material-ui/Paper"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"
import _ from "lodash"
import { data, languages } from "./data"
import QuizView from "./QuizView"
import Filters from "./Filters"
import { setStorage, getStorage, resetStorage, findNext, buildFilters } from "./quizHelpers"

class QuizRunner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current_drill: findNext(-1, buildFilters(languages), data),
            past_drills: [],
            problem_tags: [],
            problem_languages: [],
            wrong: false,
            filters: buildFilters(languages),
            showFilters: false,
            previousAnswer: "",
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.clearWrong = this.clearWrong.bind(this)
        this.updateFilters = this.updateFilters.bind(this)
    }
    resetGame(data) {
        data.forEach((d,id) => localStorage.removeItem(`aaroncoding_completed_drill_${id}`))
        const first_safe_drill = findNext(-1, this.state.filters, data)
        let newState = this.state
        newState.current_drill = first_safe_drill
        newState.past_drills = []
        this.setState(newState)
    }
    showHideFilters() {
        const oldStatus = this.state.showFilters
        const newState = this.state
        newState.showFilters = !oldStatus
        this.setState(newState)
    }
    // When users wants to allow or disallow a filter
    updateFilters(name) {
        const oldFilter = this.state.filters[name]
        const newState = this.state
        newState.filters[name] = oldFilter === "allowed" ? "disallowed" : "allowed"
        // If this toggle affects the current drill, it should find a different one
        newState.current_drill = findNext(newState.current_drill - 1, newState.filters, data)
        this.setState(newState)
    }
    // Takes in the user's answer, updates everything accordingly
    clickHandler(i) {
        const id = this.state.current_drill
        const drill = data[id]
        const correct = i === drill.correct
        const st = this.state
        const filters = this.state.filters

        setStorage(id, correct)
        const newState = {
            current_drill: correct ? findNext(id, filters, data) : st.current_drill,
            past_drills: [...st.past_drills, {id, correct}],
            problem_tags: st.problem_tags,
            problem_languages: st.problem_languages,
            wrong: !correct,
            previousAnswer: drill.answers[i],
        }
        this.setState(newState)
    }
    // After a wrong answer is given, the next question is delayed. This lets the user continue.
    clearWrong() {
        this.setState(prevState => ({
            wrong: false,
            current_drill: ++prevState.current_drill,
        }))
    }

    render() {
        let correctCount = 0
        let drillsSoFar = this.state.past_drills.length
        let totalDrills = data.length
        this.state.past_drills.forEach(drill => {
            if (drill.correct) { correctCount += 1 }
        })
        return (
            <div>
                <Paper  className="padded-paper">
                    <div>Correct: {correctCount} / {drillsSoFar} - but there are {totalDrills} in total</div>
                    <RaisedButton onClick={() => this.resetGame(data)}>Reset game</RaisedButton>
                    {/* This lets you filter things by language.
                        It's buggy and I'm not sure it's a good feature to have in the first place.
                        Commenting out for now
                    <RaisedButton onClick={() => this.showHideFilters()}>
                        {this.state.showFilters ? "hide filters" : "show filters"}
                    </RaisedButton>*/}
                </Paper>
                {
                    this.state.showFilters &&
                    <Filters filters={this.state.filters} updateFilters={this.updateFilters} />
                }
                {
                    this.state.current_drill !== -1 &&
                    this.state.current_drill < data.length ? (
                    <QuizView
                        clickHandler={this.clickHandler}
                        drill={data[this.state.current_drill]}
                        wrong={this.state.wrong}
                        clearWrong={this.clearWrong}
                        previousAnswer={this.state.previousAnswer}
                    />
                ) : (
                    <h1>That's it, you already did them all! Well done!</h1>
                )}
            </div>
        )
    }
}

export default QuizRunner