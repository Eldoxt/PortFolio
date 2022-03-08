/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/moii.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {HiOutlineInformationCircle} from 'react-icons/hi'

const about = () => {
  return (
    <section id='about'>
      <h5>À propos de moi</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <HiOutlineInformationCircle className='about__icon'/>
              <h5>Informations Personnelles</h5>
              <small>Né le 12 Janvier 2001 <br /> J'habite à Boulogne-sur-Mer</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Expériences Professionnelles</h5>
              <small>1 an d'expérience professionnel</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Parcours Scolaire</h5>
              <small>Obtention d'un BAC STI2D option SIN <br /> Obtention d'un BTS SIO option SLAM</small>
            </article>
          </div>
          <p>
            Passioné d'informatique en général, j'aimerai travailler dans le développement web ou dans la maintenance informatique.
          </p>
            <a href="#contact" className='btn btn-primary'>Contactez-moi</a>
        </div>
      </div>
    </section>
  )
}

export default about