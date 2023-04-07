import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className="contacto">
      <h1 className='text-center mt-5 text-secondary'>CONTACT US</h1>
      <form action="https://formsubmit.co/e413674aa8b810409548ae9d7c693fa6" method="POST">
      <div className="contenedor-form">
        <div className="fila mitad">
          <input className="input-mitad" placeholder="NAME" name='name'/>
          <input className="input-mitad" placeholder="EMAIL" name='email'/>
        </div>        
        <div className="fila mitad">
          <input className="input-mitad" placeholder="CONTACT Nº" name='contact'/>
          <input className="input-mitad" placeholder="TEMA..."name='tema'/>
        </div>
        <div className="fila">
          <input className="input-full" placeholder="MESSAGE" name='message'/>
        </div>
        <button className="btn">SEND</button>      
      </div>
      <input type='hidden' name='_next' value='https://pf-10a-bhm9.vercel.app/'/>
      </form>
    </div>
  )
};

export default Form
