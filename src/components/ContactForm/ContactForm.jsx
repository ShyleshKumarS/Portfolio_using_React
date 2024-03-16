import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <section className="form-container">
        
      <div className='contact-card'>
        <form>
        <div className="names">
          <input type='text' name='First name' placeholder='First Name' />
          <input type='text' name='Last name' placeholder='Last Name' /></div>
          <br/><br/>
          
          <input type='email' name='email'  placeholder='Email Address' />
          <br/><br/>
          <textarea typeof='text'  name='message' rows='5' cols='30' placeholder='Message' />
          <br/><br/>
          <button className="button-36" onClick={()=>{alert('Your message has been sent!')}} >Send Message</button>
          </form>
          </div>
    </section>
  )
}

export default ContactForm



