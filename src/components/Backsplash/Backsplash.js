import React, { Component } from 'react'
import { motion } from 'framer-motion'
import './Backsplash.css'

class Backsplash extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <motion.div 
                className='backsplash'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <img src={`${process.env.PUBLIC_URL}/assets/images/cartoonself.png`} alt='cartoonimage'></img>
            </motion.div>
        )
    }
}

export default Backsplash