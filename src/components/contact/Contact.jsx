import React from 'react'
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from 'react';
import emailjs from 'emailjs-com';






const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r05c8e6', 'template_z7a0dad', form.current, 'yf5b-GEGTgL_qEGD5')
            .then((result) => {
                console.log(result.text);
                alert('Пораката е успешно испратена, ќе ве контактираме наскоро!');
            }, (error) => {
                console.log(error.text);
                alert('Error sending message. Please try again later.');
            });

        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>За дополнителни информации</h5>
            <h2>Контактирајте не</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>drvenagragja@gmail.com</h5>
                        <a href="mailto:drvenagragja@gmail.com" target='_blank'>Испрати порака</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <a href="https://m.me/gosevski10/" target='_blank'>Испрати порака </a>
                    </article>
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+389 70 233 959</h5>
                        <a href="https://api.whatsapp.com/send?phone=+38970233959" target='_blank'>Испрати порака</a>
                    </article>


                </div>
                {/**END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Внесете име и презиме...' required />
                    <input type="text" name='phone' placeholder='Внесете телефонски број...' required />

                    <input type="email" name='email' placeholder='Внесете е-пошта..' />
                    <textarea name="message" id="" cols="30" rows="7" placeholder='Внесете ја вашата порака...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Испрати порака</button>
                </form>
            </div>
        </section>
    )
}

export default Contact