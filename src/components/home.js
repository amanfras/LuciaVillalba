import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: 'INICIO',
        active: true,
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
      }
    ]

    this.props.setHeaderLinks(headerLinks);
    this.props.setFooterLinks(footerLinks);
  }


  render() {
    return (
      <div className='home'>
        <div className='home__top'>
          <h1>Dietista nutricionista en Madrid</h1>
        </div>
        <div className='home__info'>
          <p>Experta Nutricionista, con planes personalizados y adaptados a las necesidades. </p>
          <p>Coach nutricional.</p>
          <p>Especialista en sobrepeso y obesidad.</p>
          <p>Consultas Presenciales y online.</p>
          <p>Mi objetivo es ayudarte a cambiar tus hábitos de alimentación y a que mejore tu salud, de manera sencilla y acompañándote en todo momento. <span> ¿Cuál es tu objetivo? </span> </p>
        </div>
        <div className='home__conectate'>
          <p>No lo pienses más y conéctate con nosotros.</p>
          <div className='home__conectate__icons'>
            <a href="https://www.instagram.com/luciavillalba_nutricion/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/34619685835">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className='home__map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.783588666753!2d-3.692909084827454!3d40.45792657936022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42291cf2d5f42d%3A0xeba0a0f4586cfd5d!2sP.%C2%BA%20de%20la%20Castellana%2C%20121%2C%2028046%20Madrid!5e0!3m2!1sen!2ses!4v1639843035483!5m2!1sen!2ses"></iframe>
        </div>  
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { headerLinks, footerLinks } = state.headerfooter;
  return { headerLinks, footerLinks}
}

Home = connect(mapStateToProps, actions)(Home);

export default Home;