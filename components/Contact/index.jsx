/* eslint-disable multiline-ternary */
import React from 'react'
import SocialNav from '../SocialNav'
import styles from './Contact.module.scss'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('xwkapjqq')

  return (
    <section className={styles.Contact} id='contact'>
      <div className={styles.container}>
        <h2>Contacto</h2>
        {state.succeeded ? (
          <p>Gracias por enviarme un mensaje, contestare a la brevedad</p>
        ) : (
          <form className={styles.FormContainer} onSubmit={handleSubmit}>
            <p>
              Si esta interesado en que trabajemos juntos no dude en ponerse en
              contacto conmigo
            </p>
            <div className={styles.FormBox}>
              <div>
                <input type='text' name='name' id='name' required />
                <label htmlFor=''>Nombre</label>
                <ValidationError
                  prefix='Name'
                  field='name'
                  errors={state.errors}
                />
              </div>

              <div>
                <input type='email' name='email' id='email' required />
                <label htmlFor=''>Correo</label>
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
              <div>
                <textarea name='message' id='message' required />
                <label htmlFor=''>Mensaje</label>
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>

              <button
                type='submit'
                className={styles.Btn}
                disabled={state.submitting}
              >
                Enviar
              </button>
            </div>
          </form>
        )}
        <div className={styles.Social}>
          <p>
            O si prefieres enviame un DM en cualquiera de mis redes sociales
          </p>
          <div>
            <SocialNav />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
