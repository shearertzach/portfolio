import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.css'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='about'>
                <motion.h2
                    className='introduction-header'
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                >Hi, my name is Zach!</motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                >Somehow you've made it here to my porfolio website and you we're interested enough to click the about me tab. You probably want to learn a little about me since you're here, so here we go! I do want to mention that this is really just about my experience and what I hope to see in my future with software development. It's a little more on the personal side so if you aren't entirely interested I totally get it, it's no biggie :)</motion.p>


                <motion.h2
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    className='education-header'
                >Educational Experiences</motion.h2>


                <motion.p
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                >I'm not like most software developers you meet; I started fairly late compared to most of them. My true passion with computer programming and software came  when I was in my early high-school years. I took 5 out of 7 of the computer classes they had to offer throughout my first two years. After those first two years I was admitted into a much modern software development class that was instructed by specialized instructors. I took two of these classes the last two years of high-school - one for Swift and one for Web Development.</motion.p>


                <motion.p
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                >I decided to expand my skills much further than I already had and decide to attend a specialization school in California called "Make School." At Make School I could focus on more of a personalized track while learning general software development on top of that. After two years, some summer classes, and an internship, I will be out of there with a bachelors degree and on my way to the techology industry!</motion.p>


                <motion.h2
                    className='future-header'
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
                >What I hope to see</motion.h2>


                <motion.p
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                >Like I said, my passion for computers came in early high-school. The company responsible for that (which may be unoriginal) is Amazon. I was very young when they were just an online book store and to see them grow into what they are today amazes me. The sense of growth and progression is what fuels me to learn more about software development every day. I've always had the dream to work with people/companies that are actively moving foward, making a difference in the world. In the future I hope to make a huge impact on technology by working alongside people that share the same passion.</motion.p>

                <Link to='/' className='backButton'>← Back</Link>
            </div>
        )
    }
}

export default About