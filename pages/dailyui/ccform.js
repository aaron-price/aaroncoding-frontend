import creditCardType from 'credit-card-type'
import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

import FramePaper from '../../components/FramePaper.js'
import Head from '../../components/MinimalHead.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class CreditCardForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            number: '',
            code: '',
            exp_m: '',
            exp_y: '',
            metadata: {
                code: { name: 'Security Code', size: 3 },
                gaps: [4, 8, 12],
                maxLength: 16,
                niceType: '',
                type: ''
            }
        }
        this.handle_keys = this.handle_keys.bind(this)
    }
    handle_numbers(num) {
        num = num.split('').filter(n => n !== ' ')
        if (num.length <= this.state.metadata.maxLength) {
            this.state.metadata.gaps.reverse().forEach(gap => {
                if (num.length > gap) {
                    num.splice(gap, 0, ' ')
                }
            })
            num = num.join('')
            this.setState({ number: num })
        }
    }
    handle_keys(e, type) {
        const entry = e.target.value
        if (type === 'number') {
            const metadata = creditCardType(entry)[0]
            console.log(metadata)
            if (metadata && entry.length > 0) {
                this.setState((prevState) => {
                    return {
                        metadata: {
                            code: metadata.code,
                            gaps: metadata.gaps,
                            maxLength: metadata.lengths.reverse()[0],
                            niceType: metadata.niceType,
                            type: metadata.type
                        }
                    }
                })
            }
            this.handle_numbers(entry)
        } else {
            this.setState({ [type]: entry })
        }
    }
    render() {
        return (
            <Head
                description='A mockup design of a credit card form'
                current_user={this.props.current_user}>
                <div className='ccform__wrapper'>
                    <div className='ccform__cta'>
                        vitae mauris vel massa bibendum consequat nec id elit. Nam tristique hendrerit odio sit amet maximus. Proin interdum tortor lacus, quis varius libero varius non.
                    </div>
                    <Desktop state={this.state} handle_keys={this.handle_keys}/>
                    <Mobile state={this.state} handle_keys={this.handle_keys}/>
                    <div className='ccform__security'>
                        vitae mauris vel massa bibendum consequat nec id elit. Nam tristique hendrerit odio sit amet maximus. Proin interdum tortor lacus, quis varius libero varius non.
                    </div>

                </div>
            </Head>
        )
    }
}

function Desktop({ state, handle_keys }) {
    return (
        <div className='ccform__form desktop'>
            <form>
                <div>
                    <Name state={state} />
                    <Number state={state}  handle_keys={handle_keys}/>
                </div>
                <div>
                    <Security state={state} />
                    <Expiry state={state} />
                    <Submit state={state} />
                </div>
            </form>
        </div>
    )
}
function Mobile({ state, handle_keys }) {
    return (
        <div className='ccform__form mobile'>
            <form>
                <Name state={state} />
                <Number state={state} handle_keys={handle_keys} />
                <Security state={state} />
                <Expiry state={state} />
                <Submit state={state} />
            </form>
        </div>
    )
}
const Name = (props) => (
    <span className='ccform__field'>
        <label>Name on Card</label>
        <input className='ccform__input' type='text' name='name' />
    </span>
)
function Number({ state, handle_keys }) {
    return (
        <span className='ccform__field'>
            <label>Card Number</label>
            <input
                type='text'
                className='ccform__input'
                name='number'
                maxLength={state.metadata.maxLength}
                value={state.number}
                onChange={e => handle_keys(e, 'number')}/>
            &nbsp;&nbsp; {state.metadata.niceType || ''}
        </span>
    )
}
const Security = (props) => (
    <span className='ccform__field'>
        <label>{props.state.metadata.code.name}</label>
        <input
            type='text'
            className='ccform__input'
            name='code'
            maxLength={props.state.metadata.code.size}
            size={props.state.metadata.code.size} />
    </span>
)
const Expiry = (props) => (
    <span className='ccform__field'>
        <label>Expiry Date</label>
        <div className='ccform__exp'>
            <input type='text' name='exp_m' maxLength='2' size='3' placeholder='mm'/>
            <input type='text' name='exp_y' maxLength='2' size='3' placeholder='yy'/><br />
        </div>
    </span>
)
const Submit = (props) => (
    <button>START FREE TRIAL</button>
)

CreditCardForm.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(CreditCardForm)
