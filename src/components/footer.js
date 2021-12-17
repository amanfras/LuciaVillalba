import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__space'></div>
                
                <div className='footer__navbar'>
                    <a className='footer__link'>POLÍTICA DE PRIVACIDAD</a>
                    <a className='footer__link'>OPINIONES</a>
                    <a className='footer__link'>RECOMENDACIONES</a>
                </div>
            </div>
        );
    }
}