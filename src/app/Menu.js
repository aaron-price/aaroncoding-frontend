import React from "react"
import "./App.scss"
import { Link } from "react-router-dom"
import contents from "../contents"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"
import MenuBar from "../15-menuBar/MenuBar"

function linkFactory(stateContent, contents) {
    return contents.map((content, key) => {
        const title = content.get("title")
        const show = stateContent.filter(item => item.get("title") === title).get(0).get("show")
        if (show) {
                // If it has a React component, link to that
            return content.get("component") !== undefined
                ? <li key={key}><Link to={`/${content.get("title").toLowerCase()}`}
            >day {content.get("day")} {content.get("title")}</Link> </li>

                // If no React component, just load the html
                : <li key={key}><a href={`/../${content.get("day")}-${content.get("title").toLowerCase()}/index.html`}
            >day {content.get("day")} {content.get("title")}</a> </li>
        } else {
            return <span key={key}></span>
        }
    })
}

const Menu = props => {
    return (
        <div className={`header header--${props.headerColor}`}>
            <MenuBar />
        </div>
    )
}
Menu.propTypes = {
    headerColor: PropTypes.string,
    stateContent: ImmutablePropTypes.list,
}


const mapStateToProps = (state) => {
    return {
        headerColor: state.get("headerColor"),
        stateContent: state.get("content"),
    }
}

export default connect(mapStateToProps)(Menu)