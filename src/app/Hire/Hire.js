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
                        <p>2010 - Certificate in web design and animation from UFV.</p>

                        <h3>Frontend UI/UX</h3>
                        <p>I started doodling with flash animation and games as a teenager. Remember flash? Well, the tools might have changed, but I haven't. Making things pop out and come alive is kinda my thing.</p>
                        <ul>
                            <li>- Over a year of experience with Javascript and ReactJS</li>
                            <li>- Created <a href="https://www.npmjs.com/package/sweet-render">my own templating engine</a> which can replace react's 'jsx' syntax.</li>
                            <li>- This whole portfolio is built on React, including <a href="/30days">these 30 projects</a>.</li>
                            <li>- Comfortable with html, css, sass, less, postCSS, and more.</li>
                            <li></li>
                        </ul>

                        <h3>Pro Troubleshooter</h3>
                        <p>Almost 5 years ago I asked my boss at the time if I could take a shot at a tech support position. He said nobody had time to train me, but I was welcome to dive in and figure it out myself.<br/>
                          Within 2 weeks, he fired the entire existing tech support team and put me in charge of it, rewriting the process and training a new tech support team.</p>
                        <ul>
                            <li>- Over 120,000 tech support cases under my belt. Not even exaggerating.</li>
                            <li>- I can solve nearly any bug or problem I encounter.</li>
                        </ul>

                        <h3>Backends, APIs and Beyond</h3>
                        <p>This summer, I wanted to learn Python, so I published <a href="https://github.com/aaron-price/reactjo">a scaffolding engine</a> which interactively generates microservice apps with:</p>
                        <ul>
                            <li>- A Django API server.</li>
                            <li>- A NodeJS server to consume the API.</li>
                            <li>- User authentication by default.</li>
                            <li>- Custom database models with frontend CRUD operations.</li>
                            <li>- All with a shiny ReactJS frontend, utilizing bootstrap and material-ui.</li>
                        </ul>
                        <p>Oh, and it can generate extensions for itself, so you aren't limited to that stack.</p>
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
