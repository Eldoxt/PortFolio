import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import dataanalysis from '../../assets/dataanalysis.jpg'
import dashb from '../../assets/dashb.jpg'
import troisd from '../../assets/troisd.png'
import ps from '../../assets/ps.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes récents projets</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={dashb} alt="" />
          </div>
          <h3>Projet d'analyse de données pour Armatis</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Eldoxt/Projet_Armatis" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={dataanalysis} alt="" />
          </div>
          <h3>Data analyse avec des charts Python</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Eldoxt/DataAnalysis" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={troisd} alt="" />
          </div>
          <h3>Vue 3D avec ThreeJS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Eldoxt/3D-View-Project" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={ps} alt="" />
          </div>
          <h3>Site Web pour l'entreprise Philippe Soret</h3>
          <div className="portfolio__item-cta">
            <a href="https://entreprisephilippesoret.fr/" className='btn' target='_blank'>Site web</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio