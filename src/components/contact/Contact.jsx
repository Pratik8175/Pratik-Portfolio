import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiGithubFill} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>


      <div className='container contact__container'>
        <div className='contact__options'>


          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pratikghanekar8175@gmail.com</h5>
            <a href='https://mail.google.com' target='_blank'>Send a message</a>
          </article>


          <article className='contact__option'>
            <RiGithubFill className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Pratik8175</h5>
            <a href='https://github.com/Pratik8175' target='_blank'>View My Work</a>
          </article>


          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whats app</h4>
            <h5>+918983113488</h5>
            <a href='https://api.whatsapp.com/send?phon=+918983113488' target='_blank'>Send a message</a>
          </article>
        </div>


        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea type='message' name='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>
      </div>
    </section>
  )
}

export default Contact
