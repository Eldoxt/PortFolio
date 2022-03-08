import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const services = () => {
  return (
    <section id='services'>
      <h5>Ce que j'offre</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/*         Qualité        */}
          <article className='service'>
            <div className="service__head">
              <h3>Qualités</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Polyvalent</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Autonome</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Attentif</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Envie d'apprendre</p>
              </li>
            </ul>
          </article>
        {/*        END Qualité        */}


        {/*         Centre d'intérêt        */}
        <article className='service'>
            <div className="service__head">
              <h3>Centres d'intérêts</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Freestyle sur glace</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Tennis de table</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Jeux vidéo</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Informatique</p>
              </li>
            </ul>
        </article>
        {/*        END Qualité        */}


        {/*         Qualité        */}
        <article className='service'>
            <div className="service__head">
              <h3>Autres choses</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Niveau d'anglais B1</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Aime le travail d'équipe</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Ponctuel</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon' />
                <p>Permis B</p>
              </li>
            </ul>
        </article>
        {/*        END Qualité        */}
      </div>
    </section>
  )
}

export default services