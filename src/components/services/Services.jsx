import React from 'react'
import './services.css';
import { FaCheck } from "react-icons/fa6";

const Services = () => {
    return (
        <section id='services'>
            <h5>Какви услуги нудиме</h5>
            <h2>Услуги</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Содржина</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                            Отворени за консултација 
                            </p>
                        </li>

                        <li><FaCheck className='service__list-icon' />
                            <p> Долгорочна издржливост </p>
                        </li>


                        <li><FaCheck className='service__list-icon' />
                            <p>
                               Најубав изглед на објектот 
                            </p>
                        </li>       

                        <li><FaCheck className='service__list-icon' />
                            <p>
                            Квалитетни Производи

                            </p>
                        </li>

                        <li><FaCheck className='service__list-icon' />
                            <p>
                            Одлична Поддршка

                            </p>
                        </li>

                        <li><FaCheck className='service__list-icon' />
                            <p>
                            Конкурентни Цени на пазарот 
                            </p>
                        </li>

                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Бесплатна испорака до дома
                            </p>
                        </li>   
                    </ul>
                </article>       
            </div>
        </section>
    )
}

export default Services