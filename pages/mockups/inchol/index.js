import React, { Component, Fragment } from 'react'
import Head from '../../../components/MockupHead.js'
import { initStore } from '../../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../../services/current_user.js'
import stylesheet from './styles/_index.scss'
import Menu from './components/Menu.js'
import Jumbotron from './components/Jumbotron.js'
import Testimonials from './components/Testimonials.js'
import Support from './components/Support.js'
import Growth from './components/Growth.js'

const CustomHeaders = props => (
    <span>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    </span>
)

const CustomFooters = props => (
    <span>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
    </span>
)
class Inchol extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Head
                    description="Mockup design"
                    stylesheet={stylesheet}
                    CustomFooters={CustomFooters}
                    CustomHeaders={CustomHeaders}
                    current_user={this.props.current_user}>
                    <Menu />
                    <Jumbotron />
                    <Testimonials />
                    <Support />
                    <Growth />
                </Head>
            </div>
        )
    }
}
Inchol.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(Inchol)
