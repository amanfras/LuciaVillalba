import React, { Component } from 'react';
import { ContactUs } from './form';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Contact extends Component {
    componentDidMount() {
        const headerLinks = [
          {
            _id: 0,
            title: 'INICIO',
            active: false,
            path: '/'
          },
          {
            _id: 1,
            title: 'SERVICIOS',
            active: false,
            path: '/servicios'
          },
          {
            _id: 2,
            title: 'SOBRE MI',
            active: false,
            path: '/sobre-mi'
            },
          {
          _id: 3,
          title: 'BLOG',
          active: false,
          path: '/blog'
          },
          {
          _id: 4,
          title: 'CONTACTO',
          active: false,
          path: '/contacto'
          },
          {
          _id: 5,
          title: 'RESERVA',
          active: false,
          path: '/reserva'
          }
        ]
    
        const footerLinks = [
          {
            _id: 0,
            title: 'POLÍTICA DE PRIVACIDAD',
            active: false,
            path: '/política-de-privacidad'
          },
          {
            _id: 1,
            title: 'OPINIONES',
            active: false,
            path: '/opiniones'
          },
          {
            _id: 2,
            title: 'RECOMENDACIONES',
            active: false,
            path: '/recomendaciones'
          }
        ]
    
        this.props.setHeaderLinks(headerLinks);
        this.props.setFooterLinks(footerLinks);
      }
    render() {
        return (
            <div className='contact'>
                <div className='contact__title'>
                    ¿Necesitas más información?    Comunícate con nosotros.
                </div>
                <div className='contact__part'>
                    <ContactUs className='contact__part__form'/>
                    <div className='contact__part__info'>
                        <div className='contact__part__info__name'>
                            Lucia Villalba Nutrición
                        </div>
                        <div className='contact__part__info__dirección'>
                            <i class="fas fa-map-marker-alt"></i>
                            Paseo de la castellana 121, esc dcha 4C, 28046, Madrid (Plaza de Cuzco)
                        </div>
                        <div className='contact__part__info__tlf'>
                            <i class="fas fa-phone"></i> 
                            +34619685835
                        </div>
                        <div className='contact__part__info__hoorariotitle'>
                            <i class="fas fa-clock"></i>
                            Horario:
                        </div>
                        <div className='contact__part__info__horario'>
                            <p>Lunes - Cerrado</p>
                            <p>Martes - 08:00-20:00</p>
                            <p>Miércoles - 08:00-16:00</p>
                            <p>Jueves - 08:00-20:00</p>
                            <p>Viernes - 08:00-16:00</p>
                            <p>Sábado - Cerrado</p>
                            <p>Domingo - Cerrado</p>  
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { headerLinks, footerLinks } = state.headerfooter;
    return { headerLinks, footerLinks }
}

Contact = connect(mapStateToProps, actions)(Contact);

export default Contact;