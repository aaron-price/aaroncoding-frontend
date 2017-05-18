import React from "react"
import { TweenMax } from "gsap"
import Paper from "material-ui/Paper"

class HTTPS extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            green: "#15D000",
            red: "#DA3A3C",
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({open: false}), 1500)
    }
    render() {
        return (
            <div>
                <h4>What I did today:</h4>
                <ul>
                    <li>1. Set up custom domain, aaroncoding.com</li>
                    <li>2. Set up node express on this app (which was originally generated by create-react-app)</li>
                    <li>3. Set up TLS/SSL/HTTPS</li>
                    <li>4. This celebratory animated lock.</li>
                </ul>
                <Paper className="https__paper">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%"
                         viewBox="0 25 80 80" style={{enableBackground: "new 0 0 100 100"}}>
                        <g className={`https__bar--${this.state.open ? "open" : "closed"}`} ref="bar">
                            <g>
                                <path style={{fill: "#BCC4BB", stroke: "#000000", strokeMiterlimit: 10}} d="M32.5,52.5V45c0,0-0.354-4.5,4.779-4.5s5.721,0,5.721,0
                                    s4.63-0.388,4.5,4.279V52v9.5h6.018l-0.042-17.063c0,0,1.3-10.937-10.515-10.937H36c0,0-9.5-0.805-9.5,10.546V52.5H32.5z"/>
                            </g>
                        </g>
                        <g id="base">
                            <rect className={`https__base--${this.state.open ? "open" : "closed"}`} x="22.5" y="61.5"
                                  style={{stroke: "#000000", strokeMiterlimit: 10}}
                                  width={36} height={30}/>
                        </g>
                    </svg>
                </Paper>
            </div>
        )
    }
}

export default HTTPS