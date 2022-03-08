import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTelephoneOutbound} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ay3dwa6', 'template_rtz8js5', form.current, 'pBx9nj-HaiV1sTqH6')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Entrer en contact</h5>
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>valentin62200@hotmail.com</h5>
            <a href="mailto:valentin62200@hotmail.com" target='_blank'>Envoyer en message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Valentin Soret</h5>
            <a href="https://m.me/valentin.soret.7" target='_blank'>Envoyer en message</a>
          </article>
          <article className='contact__option'>
            <BsTelephoneOutbound className='contact__option-icon'/>
            <h4>Téléphone</h4>
            <h5>06.33.47.43.78</h5>
            <a href="tel:+33633474378" target='_blank'>Envoyer en message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom complet' required/>
          <input type="text" name='email' placeholder='Votre Email' required/>
          <textarea name='message' rows="7" placeholder='Votre message' required> </textarea>
          <button type='submit' className='btn btn-primary'>Envoyer le message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact