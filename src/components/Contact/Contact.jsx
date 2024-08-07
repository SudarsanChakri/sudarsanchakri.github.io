import React, { useRef } from "react";
//email first step
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    //second step of the email.js
    const form = useRef();
    //third step- all reference is from Emailjs website
    const sendEmail = (e) => {
        e.preventDefault(); 
    //first one is your service and the second one is your template Id and
    //Third one is public key from the account, you will find these in the email.js   
     emailjs.sendForm('service_7r', 'template_swze3vn', form.current, {
        publicKey: 'TJclCytwmfUNdV3us',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent')
        },
        (error) => {
          alert('Email not sent')
          console.log('FAILED...', error.text);
        },
      );
  };

    return(
        <section className="contactpage">
            <div className="contact">
                <h1>Contact Me</h1>
                <h4>Please fill out the below to disuss any work opportunities</h4>
                <form id="formblock" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="input" placeholder="Your Name" name= 'name' required/>
                    <input type="email" className="input" placeholder="Your Email" name='email' required/>
                    <textarea name="message" className="input" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" id="submit" value='send' className="submit">Send</button>
                </form>
            </div>
        </section>
    );
};


export default Contact;