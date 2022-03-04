import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/valentin-soret-612ba8228/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Eldoxt" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>

    </div>
  )
}

export default HeaderSocials