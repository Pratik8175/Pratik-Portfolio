import React from 'react'
import {SiIndeed} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://indeed.com" target="_blank"><SiIndeed/></a>
      <a href="https://github.com" target="_blank"><FaGithub/></a>

    </div>
  )
}

export default HeaderSocials
