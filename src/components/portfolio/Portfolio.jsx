import React, { useState } from 'react';
import './portfolio.css';
import { FaTree } from 'react-icons/fa';
import { GiWoodPile } from "react-icons/gi";
import { MdNature } from "react-icons/md";
import IMG1 from '../../assets/portfolio-images/daski-2.png';
import IMG2 from '../../assets/portfolio-images/gredi-2.png';
import IMG3 from '../../assets/portfolio-images/letvi-2.png';
import IMG4 from '../../assets/portfolio-images/paleti-2.png';
import IMG5 from '../../assets/portfolio-images/krainki-2.png';

const data = [
    {
        id: 17,
        image: IMG1,
        title: 'Даски',
        github: 'https://github.com/krissgoshevski/React-Vite-Laravel-FullStack-Application',
        skills: [<FaTree />, <GiWoodPile />, <MdNature />],
        description: 'Достапни димензии за даски:',
        sizes: [
            { length: "3, 4, 5, 6m", thickness: "2, 2.5, 3cm" },

        ]
    },
    {
        id: 16,
        image: IMG2,
        title: 'Греди - Кадрони',
        github: 'https://github.com/krissgoshevski/FullStack-app-Authentication-using-React-and-Flask',
        skills: [<FaTree />, <GiWoodPile />, <MdNature />],
        description: 'Достапни димензии за греди:',
        sizes: [
            { length: "3, 4, 5, 6m", thickness: "5, 7, 10, 12, 15, 20, 25cm" }
        ]
    },
    {
        id: 16,
        image: IMG3,
        title: 'Летви',
        github: 'https://github.com/krissgoshevski/FullStack-app-Authentication-using-React-and-Flask',
        skills: [<FaTree />, <GiWoodPile />, <MdNature />],
        description: 'Достапни димензии за летви:',
        sizes: [
            { length: "3, 4, 5, 6m", thickness: "2.5, 3cm" }
        ]
    },
    {
        id: 16,
        image: IMG4,
        title: 'Талпи',
        github: 'https://github.com/krissgoshevski/FullStack-app-Authentication-using-React-and-Flask',
        skills: [<FaTree />, <GiWoodPile />, <MdNature />],
        description: 'Достапни димензии за талпи:',
        sizes: [
            { length: "3, 4, 5, 6m", thickness: "3, 4, 5, 6, 7cm" }
        ]
    },
    {
        id: 16,
        image: IMG4,
        title: 'Палети',
        github: 'https://github.com/krissgoshevski/FullStack-app-Authentication-using-React-and-Flask',
        skills: [<FaTree />, <GiWoodPile />, <MdNature />],
        description: 'Достапни димензии за палети:',
        sizes: [
            { length: "120 x 80cm", thickness: "2.5 cm" }
        ]
    },
    {
        id: 16,
        image: IMG5,
        title: 'Краинки',
        github: 'https://github.com/krissgoshevski/FullStack-app-Authentication-using-React-and-Flask',
        skills: [<FaTree />, <GiWoodPile />, <MdNature />],
        description: 'Достапни димензии за краинки:',
        sizes: [
            { length: "3,4,5m", thickness: "###" }
        ]
    },



    // Define sizes or leave empty for other items if needed
];

const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [accordionOpen, setAccordionOpen] = useState(null);

    const openModal = (item) => {
        setCurrentItem(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentItem(null);
        setAccordionOpen(null);
    };

    const toggleAccordion = (index) => {
        setAccordionOpen(accordionOpen === index ? null : index);
    };

    return (
        <section id='portfolio'>
            <h5>Наши производи</h5>
            <h2>Производи</h2>

            <div className='container portfolio__container'>
                {data.map((item) => (
                    <article key={item.id} className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <div className='portfolio__item-cta'>
                            <button className='btn' onClick={() => openModal(item)}>
                                Дознајте повеќе
                            </button>
                            <div className='portfolio__item-skills'>
                                {item.skills.map((skill, index) => (
                                    <span key={index}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && currentItem && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <h3 className='modal-title'>{currentItem.title}</h3>
                        <p className='modal-description'>{currentItem.description}</p>

                        {/* Accordion for Sizes */}
                        {currentItem.sizes && (
                            <div className='accordion'>
                                {currentItem.sizes.map((size, index) => (
                                    <div key={index} className='accordion-item'>
                                        <button
                                            className='accordion-button'
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <div className='accordion-content'>
                                                <div className='dimension'>
                                                    <span className='dimension-label'>Должина:</span>
                                                    <span className='dimension-value'>{size.length}</span>
                                                </div>
                                                <div className='dimension'>
                                                    <span className='dimension-label'>Дебелина:</span>
                                                    <span className='dimension-value'>{size.thickness}</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}



        </section>
    );
};

export default Portfolio;
