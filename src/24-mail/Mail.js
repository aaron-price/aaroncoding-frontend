import React, { Component } from "react"
import ContactForm from "../shareComponents/ContactForm.js"

const Mail = props => {
    return (
        <div>
            <h1>Contact Form</h1>
            <p> After you fill out the form, your browser makes an ajax request to my
                other app (the backend api server) which sends a request to the sendgrid SMPT server,
                which finally delivers an email to me with this data.</p>
            <p>I also do some validation and spam prevention</p>
            <ContactForm />
        </div>
    )
}


export default Mail