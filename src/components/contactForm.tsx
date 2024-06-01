import React, { useState } from 'react';
import ComponentWrapper from './componentWrapper';

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
    <ComponentWrapper>
      <form className='flex flex-col' method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label className='flex justify-between'>
          Name: <input className='bg-transparent border w-2/3 mb-4' type="text" name="name" required value={formData.name} onChange={handleChange}/>
        </label>
        <label className='flex justify-between'>
          Email: <input className='bg-transparent border w-2/3 mb-4' type="email" name="email" value={formData.email} required onChange={handleChange}/>
        </label>
        <label className='flex justify-between'>
          Message: <textarea className='bg-transparent border w-2/3 mb-4' name="message" value={formData.message} required onChange={handleChange}></textarea>
        </label>
        <button className='border w-32 mx-auto' type="submit">Send</button>
      </form>
    </ComponentWrapper>
)};

export default ContactForm;
