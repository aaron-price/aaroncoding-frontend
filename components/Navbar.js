import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Navbar, Nav, NavItem } from 'reactstrap'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Logo from './LogoCompact.js'

import {
    create_user_permission,
    list_user_permission,
    details_user_permission,
    update_user_permission,
    delete_user_permission } from '../services/permissions.js'

// Home
const HomeLinkMobile = (props) => {
    return <MenuItem className='homelink--mobile' href='/'>Home</MenuItem>
}
const HomeLinkDesktop = (props) => {
    return <RaisedButton
                className='homelink--desktop menubar__button--link'
                label='Home'
                href='/' />
}

// User Auth
const UserLinkMobile = props => {
    let current_user = props.current_user
    let profile = { owner: current_user.id }

    let details_perm = details_user_permission(current_user, profile)
    let update_perm = update_user_permission(current_user, profile)
    let delete_perm = delete_user_permission(current_user, profile)
    let has_permission = (details_perm || update_perm || delete_perm)

    if (has_permission && props.authenticated) {
        return (
            <MenuItem href={`/user/${props.current_user.id}`}>
                    {props.current_user.name}
            </MenuItem>
        )
    } else {
      return <span></span>
    }
}
const UserLinkDesktop = props => {
    let current_user = props.current_user
    let profile = { owner: current_user.id }

    let details_perm = details_user_permission(current_user, profile)
    let update_perm = update_user_permission(current_user, profile)
    let delete_perm = delete_user_permission(current_user, profile)
    let has_permission = (details_perm || update_perm || delete_perm)

    if (has_permission && props.authenticated) {
        return (
            <RaisedButton
                className='menubar__button--link userlink--desktop'
                label={props.current_user.name}
                href={`/user/${props.current_user.id}`}/>
        )
    } else {
      return <span></span>
    }
}

const LoginLinkMobile = props => {
    if (!props.authenticated) {
        return <MenuItem href='/login' className='menubar__button--link'>Login</MenuItem>
    } else {
      return <span></span>
    }
}
const LoginLinkDesktop = props => {
    if (!props.authenticated) {
        return (
				    <RaisedButton
                href='/login'
                label='login'
                className='menubar__button--link' />
        )
    } else {
      return <span></span>
    }
}

const LogoutLinkMobile = props => {
    if (props.authenticated) {
        return (
            <MenuItem
              onClick={() => props.logout()}
              className='menubar__button--link'>Logout</MenuItem>
        )
    } else {
      return <span></span>
    }
}
const LogoutLinkDesktop = props => {
    if (props.authenticated) {
        return (
            <RaisedButton
                className='menubar__button--link'
                label='Logout'
                onClick={() => props.logout()} />
        )
    } else {
      return <span></span>
    }
}


const SignupLinkMobile = props => {
    if (create_user_permission(props.current_user)) {
        return (
            <MenuItem href="/signup" className='menubar__button--link'>Signup</MenuItem>
        )
    } else {
      return <span></span>
    }
}
const SignupLinkDesktop = props => {
    if (create_user_permission(props.current_user)) {
        return (
            <RaisedButton href="/signup" className='menubar__button--link' label='Signup'/>
        )
    } else {
      return <span></span>
    }
}

const AboutMobile = props => {
    return (
        <MenuItem href="/about" className='menubar__button--link'>About</MenuItem>
    )
}
const AboutDesktop = props => {
    return (
        <RaisedButton href="/about" className='menubar__button--link' label='About'/>
    )
}
const ProjectsMobile = props => {
    return (
        <MenuItem href="/projects" className='menubar__button--link'>Projects</MenuItem>
    )
}
const ProjectsDesktop = props => {
    return (
        <RaisedButton href="/projects" className='menubar__button--link' label='Projects'/>
    )
}

// Content
const content_types = [
    {title: 'Users', permissions: list_user_permission},
]

