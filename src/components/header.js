import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='header__img' src="/assets/Logo.png"/>
                
                <div className='header__navbar'>
                    <a className='header__link'>INICIO</a>
                    <a className='header__link'>SERVICIOS</a>
                    <a className='header__link'>BLOG</a>
                    <a className='header__link'>CONTACTO</a>
                    <a className='header__link'>RESERVA</a>
                </div>
            </div>
        );
    }
}