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
import {SiCsharp} from 'react-icons/si'
import {AiOutlineDeploymentUnit} from 'react-icons/ai'
import {VscFolderActive} from 'react-icons/vsc'
import {IoIosGitNetwork} from 'react-icons/io'



const experience = () => {
  return (
    <section id='experience'>
      <h5>Quelles sont mes compétences ?</h5>
      <h2>Mes Compétences</h2>

      {/*          LOGICIELS         */}

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Compétences générales</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiVisualstudiocode className='experience__details-icon'/>
              <div>
                <h4>Visual Studio Code</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMicrosoftoffice className='experience__details-icon'/>
              <div>
                <h4>Pack office</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscFolderActive className='experience__details-icon'/>
              <div>
                <h4>Active directory</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineDeploymentUnit className='experience__details-icon'/>
              <div>
                <h4>Déploiement</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoIosGitNetwork className='experience__details-icon'/>
              <div>
                <h4>Réseau</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
          </div>
        </div>

        {/*          LANGAGES         */}

        <div className="experience__backend">
        <h3>Langages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPhp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaJava className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCsharp className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
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