import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ghevt9h',
        'template_avzeyl8',
        form.current,
        '5EtZIcaeKJ-YcLHf4'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMailOutline className='contact__options-icon' />
            <h4>Email</h4>
            <h5>M.Tayeb993@gmail.com</h5>
            <a href='mailto:M.Tayeb993@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact__options-icon' />
            <h4>Messenger</h4>
            <h5>Mohamad Tayeb</h5>
            <a href='https://m.me/m.tayeb93' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact_option'>
            <MdOutlineMailOutline className='contact__options-icon' />
            <h4>WhatsApp</h4>
            <h5>+964 751 851 0395</h5>
            <a href='https://wa.me/+9647518510395' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            id=''
            placeholder='Your Full Name'
            required
          />
          <input
            type='text'
            name='email'
            id=''
            placeholder='Your Email'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
