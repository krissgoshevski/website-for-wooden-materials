import React from 'react';
import './testimonials.css';
import puze from '../../assets/portfolio-images/puze.jpg';
import puze2 from '../../assets/portfolio-images/puze2.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const data = [
    {
        groupedAvatars: [puze, puze2], // Use an array for two grouped avatars
        name: 'Кафана Мечкуевска Куќа Пуже', 
        href: 'http://www.meckuevskakukapuze.com.mk/', // Link added here
        review: 'Прекрасна кафана која ја доби довербата од нас. Благодарни сме за соработката.',
    },
    {
        // avatars: [Avt2], // Single avatar
        groupedAvatars: [puze, puze2], // Use an array for two grouped avatars

        name: 'Гостилница Грош',
        review: 'Прекрасна кафана која ја доби довербата од нас. Благодарни сме за соработката.',
    },
    {
        // avatars: [Avt3], // Single avatar
        groupedAvatars: [puze, puze2], // Use an array for two grouped avatars

        name: 'Пицерија Ти-Амо',
        review: 'Прекрасна пицерија која ја доби довербата од нас. Благодарни сме за соработката.',
    }
];

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Задоволни клиенти</h5>
            <h2>Клиенти</h2>
            <Swiper
                className='container testimonials__container'
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {
                    data.map(({ groupedAvatars, avatars, name, href, review }, index) => (
                        <SwiperSlide key={index} className='testimonials'>
                            <div className='client__avatar'>
                                {groupedAvatars ? (
                                    <div className='grouped-avatars'>
                                        {groupedAvatars.map((avatar, idx) => (
                                            <img key={idx} src={avatar} alt={name} />
                                        ))}
                                    </div>
                                ) : (
                                    avatars.map((avatar, idx) => (
                                        <img key={idx} src={avatar} alt={name} />
                                    ))
                                )}
                            </div> <br></br>
                            <h5 className='client__name'>
                                {href ? (
                                    <a href={href} target="_blank" rel="noopener noreferrer">
                                        {name}
                                    </a>
                                ) : (
                                    name
                                )}
                            </h5>
                            <small className='client__review'>{review}</small>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;