import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

export default class Privacy extends Component {
  render() {
    return (
      <div className='privacy_wrapper'>
        {this.props.children}
        <Header />
        <div className='privacy'>
            <div className='privacy__title'>Clausula informativa:</div>
            <div className='privacy__text'>
                <p className='none'>
                    Datos del responsable del tratamiento: 
                </p>
                <p>
                    Identidad: Lucia Villalba Nutricion - NIF: 04848910G 
                </p>
                <p>
                    Dirección postal: Paseo de la Castellana 105, 1 derecha
                </p>
                <p>
                    Teléfono: 619685835 - Correo electrónico: lvm.nutricion@gmail.com
                </p>
                <p>
                    En Lucia Villalba Nutrición tratamos la información que nos facilita con el fin de prestarles el servicio solicitado y realizar su facturación.
                    Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales y atender las posibles responsabilidades que pudieran derivar del cumplimiento de la finalidad para la que los datos fueron recabados.
                </p>
                <p>
                    Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. Usted tiene derecho a obtener información sobre si en Lucia Villalba Nutrición estamos tratando sus datos personales, por lo que puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de datos y oposición y limitación a su tratamiento ante Lucia Villalba Nutrición, Paseo de la Castellana 105, 1 derecha o en la dirección de correo electrónico lvm.nutricion@gmail.com, adjuntando copia de su DNI o documento equivalente.
                </p>
                <p>
                    Asimismo, y especialmente si considera que no ha obtenido satisfacción plena en el ejercicio de sus derechos, podrá presentar una reclamación ante la autoridad nacional de control dirigiéndose a estos efectos a la Agencia Española de Protección de Datos, C/ Jorge Juan, 6 – 28001 Madrid.
                </p>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}
