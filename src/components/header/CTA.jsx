import React from 'react'
import MyCV from '../../assets/cv_kristijan_goshevski.pdf'




const CTA = () => {
    return (
        <div className="cta">
            {/* <a href={MyCV} download={MyCV} className='btn'>Download CV</a> */}
            <a href="#contact" className='btn btn-primary' id="talk">Контактирајте не</a>
        </div>
    )
}

export default CTA
