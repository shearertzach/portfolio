import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://github.com/shearertzach'><img src={`${process.env.PUBLIC_URL}/assets/socialMediaIcons/github.svg`} /></a>
            <a href='https://www.linkedin.com/in/zach-shearer/'><img src={`${process.env.PUBLIC_URL}/assets/socialMediaIcons/linkedin.svg`} /></a>
        </div>
    )
}