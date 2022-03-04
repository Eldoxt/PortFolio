import React from 'react'
import './experience.css'
import {SiVisualstudiocode} from 'react-icons/si'
import {SiMicrosoftoffice} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {SiReact} from 'react-icons/si'


const experience = () => {
  return (
    <section id='experience'>
      <h5>Quelles sont mes compétences ?</h5>
      <h2>Mes expériences</h2>

        {/*          LOGICIELS         */}

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Compétences logiciels</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiVisualstudiocode />
              <div>
                <h4>Visual Studio Code</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMicrosoftoffice />
              <div>
                <h4>Pack office</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiVisualstudiocode />
              <div>
                <h4>Visual Studio Code</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiVisualstudiocode />
              <div>
                <h4>Visual Studio Code</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiVisualstudiocode />
              <div>
                <h4>Visual Studio Code</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
          </div>
        </div>

        {/*          LANGAGES         */}

        <div className="experience__backend">
        <h3>Langages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact />
              <div>
                <h4>React</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPhp />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaJava />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython />
              <div>
                <h4>Python (DJANGO)</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience