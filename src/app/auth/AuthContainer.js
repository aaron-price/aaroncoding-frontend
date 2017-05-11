import React from "react"
import SignupForm from "./Signup"
import ListUsers from "./ListUsers"
import HiddenArea from "./HiddenArea"
import RaisedButton from "material-ui/RaisedButton"
import Login from "./Login"
import $ from "jquery"
import { connect } from "react-redux"
import { updateJwtToken } from "../../redux/actions/actionCreators"
import { fromJS } from "immutable"
import PropTypes from "prop-types"


class AuthContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.updateToken = this.updateToken.bind(this)
    }
    updateToken(tkn) {
        this.props.dispatchUpdateJwtToken(fromJS({newToken: tkn}))
    }
    logout(e) {
        console.log(this.props.jwtToken)
    }

    revealer() {
        $.ajax({
            url: "http://localhost:3001/api/book",
            method: "GET",
            headers: { "Authorization": this.props.jwtToken },
        }).done(res => {
            console.log(res)
            let msg = res.message
            msg ? this.setState({res: msg})
                : this.setState({res: "ERROR: " + msg})
        })

    }

    render() {
        return (
            <div>
                {this.props.jwtToken === "" ?
                    <Login updateToken={this.updateToken}/>
                :
                <RaisedButton
                    label="Logout"
                    secondary={true}
                    style={{margin: "1em"}}
                    onClick={(e) => this.logout(e)}/>
                }
                <hr />

                <SignupForm />
                <hr />

                <RaisedButton
                    label="See something hidden"
                    secondary={true}
                    style={{margin: "1em"}}
                    onClick={(e) => this.revealer(e)} />
                <hr />

                {/* <ListUsers />
                <hr /> */}

                <p>Logout</p>
            </div>
        )
    }
}
AuthContainer.propTypes = {
    jwtToken: PropTypes.string.isRequired,
    dispatchUpdateJwtToken: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        jwtToken: state.get("jwtToken"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateJwtToken(config) {
            dispatch(updateJwtToken(config))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)