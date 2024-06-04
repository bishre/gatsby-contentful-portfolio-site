import React, { FormEvent, useState } from 'react';
import ComponentWrapper from './componentWrapper';
import { navigate } from 'gatsby';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success: ', data)
        navigate('/success')
      })
      .catch((error) => alert(error));
  }

  return (
    <ComponentWrapper>
      <h2 id="contact" className='text-3xl my-12'>Send me a message</h2>
      <form onSubmit={handleSubmit} className='flex flex-col md:w-3/4 lg:w-1/2 md:mx-auto' method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
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
        <button className='border w-32 mx-auto hover:bg-purple-500' type="submit">Send</button>
      </form>
    </ComponentWrapper>
)};

export default ContactForm;
