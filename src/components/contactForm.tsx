import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name: <input className='bg-transparent border' type="text" name="name" required value={formData.name} onChange={handleChange}/>
      </label>
      <label>
        Email: <input className='bg-transparent border' type="email" name="email" value={formData.email} required onChange={handleChange}/>
      </label>
      <label>
        Message: <textarea className='bg-transparent border' name="message" value={formData.message} required onChange={handleChange}></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
)};

export default ContactForm;
