import React from 'react';
import ContactImage from '../assets/contact.jpeg';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${ContactImage})`}}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
          <lable htmlFor='name'>Full Name</lable>
          <input type='text' name='name' placeholder='Enter your name' />
          <lable htmlFor='email'>Email</lable>
          <input type='text' name='email' placeholder='Enter your email' />
          <lable htmlFor='message'>Message</lable>
          <textarea name='message' rows='7' placeholder='Enter your message' />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
