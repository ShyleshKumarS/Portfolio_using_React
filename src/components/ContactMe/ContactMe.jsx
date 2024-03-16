import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import ContactForm from "../ContactForm/ContactForm";
const ContactMe = () => {
  return (
    <section className="contact-container" id="contact">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={"./assets/email.png"}
            text={"shylushylesh6@gmail.com"}
          />

          <ContactInfoCard
            iconUrl={"./assets/git.png"}
            text={"https://github.com/ShyleshKumarS"}
          />
        </div>
        <div className="contact-form" style={{ flex: 2 }}>
          <ContactForm/>
      </div>
      </div>
      
    </section>
  );
};

export default ContactMe;
