import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiGithubFill} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'

const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'>PRATIK</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#expeirience'>Expeirience</a></li>
      <li><a href='#check'>Check</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>

    </ul>


    <div className="footer socials">
      <a href='https://mail.google.com'><MdOutlineEmail/></a>
      <a href='https://github.com/Pratik8175'><RiGithubFill/></a>
      <a href='https://api.whatsapp.com/send?phon=+918983113488'><ImWhatsapp/></a>

    </div>
   </footer>
  )
}

export default Footer
