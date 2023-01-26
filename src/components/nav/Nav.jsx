import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {RiContactsBook2Line} from 'react-icons/ri'
import {FaServicestack} from 'react-icons/fa'
import {GrContactInfo} from 'react-icons/gr'
import { useState } from 'react'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about'  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiContactsBook2Line/></a>
      <a href='#check'  onClick={() => setActiveNav('#check')} className={activeNav === '#check' ? 'active' : ''}><FaServicestack/></a>
      <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContactInfo/></a>

    </nav>
  )
}

export default Nav
