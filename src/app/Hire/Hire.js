import React from "react"
import ContactForm from "../../helpers/ContactForm.js"
import Paper from "material-ui/Paper"

const Hire = props => {
    return (
        <div className="hire-wrapper">

            <Paper className="padded-paper hire-header-wrapper">
                <div className="padded-paper hire-header-image-wrapper">
                    <img
                        alt="Aaron Price"
                        style={{height: "40vmin", width: "40vmin"}}
                        className="hire-header-image"
                        src="https://s3-us-west-2.amazonaws.com/aaroncoding/images/me1.png"/>
                </div>
                <div className="padded-paper hire-header-text-wrapper">
                    <div className="hire-header-text">
                        <h1>Hire Aaron Price</h1>
                        <h3>Frontend UX/UI Developer</h3>
                        <p>I make web apps come alive. My top skills are:</p>
                        <ul>
                            <li>Functional Programming - 70% expertise</li>
                            <li>Object Oriented Programming - 70% expertise (prototypal preferred)</li>
                            {/*
                                <li>Cryptography - 30% expertise</li>
                                <li>Algorithms - 30% expertise</li>
                                <li>Machine Learning - 0% expertise</li>
                            */}
                            <li><hr/></li>
                            <li>Javascript - 90% expertise</li>
                            <li>React/redux - 90% expertise</li>
                            <li>NodeJS/express - 60% expertise</li>
                            <li><hr/></li>
                            <li>CSS and HTML 85% expertise</li>
                            <li>SCSS and postCSS 60% expertise</li>
                            <li><hr/></li>
                            <li>Ruby 60% expertise</li>
                            <li>Rails 60% expertise</li>
                            <li><hr/></li>
                            <li>MySQL 50% expertise</li>
                            <li>MongoDB 50% expertise</li>
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
