import React from "react"
import ContactForm from "../../helpers/ContactForm.js"
import Paper from "material-ui/Paper"

const Hire = props => {
    return (
        <div className="hire-wrapper">

            <Paper className="padded-paper hire-header-wrapper">
                <div className="padded-paper hire-header-image-wrapper" style={{minHeight: "250px", minWidth: "250px"}}>
                    <img
                        alt="Aaron Price"
                        className="hire-header-image"
                        src="https://s3-us-west-2.amazonaws.com/aaroncoding/images/me1.png"/>
                </div>
                <div className="padded-paper hire-header-text-wrapper" style={{minHeight: "250px", minWidth: "250px"}}>
                    <div className="hire-header-text">
                        <h1>Hire Aaron Price</h1>
                        <h3>Frontend UX/UI Developer</h3>
                        <p>I make web apps come alive. My top skills are:</p>
                        <ul>
                            <li>Javascript - React, Node, NoSql Databases</li>
                            <li>CSS - SCSS, postCSS</li>
                            <li>HTML </li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </div>
                </div>
            </Paper>

            <div className="hire-form-wrapper">
                <ContactForm />
            </div>
        </div>
    )
}

export default Hire
