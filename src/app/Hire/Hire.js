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
                        <h1>Aaron Price - Full Stack Web Developer</h1>

                        <br/>
                        <h3>Education</h3>
                        <p>2010 - Certificate in web design and animation from UFV</p>

                        <h3>Frontend UI/UX</h3>
                        <ul>
                            <li>- Over a year of experience with Javascript and ReactJS</li>
                            <li>- Created <a href="https://www.npmjs.com/package/sweet-render">my own templating engine</a> which can replace react's 'jsx' syntax.</li>
                            <li>- This whole portfolio is built on React, including <a href="/30days">these 30 projects</a>.</li>
                            <li>- Comfortable with html, css, sass, less, postCSS, and more</li>
                        </ul>

                        <h3>Backend's, APIs and Beyond</h3>
                        <p>This summer, I wanted to learn Python, so I published <a href="https://github.com/aaron-price/reactjo">a scaffolding engine</a> which interactively generates microservice apps with:</p>
                        <ul>
                            <li>- A Django API server.</li>
                            <li>- A NodeJS server to consume the API.</li>
                            <li>- User authentication by default.</li>
                            <li>- Custom database models with frontend CRUD operations.</li>
                            <li>- All with a shiny ReactJS frontend, utilizing bootstrap and material-ui</li>
                        </ul>

                        <h3>Pro Troubleshooter</h3>
                        <ul>
                            <li>- 4.5 years experience working in technical support.</li>
                            <li>- Over 120,000 cases under my belt. Not exaggerating.</li>
                            <li>- Trained countless others in tech support, and designed the process they follow.</li>
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
