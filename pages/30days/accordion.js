import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

//

let items = []
for (let i = 0; i < 10; i++) {
    items.push({title: i, visible: false})
}

class Accordion extends Component {
    constructor(props) {
        super(props)
        this.state = { items }
        this.toggler = this.toggler.bind(this)
    }
    toggler(n, visible) {
        const newItems = this.state.items
        newItems[n] = {title: n, visible: !visible}
        this.setState({items: newItems })
    }
    render() {
        return (
            <Head current_user={this.props.current_user}>
                <div>
                    <h1 className="about_text">Accordion</h1>
                    <p className="about_text">This is where it all begins...</p>
                    {this.state.items.map((item, key) => {
                        return (
                            <div key={key} className={`accordion-item accordion-item-${key}`}>
                                <FlatButton
                                    className={`accordion-outer accordion-outer-${key}`}
                                    primary={!item.visible}
                                    secondary={item.visible}
                                    onClick={e => this.toggler(key, item.visible)}
                                    label={'Click me - number ' + item.title}
                                />
                                {
                                    item.visible && (
                                        <div className={`accordion-inner accordion-inner-${key}`}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies enim in eros interdum tristique. Vivamus fringilla tortor vitae massa viverra mattis. In tincidunt aliquam arcu, sit amet mollis orci aliquet eget. Donec vel quam nunc. Maecenas convallis efficitur suscipit. Maecenas non ultricies nulla. Proin sagittis pulvinar ligula sit amet molestie. Vestibulum semper eros nec ante fermentum pretium. Maecenas cursus sem et urna auctor tempor. Integer volutpat ligula justo, et condimentum risus hendrerit vitae. Mauris eros nibh, pretium non maximus quis, commodo et libero. Phasellus imperdiet, dolor sed cursus ullamcorper, massa tellus convallis odio, non viverra ipsum dolor laoreet elit. Fusce ut tellus in sem varius pretium nec nec lacus. Ut iaculis feugiat dolor, id pharetra felis. Suspendisse potenti.</p>
                                            <p>Curabitur est justo, tempus ut ultrices at, vehicula ac velit. Aliquam pulvinar pharetra laoreet. Nunc vel finibus est, sed aliquet tortor. Morbi ornare quis magna luctus porta. Sed finibus finibus augue, in aliquet orci congue quis. Nulla elit sem, tempor nec maximus aliquam, iaculis vel lectus. Maecenas pellentesque turpis vitae lectus consectetur, nec luctus ligula dictum. Maecenas at neque quis sem volutpat hendrerit. Phasellus venenatis quam eu urna feugiat, vehicula ullamcorper dolor aliquet. Phasellus laoreet neque lacus, nec semper turpis fringilla eu. Cras fringilla justo ligula, eget tempor eros ultrices quis.</p>
                                            <p>Vestibulum vel dictum mauris. In varius neque eget gravida fermentum. Fusce vel fermentum eros. Cras elementum pellentesque nulla eget fermentum. In vel nibh sed ante laoreet eleifend et sed purus. Suspendisse sed vehicula massa, eu placerat tellus. Curabitur consectetur gravida elit, eu blandit eros. Nulla egestas, odio at vestibulum imperdiet, lorem lacus aliquam enim, vel mollis nibh nibh sit amet ex. Curabitur libero tellus, sollicitudin non velit in, rutrum eleifend lacus. Quisque sagittis gravida enim eget faucibus. Donec scelerisque, ex quis sodales tristique, dolor justo condimentum mauris, id lacinia nulla orci ac erat. Duis lacinia nibh nec velit varius elementum. Curabitur augue justo, sollicitudin vitae scelerisque sed, aliquet ut lacus. Maecenas at dui dignissim, imperdiet sem eu, ultricies ante.</p>
                                        </div>
                                    )
                                }
                                <br />
                            </div>
                        )
                    })}
                </div>
            </Head>
        )
    }
}

Accordion.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(Accordion)
