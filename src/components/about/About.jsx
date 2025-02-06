import React, { useState } from 'react';
import './about.css';
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdDeliveryDining } from 'react-icons/md';
import gredi from '../../assets/portfolio-images/gredi-2.png';
import daski from '../../assets/portfolio-images/daski-2.png';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'; // Import arrow icons
import { IoClose } from 'react-icons/io5'; // Import close icon

const About = () => {
    const images = [gredi, daski]; // Array of images
    const [currentIndex, setCurrentIndex] = useState(0); // State to track current image
    const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Cycle back
    };

    const openModal = (index) => {
        setCurrentIndex(index); // Set the current image index
        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <section id='about'>
            <h5>Дознајте повеќе информации</h5>
            <h2>За нас</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <h3 className="image-navigation-title">Нашите производи</h3>
                        <div className="image-navigation">
                            <button onClick={prevImage} style={{ cursor: 'pointer' }}>
                                <AiOutlineArrowLeft />
                            </button>
                            <div className="image-wrapper" onClick={() => openModal(currentIndex)}>
                                <img src={images[currentIndex]} alt="Wooden Construction" />
                                <span className="full-screen-label">Full Screen</span>
                            </div>
                            <button onClick={nextImage} style={{ cursor: 'pointer' }}>
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Искуство</h5>
                            <small>25+ години работа</small>
                        </article>
                        <article className='about__card'>
                            <ImUsers className='about__icon' />
                            <h5>Клиенти</h5>
                            <small>200+ во цела Македонија</small>
                        </article>
                        <article className='about__card'>
                            <MdDeliveryDining className='about__icon' />
                            <h5>Достава</h5>
                            <small>Бесплатна достава до вашата адреса</small>
                        </article>
                    </div>
                    <br></br>

                    <section className="history__section">
                        <h2>Нашата Историја</h2>
                        <p className='about__description'>
                            Нашата подружница за дрвена граѓа во Свети Николе е основана со визија за најквалитетни производи од дрво.
                            Веќе долги години, ние сме посветени на иновации и извонредност, и сме горди на нашиот напредок во индустријата.
                            Дополнително имаме наша пилана каде ги изработуваме сите димензии за вас.
                        </p>
                    </section>
                </div>
            </div>

            {/* Modal for Full-Screen Image View */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>
                            <IoClose />
                        </button>
                        <button className="modal-prev" onClick={prevImage} style={{ cursor: 'pointer' }}>
                            <AiOutlineArrowLeft />
                        </button>
                        <img src={images[currentIndex]} alt="Full Screen View" className="modal-image" />
                        <button className="modal-next" onClick={nextImage} style={{ cursor: 'pointer' }}>
                            <AiOutlineArrowRight />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default About;
