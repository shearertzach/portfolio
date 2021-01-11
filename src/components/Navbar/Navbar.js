import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

function Navbar() {
    const [scrollState, setScrollState] = useState('top')
    const [linkState, setLinkState] = useState('light')

    useEffect(() => {
        let listener = document.addEventListener('scroll', e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 10) {
                if (scrollState !== 'color') {
                    setScrollState('color')
                    setLinkState('dark')
                }
            } else {
                if (scrollState !== 'top') {
                    setScrollState('top')
                    setLinkState('light')
                }
            }
        })
        return () => {
            document.removeEventListener('scroll', listener)
        }
    }, [scrollState])

    return (
        <motion.div
            className={'navbar ' + scrollState}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <NavLink
                className={'nav-link ' + linkState}
                activeClassName={"nav-link-active " + linkState}
                exact
                to='/'
            >Home</NavLink>
            <NavLink
                className={'nav-link ' + linkState}
                activeClassName={"nav-link-active " + linkState}
                exact
                to='/projects'
            >Projects</NavLink>
            <NavLink
                className={'nav-link ' + linkState}
                activeClassName={"nav-link-active " + linkState}
                exact
                to='/about'
            >About</NavLink>
        </motion.div>
    )
}

export default Navbar