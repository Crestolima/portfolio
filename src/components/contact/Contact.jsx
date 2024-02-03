import React from 'react';
import "./contact.scss";

function Contact() {
  return (
    <div className='contact'>
      <div className="textContainer">
        <h1>Lets Connect Together</h1>
        
        <div className="item">
          <h2>Mail</h2>
          <span>crestolima67@gmail.com</span>
        </div>

        <div className="item">
          <h2>Address</h2>
          <span>Bengaluru</span>
        </div>

        <div className="item">
          <h2>Phone</h2>
          <span>7022130878</span>
        </div>
      </div>

      <div className="formContainer">
        <form action="">
          <input type="text" required placeholder='Name' />
          <input type="email" required placeholder='Email' />
          <textarea rows={8} placeholder='Message' required/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
