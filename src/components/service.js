import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

export default class Service extends Component {
  render() {
    return (
      <div className='service_wrapper'>
        {this.props.children}
        <Header />
        <div className='service'>
            <div className='service__type'>
                <div className='service__type__img'>
                    <img src="/assets/sobrepeso.jfif"/>
                </div>
                <div className='service__type_info'>
                    <div className='title'>
                        Sobrepeso y obesidad
                    </div>
                    <p>
                        No es cuestión de estética, o de hacer dieta para bajar de peso, es cuestión de salud. El sobrepeso y la obesidad puede derivar en diabetes, enfermedades cardiovasculares, hipertensión. Para ello es necesario una alimentación saludable, supervisada por un nutricionista. Es un proceso lento, pero que lleva asociado una mejora de la calidad de vida.
                    </p>
                </div>
            </div>
            <div className='service__type'>
                <div className='service__type_info'>
                    <div className='title'>
                        Embarazo
                    </div>
                    <p>
                        La alimentación de tu bebé va a depender de tu alimentación. Durante el embarazo se producen numerosos cambios en el cuerpo y cambian los requerimientos nutricionales. Necesitas asegurar que tu bebé esta bien alimentado, y asegurar su correcto desarrollo, siempre manteniendo un peso adecuado.
                    </p>
                </div>
                <img className='service__type__img' src="/assets/embarazo.jfif"/>
            </div>
            <div className='service__type'>
                <img className='service__type__img' src="/assets/saludable.jfif"/>
                <div className='service__type_info'>
                    <div className='title'>
                        Alimentación saludable
                    </div>
                    <p>
                        Tener unos buenos hábitos de alimentación es tan importante como tener unos buenos hábitos de higiene. Una alimentación saludable se basa en una alimentación variada de calidad, basada en la dieta mediterránea. Llevar una alimentación saludable nos va a llevar a prevenir numerosas enfermedades.                    
                    </p>
                </div>
            </div>
            <div className='service__type'>
                <div className='service__type_info'>
                    <div className='title'>
                        Dietoterapia
                    </div>
                    <p>
                        La alimentación es fundamental para tener buena salud. Te ayudamos a planificar dietas específicas de patologías:
                        <ul>
                            <li>Diabetes.</li>
                            <li>Hipercolesterolemia.</li>
                            <li>Hipertensión.</li>
                            <li>Hipotiroidismo/Hipertiroidismo.</li>
                            <li>Trastornos relacionados con la alimentación…</li>
                        </ul>
                    </p>
                </div>
                <img className='service__type__img' src="/assets/dietoterapia.jfif"/>
            </div>
            <div className='service__type'>
                <img className='service__type__img' src="/assets/infantil.jfif"/>
                <div className='service__type_info'>
                    <div className='title'>
                        Alimentación Infantil
                    </div>
                    <p>
                        La alimentación en los primeros años de vida es fundamental para fijar unos buenos hábitos de alimentación y evitar el sobrepeso y obesidad infantil. Asesoramiento alimentación primeros años de vida. Fijación buenas bases de educación alimentaria. Reeducación alimentaria infantil y familiar.     
                    </p>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}
