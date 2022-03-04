/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
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
              <small>1 an d'expérience professionnel</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Expériences Professionnelles</h5>
              <small>1 an d'expérience professionnel</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Parcours Scolaire</h5>
              <small>1 an d'expérience professionnel</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque fugiat nobis maiores laborum incidunt molestias itaque ipsa perferendis tempora? Officia ducimus sint sunt commodi labore quidem magni omnis ea?
          </p>
            <a href="#contact" className='btn btn-primary'>Contactez moi</a>
        </div>
      </div>
    </section>
  )
}

export default about