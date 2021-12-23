import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Aboutme extends Component {
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
            active: true,
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
        <div className='About-me'>
            <diV className='About-me__info'>
                <p>Soy diplomada en Nutrición humana y dietética por la Universidad San Pablo Ceu de Madrid. Adscrita al Colegio Profesional de Dietistas-Nutricionistas de la Comunidad de Madrid con numero de colegiada MAD00466.</p>
                <p>Soy una persona inquieta y activa, por eso mi trayectoria profesional es muy variada, pero siempre sin dejar de lado el mundo de la alimentación, desde hace un tiempo he decidido montar mi propia consulta de nutrición. </p>
                <p>Mi objetivo es ayudarte a cambiar tus hábitos de alimentación y a que mejore tu salud, a través de una alimentación saludable ¿Cuál es tu objetivo?</p>
                <p>Trabajo de manera personalizada, (online y presencial) según tus hábitos, costumbres, gustos y estilo de vida. Para ello planteamos un plan de alimentación que se adapte a tus requerimientos y necesidades, vemos la evolución, analizamos las situaciones y si es necesario reconducimos.</p>
            </diV>
            <img className='About-me__img' src="/assets/principal.jpg"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { headerLinks, footerLinks } = state.headerfooter;
  return { headerLinks, footerLinks }
}

Aboutme = connect(mapStateToProps, actions)(Aboutme);

export default Aboutme;