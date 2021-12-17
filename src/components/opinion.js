import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

export default class Opinion extends Component {
    render() {
        return (
            <div className='opinion__wrapper'>
                {this.props.children}
                <Header />
                <div className='opinion'>
                    <div className='opinion__rating'>
                        <div className='opinion__rating__number'>
                            <p>Puntuación: 5.0</p>
                            <p>20 opiniones en Google</p>
                        </div>
                        <div className='opinion__rating__stars'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div className='opinion__opinions'>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Vanesa Pérez
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Estoy muy contenta. No tengo que comer cosas que no me gustan, ni contar las porciones, no paso hambre y llevo perdidos 10 kilos. Si por alguna razón no puedo cumplir no me culpabiliza y me siento cómoda.
                                Explica muy bien lo que debes comer y es muy agradable y atenta.
                            </div>
                        </div>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Leticia Eugenio
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Yo la verdad que no puedo estar mas agradecida a Lucia, me ha ayudado muchisimo en la alimentación de mi hija, que como madre primeriza no es facil.
                            </div>
                        </div>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Ana Martín Crespo
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Estoy encantada! Estoy cumpliendo mis objetivos y me siento mucho mejor con mi cuerpo! Gracias, Lucía
                            </div>
                        </div>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Carmen Arias
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Recomendable 100%. Lucia Villalba es muy profesional y estoy muy contenta con el seguimiento semanal que me hace. Sin duda he alcanzado mis objetivos.
                            </div>
                        </div>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Ignacio Dornellas
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Lucia es una super profesional, gracias a ella he podido alcanzar mis objetivos, y ponerme fuerte como el vinagre, ahora voy por la playa y las churris lo flipan en varias dimensiones, tengo unos abdominales que ríete tu de Brad Pitt en el club de la lucha. Unos bíceps cincelados que parecen los Alpes Suizos y unos pectorales que ya los quisiera CJ Parker para sí misma en los vigilantes de la playa.
                                Con un poco de gimnasio y la dietas de Lucia tengo el cuerpo de un dios griego.
                                Gracias lucia.
                            </div>
                        </div>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Marta Jimenez Solano
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Lucia es una excelente profesional, le encanta su trabajo y eso se nota. Me ha ayudado muchísimo enseñándome a comer de forma saludable. Me ha puesto objetivos alcanzables y en unos meses he notado como ha mejorado mi salud y mi cuerpo. ¡100% recomendable!
                            </div>
                        </div>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Elena Barrera Cernadas
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Encontrar a Lucía ha sido lo mejor q me ha pasado en mucho tiempo. Nunca me había puesto a dieta porq tengo poca fuerza de voluntad y nunca pensé que fuera capaz, pero con ella ha sido súper fácil, y, sobre todo, la tranquilidad de saber que me estoy alimentando correctamente en todo momento y todo súper personalizado. Llevo cinco meses con ella y casi he cumplido mi (ambicioso) objetivo, así q seguiré con ella lo q haga falta. La recomiendo 100% sea cual sea tu objetivo, de hecho ya la he recomendado a amigos cercanos porq sé q nadie se va a arrepentir.
                            </div>
                        </div>
                        <div className='opinion__opinions__opinion'>
                            <div className='opinion__opinions__opinion__name'>
                                Gabriel Masid
                            </div>
                            <div className='opinion__opinions__opinion__review'>
                                Le doy 5 Estrellas no solo por su profesionalidad y saber hacer, sino por Saber crear adherencia en los pacientes que es lo más importante en una estrategia de nutrición, y por supuesto por los resultado que he alcanzado, en pocos meses he perdido más de 10 kilos y he aprendido a comer de forma saludable y equilibrada
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}