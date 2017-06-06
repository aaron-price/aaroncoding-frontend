import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import checkMobile from "../../checkMobile"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Paper from "material-ui/Paper"
import { Link } from "react-router-dom"
/*
Props:
items should be an array of objects, each with a title, and uri.
Optionally pass the URL of a logo image as the logo prop
Optionally pass it a "name" string, and get access to a bunch of custom classes.
    ${name}-menu-wrapper
    ${name}-logo-wrapper
    ${name}-buttons-wrapper
*/
const logo = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/generic/generic_logo.png"

class MenuContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            smallScreen: true || checkMobile().smallScreen,
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    render() {
        const name = this.props.name || "Generic"
        const nameLow = name.toLowerCase()

        return (
            <div>
                {
                    this.props.smallScreen
                    ? <Mobile name={nameLow} items={this.props.items} logo={this.props.logo || logo} open={this.state.open} handleToggle={this.handleToggle}/>
                    : <Desktop name={nameLow} items={this.props.items} logo={this.props.logo || logo}/>
                }
            </div>
        )
    }
}

MenuContainer.propTypes = {
    smallScreen: PropTypes.bool.isRequired,
    items: PropTypes.array,
    name: PropTypes.string,
    logo: PropTypes.string,
}
const mapStateToProps = (state) => {
    return {
        smallScreen: state.get("smallScreen"),
    }
}
export default connect(mapStateToProps)(MenuContainer)

const Mobile = props => {
    const name = props.name

    return (
        <Paper
            className={`${name}-menu-wrapper-mobile`}
            style={{top: props.open ? "0" : "-10em"}}>
            <ul className={`${name}-menu-ul-mobile`}>
                {props.items.map((item, key) => {
                    return (
                        <li key={key}><Link to={item.uri}><RaisedButton
                            className="contentdj-menu-item-mobile"
                            backgroundColor="#43A047"
                            labelColor="#FFF"
                            label={item.title}
                        /></Link></li>
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
Mobile.propTypes = {
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
}

const Desktop = props => {
    const name = props.name
    return (
        <div className={`${name}-menu-wrapper`}>

            <div className={`${name}-logo-wrapper`}>
                <img
                    alt={name}
                    src={props.logo}/>
            </div>
            <div className={`${name}-buttons-wrapper`}>
                {props.items.map((item, key) => {
                    return <Link to={item.uri}><RaisedButton
                        key={key}
                        backgroundColor="#43A047"
                        labelColor="#FFF"
                        label={item.title} /></Link>
                })}
            </div>
        </div>
    )
}
Desktop.propTypes = {
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
}