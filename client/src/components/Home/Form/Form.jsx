import React , { useState, useRef  }from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import './Form.css'

function Form() {

  const form = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [contactError, setContactError] = useState('')
  const [topicError, setTopicError] = useState('')
  
const sendEmail = () => {
    // e.preventDefault();
    emailjs
    .sendForm(
      'service_cbadzoh', 
      'template_g8umsm5', 
      form.current, 
      'hSFyexozQ_GGLM6RC'
      )
      .then
      ((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Email sent successfully",
            text: "Thank you for contacting Snow Panda",
          });
          setName("");
          setEmail("");
          setContact("");
          setTopic("");
          setMessage("");
          setNameError("");
          setEmailError("");
          setContactError("");
          setTopicError("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleContactChange = (e) => {
    setContact(e.target.value)
  }

  const handleTopicChange = (e) => {
    setTopic(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }


  const validate = () => {
    let nameError = ''
    let emailError = ''
    let contactError = ''
    let topicError = ''

    if (!name) {
      nameError = 'Name is required'
    }

    if (!email.includes('@')) {
      emailError = 'Invalid email'
    }

    if (!contact) {
      contactError = 'Contact number is required'
    }

    if (!topic) {
      topicError = 'Topic is required'
    }


    if (nameError || emailError || contactError || topicError ) {
      setNameError(nameError)
      setEmailError(emailError)
      setContactError(contactError)
      setTopicError(topicError)
      return false
    }

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (isValid) {
      sendEmail();
    }
  }

  return (
    <div className="contacto" id='contacto'>
      <h1 className='text-center mt-5 titulos-color'>CONTACT US</h1>
      <form  ref={form} onSubmit={handleSubmit}>
      <div className="contenedor-form">
        <div className="input-container">
          <div className="fila-name">
            <input className="input-mitad" placeholder="NAME" name='to_name' value={name} onChange={handleNameChange}/>
            <div className="errorContact">{nameError}</div>
          </div>
          <div className="fila-email">
            <input className="input-mitad" placeholder="EMAIL" name='user_email'value={email} onChange={handleEmailChange}/>
            <div className="errorContact">{emailError}</div>
          </div>
        </div>        
        <div className="input-container">
          <div className="fila-contact">
            <input className="input-mitad" placeholder="CONTACT Nº" name='contact' value={contact} onChange={handleContactChange}/>
            <div className="errorContact">{contactError}</div>
          </div>
          <div className="fila-topic">
          <input className="input-mitad" placeholder="TOPIC" name='topic' value={topic} onChange={handleTopicChange}/>
        <div className="errorContact">{topicError}</div>
        </div>
        </div>
        <div className="fila-message">
          <input className="input-full" placeholder="MESSAGE" name='message' value={message} onChange={handleMessage}/>
        </div>
        <button className="btn-form" type='submit'>SEND</button>      
      </div>
      </form>
    </div>
  )
};

export default Form
