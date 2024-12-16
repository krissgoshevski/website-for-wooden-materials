import React from 'react'
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
import { useState } from 'react';
import { MdInfo } from 'react-icons/md';       // Material Design icon




const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdInfo /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLibraryBooks /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail /></a>
        </nav>
    )
}

export default Nav