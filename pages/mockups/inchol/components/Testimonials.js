import { Component } from 'react'

const Testimonial = props => {
    const { text, name, title, space, currentSpace } = props
    // let classes = `testimonial testimonial-space${props.currentSpace}`
    // if (props.space === 0) {
    //     classes += ' pusher'
    // }
    return (
        <div className="testimonial-element" style={{left: space + 'vw'}}>
            <div className='testimonial'>
                <p className="testimonial-text">{text}</p>
                <p className="testimonial-name">- {name}<br/><i>{title}</i></p>
            </div>
        </div>
    )
}

class Testimonials extends Component {
    constructor(props) {
        super(props)
        this.state = { current: 0 }
    }
    tick() {
        this.timeout = setTimeout(() => {
            this.setState(prev => {
                if (prev.current === 2) {
                    return { current: 0 }
                } else {
                    return { current: prev.current + 1 }
                }
            }, () => this.tick())
        }, 4000)
    }
    componentDidMount() {
        this.tick()
    }
    componentWillUnMount() {
        clearTimeout(this.timeout)
    }
    render() {
        return (
            <div className="testimonials-outer-wrapper">
                <div className="testimonials-overlay"></div>
                <div className="testimonials-header-wrapper">
                    <div className="testimonials-header">See what our clients are saying</div>
                </div>
                <div className="testimonials-inner-wrapper">
                    <Testimonial
                        space={0 + (this.state.current * -200)}
                        text="Dance Comp Genie is always on hand to assist you when you have a question and with us being on the other side of the world they have always been there when we needed them. Even if you are not computer tech savvy they can teach you in a fast, professional manner."
                        name="Peter Oxford"
                        title="Showcase National Dance Championships" />

                    <Testimonial
                        space={200 + (this.state.current * -200)}
                        text="DCG is a wonderful product! They tailored our Registration System and Tabulation System to fit our needs and have worked with us professionally and closely every step of the way. We are grateful to have such a unique program that is reliable and built just how we wanted it!"
                        name="Noelle Pate"
                        title="Starpower and the Star Dance Alliance" />

                    <Testimonial
                        space={400 + (this.state.current * -200)}
                        text="Their system is really very user friendly. We found that many of our clients used the system when registering for other events. This is one of the reasons we went with DanceComp Genie. The support that they offer to clients is wonderful. Everyone is very attuned to the needs of the client!"
                        name="Fran Peters"
                        title="Dance Educators of America" />
                </div>
            </div>
        )
    }
}

export default Testimonials