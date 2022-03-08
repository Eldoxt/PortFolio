import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Valentin Soret</a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">À propos de moi</a></li>
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/valentin-soret-612ba8228/"><BsLinkedin/></a>
        <a href="https://www.facebook.com/valentin.soret.7"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/eldoxt/"><FaInstagram/></a>
        <a href="https://twitter.com/home"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Valentin Soret. Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default footer