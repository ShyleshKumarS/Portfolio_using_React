import React from 'react'
import './ContactInfoCard.css'
const ContactInfoCard = ({iconUrl,text}) => {
  return (
    <div className='contact-details-card'>
        <div className="icon">
      <img src={iconUrl} alt='contact-info-card-icon' style={{ width: iconUrl === './assets/email.png' ? "80px" : "60px" }}/>
      </div>
      
      <p style={{marginTop:text==='shylushylesh6@gmail.com' ? "-10px": ""}}>{text}</p>
    </div>
  )
}

export default ContactInfoCard
