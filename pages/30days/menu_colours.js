import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { initStore, changeColor } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import Head from '../../components/Head.js'
import Page from '../../components/Projects/menucolour/MenuColours'
import { return_current_user } from '../../services/current_user.js'

class MenuColours extends React.Component {
  render () {
    return (
			<Head current_user={this.props.current_user}>
					<div style={{ padded: '1em' }}>
							<p>{this.props.menu_color}</p>
              <h1>Redux Menu Colour</h1>
							<p>Today I wired up redux. This example allows you to change the menu colour.</p>
              <RaisedButton
                  onClick={() => this.props.changeColor('#E57373')}
                  label="red (default)" /><br/><br/>
							<RaisedButton
									onClick={() => this.props.changeColor('#00FF00')}
									label="green" /><br/><br/>
							<RaisedButton
									onClick={() => this.props.changeColor('#0000FF')}
									label="blue" /><br/><br/>
							<RaisedButton
									onClick={() => this.props.changeColor('#FFB300')}
									label="pumpkin" /><br/><br/>
              <RaisedButton
                  onClick={() => this.props.changeColor('#616161')}
                  label="grey" /><br/><br/>
					</div>
			</Head>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	  return {
				changeColor: bindActionCreators(changeColor, dispatch),
	  }
}
MenuColours.getInitialProps = async function(context) {
		let { isServer } = context
		let current_user = await return_current_user(context)
		return { current_user, isServer }
}

export default withRedux(initStore, null, mapDispatchToProps)(MenuColours)
