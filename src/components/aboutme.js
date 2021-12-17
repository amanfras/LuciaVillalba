import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

export default class Aboutme extends Component {
  render() {
    return (
      <div className='About-me__wrapper'>
        {this.props.children}
        <Header />
        <div className='About-me'>
            <diV className='About-me__info'>
                <p>Soy diplomada en Nutrición humana y dietética por la Universidad San Pablo Ceu de Madrid. Adscrita al Colegio Profesional de Dietistas-Nutricionistas de la Comunidad de Madrid con numero de colegiada MAD00466.</p>
                <p>Soy una persona inquieta y activa, por eso mi trayectoria profesional es muy variada, pero siempre sin dejar de lado el mundo de la alimentación, desde hace un tiempo he decidido montar mi propia consulta de nutrición. </p>
                <p>Mi objetivo es ayudarte a cambiar tus hábitos de alimentación y a que mejore tu salud, a través de una alimentación saludable ¿Cuál es tu objetivo?</p>
                <p>Trabajo de manera personalizada, (online y presencial) según tus hábitos, costumbres, gustos y estilo de vida. Para ello planteamos un plan de alimentación que se adapte a tus requerimientos y necesidades, vemos la evolución, analizamos las situaciones y si es necesario reconducimos.</p>
            </diV>
            <img className='About-me__img' src="/assets/principal.jpg"/>
        </div>
        <Footer />
      </div>
    );
  }
}
