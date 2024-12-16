import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import logo from '../../assets/logo-removebg-preview.png';
import { BsPhone } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            {/* Phone number container styled like a navbar */}
            <div className='container phone'>
                <BsPhone /> +389 70 233 959
            </div>
            
            <div className="container header__container">
                <h3>Подружница за </h3>
                <h1>Дрвена граѓа</h1>
                <h4 className='text-light'>Можност за изработка во сите димензии!</h4>
                <CTA />
                <HeaderSocials />
                
                <div className='me'>
                    <img src={logo} alt="logo" />
                </div>

                <a href="#contact" className='scroll_down'>Отидете најдолу</a>
            </div>
        </header>
    );
};

export default Header;
