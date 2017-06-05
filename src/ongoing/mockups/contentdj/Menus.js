import React from "react"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"

const ContentDJMenuMobile = props => {
    const name = props.name

    return (
        <Paper
            className={`${name}-menu-wrapper-mobile`}
            style={{top: props.open ? "0" : "-10em"}}>
            <ul className="contentdj-menu-ul-mobile">
                {props.items.map((item, key) => {
                    return (
                        <li key={key}><RaisedButton
                            className="contentdj-menu-item-mobile"
                            backgroundColor="#43A047"
                            labelColor="#FFF"
                            label={item}
                        /></li>
                    )
                })}
                <li><RaisedButton
                    className="contentdj-menu-item-mobile"
                    backgroundColor="#FFF"
                    labelColor="#000"
                    onClick={() => props.handleToggle()}
                    label={props.open ? "Close Menu" : "Open Menu"} /></li>
            </ul>
        </Paper>
    )
}
ContentDJMenuMobile.propTypes = {
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
}

const ContentDJMenu = props => {
    const name = props.name
    return (
        <div className={`${name}-menu-wrapper`}>

            <div className={`${name}-logo-wrapper`}>
                <img
                    alt={name}
                    src={`https://s3-us-west-2.amazonaws.com/aaroncoding/images/mockups/${name}/${name}_logo.png`}/>
            </div>
            <div className={`${name}-buttons-wrapper`}>
                {props.items.map((item, key) => {
                    return <RaisedButton
                        key={key}
                        backgroundColor="#43A047"
                        labelColor="#FFF"
                        label={item} />
                })}
            </div>
        </div>
    )
}
ContentDJMenu.propTypes = {
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
}

module.exports = {
    ContentDJMenu,
    ContentDJMenuMobile,
}