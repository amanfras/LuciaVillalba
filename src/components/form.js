import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lucia', 'template_lucia', form.current, 'user_2NJCHigxk8ZtC76eBuH6f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='form'>
      <div className='form__name'>
        <input type="text" name="user_name" placeholder='Nombre' />
      </div>
      <div className='form__email'>
        <input type="email" name="user_email" placeholder='Email' />
      </div>
      <div className='form__message'>
        <textarea name="message" placeholder='Mensaje'/>
      </div>
      <div className='form__button'>
        <input type="submit" value="ENVIAR" />
      </div>
    </form>
  );
};