const ContentLinksMobile = (props) => (
    <ul className="navbar-nav mr-auto">
        { content_types.map((item, key) => {
          let has_permission = true
          if ('permissions' in item) {
              has_permission = item.permissions(props.current_user)
          }
          if (has_permission) {
              const lower = item.title.toLowerCase()
                  return (
                      <li key={key}>
                          <MenuItem
                              href={`/${lower}`}
                              className='menubar__button--link'
                              >{item.title}</MenuItem>
                      </li>
                  )
          } else {
            return <span key={key}></span>
          }
        })}
    </ul>
)
const ContentLinksDesktop = (props) => (
    <ul className="navbar-nav mr-auto">
        { content_types.map((item, key) => {
          let has_permission = true
          if ('permissions' in item) {
              has_permission = item.permissions(props.current_user)
          }
          if (has_permission) {
              const lower = item.title.toLowerCase()
              return (
                  <li key={key}>
                      <RaisedButton
                          href={`/${lower}`}
                          className='menubar__button--link'
                          label={item.title} />
                  </li>
              )
          } else {
            return <span key={key}></span>
          }
        })}
    </ul>
)
//connect(state => state)(({ menu_color })(NavContainer)
class NavContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.current_user.name,
            id: this.props.current_user.id,
            isOpen: false,
        }
        this.update_user = this.update_user.bind(this)
        this.logout = this.logout.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    update_user(current_user) {
        this.setState({
            name: current_user.name,
            id: current_user.id
        })
    }
    logout() {
        fetch('/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            this.update_user({
                id: null,
                name: null
            })
            this.setState({ id: null, name: null })
            Router.push({pathname: '/', as: '/'})
        })
        .catch(e => console.error(e))
    }
    render() {
        let authenticated = !!this.state.id && !!this.state.name

        return (
          <Paper style={{
              backgroundColor: this.props.menu_color,
              minHeight: '3.5em' }}
              className='menubar__wrapper'>
              <MobileMenubar
                  current_user={this.props.current_user}
                  toggle={this.toggle}
                  isOpen={this.state.isOpen}
                  logout={this.logout}
                  authenticated={authenticated} />
              <DesktopMenubar
                  current_user={this.props.current_user}
                  authenticated={authenticated}
                  logout={this.logout} />
          </Paper>
        )
    }
}

const MobileMenubar = (props) => {
    let style = props.isOpen ? {} : {display: 'none'}
    return (
      <div className='menubar--mobile'>
          <Navbar className='menubar__button--regular' toggleable>
              <Nav navbar>
                  <NavItem>
                      <RaisedButton
                          label='Menu'
                          onClick={props.toggle} />
                  </NavItem>
              </Nav>
          </Navbar>
          <Drawer style={style} open={props.isOpen}>
              <RaisedButton
                  className='menubar__button--link menubar__button--close'
                  onClick={props.toggle}
                  label='Close (X)'
                  secondary={true} />
              <MenuItem
                  href='/'
                  className="menubar_logo--mobile"
                  innerDivStyle={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      width: '50%',
                      paddingTop: '1em'
                  }}>
                  <Logo width={7} unit="em"/>
              </MenuItem>
              <LogoutLinkMobile authenticated={props.authenticated} logout={props.logout}/>
              <UserLinkMobile authenticated={props.authenticated} current_user={props.current_user}/>
              <AboutMobile />
              <ProjectsMobile />
              <ContentLinksMobile current_user={props.current_user} />
          </Drawer>
      </div>
    )
}

const DesktopMenubar = (props) => {
    return (
        <div className='menubar--desktop'>
            <Navbar toggleable>
                <Nav className='ml-auto' navbar>
                    <NavItem className='menubar_logo--desktop'>
                        <a href='/'><Logo width={7} unit="em"/></a>
                    </NavItem>
                    <NavItem>
                        <LogoutLinkDesktop authenticated={props.authenticated} logout={props.logout}/>
                    </NavItem>
                    <NavItem>
                        <UserLinkDesktop authenticated={props.authenticated} current_user={props.current_user}/>
                    </NavItem>
                    <NavItem>
                        <AboutDesktop />
                    </NavItem>
                    <NavItem>
                        <ProjectsDesktop />
                    </NavItem>
                    <NavItem>
                        <ContentLinksDesktop current_user={props.current_user} />
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

const mapStateToProps = ({ menu_color }) => ({ menu_color })

const mapDispatchToProps = (dispatch) => {
  return {
    // addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)
