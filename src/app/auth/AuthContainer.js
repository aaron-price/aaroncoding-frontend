import React from "react"
import SignupForm from "./Signup"
import RaisedButton from "material-ui/RaisedButton"
import Login from "./Login"
import $ from "jquery"
import { connect } from "react-redux"
import { updateJwtToken, updateUser } from "../../redux/actions/actionCreators"
import { fromJS } from "immutable"
import PropTypes from "prop-types"


class AuthContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { action: "login" }
        this.updateToken = this.updateToken.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }
    updateToken(tkn) {
        this.props.dispatchUpdateJwtToken(fromJS({newToken: tkn}))
    }
    updateUser(u) {
        this.props.dispatchUpdateUser(fromJS({user: {username: u}}))
    }

    revealer() {
        $.ajax({
            url: "https://aaroncoding-backend.herokuapp.com/api/book",
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
                {this.props.user.get("username") !== ""
                    ? <p>Welcome back, {this.props.user.get("username")}!</p>
                    : <p>You need to login</p>
                }
                {this.props.jwtToken === "" ?
                    <Login
                        updateToken={this.updateToken}
                        updateUser={this.updateUser}
                    />
                :
                <RaisedButton
                    label="Logout"
                    secondary={true}
                    style={{margin: "1em"}}
                    onClick={(e) => this.updateToken("")}/>
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
            </div>
        )
    }
}
AuthContainer.propTypes = {
    jwtToken: PropTypes.string.isRequired,
    dispatchUpdateJwtToken: PropTypes.func.isRequired,
    dispatchUpdateUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        jwtToken: state.get("jwtToken"),
        user: state.get("user"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateJwtToken(config) {
            dispatch(updateJwtToken(config))
        },
        dispatchUpdateUser(config) {
            dispatch(updateUser(config))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)