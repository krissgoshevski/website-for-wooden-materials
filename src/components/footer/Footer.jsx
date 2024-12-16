import React from 'react';
import './footer.css';
import { SiInstagram } from "react-icons/si";
import { FaSquareFacebook, FaWhatsapp, FaViber } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'></a>

            <ul className='permalinks'>
                <li><a href="#">Почетна</a></li>
                <li><a href="#about">За нас</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#portfolio">Производи</a></li>
                <li><a href="#testimonials">Задоволни клиенти</a></li>
                <li><a href="#contact">Контакт</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/gosevski10/"><FaSquareFacebook /></a>
                <a href="https://www.instagram.com/kristijan.goshevski/"><SiInstagram /></a>
                <a href="https://www.linkedin.com/in/kristijan-goshevski-856a35239/"><FaWhatsapp /></a>
                <a href="https://www.linkedin.com/in/kristijan-goshevski-856a35239/"><FaViber /></a>
            </div>

            <div className="footer__map">
            
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.4344792043484!2d21.93598571533993!3d41.870087979221654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1355cc090463ddcb%3A0x1906efcab269b83b!2sMladinska%2048%2C%20Sveti%20Nikole%202220!5e0!3m2!1sen!2smk!4v1630922874631!5m2!1sen!2smk"
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Google Maps Location"
></iframe>


            </div> <br></br> 

            <div className="footer__copyright">
                <small>&copy; STEFI-KRIS Сите права се задржани.</small> 
            </div>
        </footer>
    )
}

export default Footer;
