import React from 'react'
import './experience.css';
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const Experience = () => {
    return (
        <section id='experience'>
            <h5>Производи по класа што ги нудиме</h5>
            <h2> Класи </h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Прва класа</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Даски</h4>
                                <small className='text-light'>Во сите димензии</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Греди/Кадрони </h4>
                                <small className='text-light'>Во сите димензии</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Летви</h4>
                                <small className='text-light'>Во сите димензии</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Талпи</h4>
                                <small className='text-light'>Во сите димензии</small>

                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Палети</h4>
                                <small className='text-light'>80 x 120</small>

                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Краинки</h4>
                                <small className='text-light'>Во сите димензии</small>

                            </div>
                        </article>

                      
                    </div>
                </div>
                {/**END OF FRONTEND */}

                <div class="experience__backend">
                    <h3>Втора класа</h3>
                    <div className="experience__content">
                    <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Даски</h4>
                                <small className='text-light'>Во сите димензии</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Греди/Кадрони </h4>
                                <small className='text-light'>Во сите димензии</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Летви</h4>
                                <small className='text-light'>Во сите димензии</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Талпи</h4>
                                <small className='text-light'>Во сите димензии</small>

                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Палети</h4>
                                <small className='text-light'>80 x 120</small>

                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Краинки</h4>
                                <small className='text-light'>Во сите димензии</small>

                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience