import styles4 from './About.module.css'
import React from 'react'
import python from '../assets/logo_images/python.png';
import C from '../assets/logo_images/C_Logo.png';
import css from '../assets/logo_images/css-3.png';
import html from '../assets/logo_images/html.png';
import js from '../assets/logo_images/js.png'
import next from '../assets/logo_images/next.png'
import react from '../assets/logo_images/science.png'
import git from '../assets/logo_images/social.png'
import ts from '../assets/logo_images/typescript.png'
import java from '../assets/logo_images/java.png'
import linux from '../assets/logo_images/linux.png'
import pytorch from '../assets/logo_images/pytorch.png'
import arrow from '../assets/logo_images/down_arrow.png'
import pfp from '../assets/logo_images/pfp.png'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const [height, setHeight] = useState(false);
    const sizing = useRef();
    const arrowDir = useRef();
    let fullHeight;
    return (<>
                <div className="container" style={{marginTop: '10em'}}>
                    <div className="container" id={styles4.about}>
                        <div className={styles4.mobile}>
                            <motion.img src={pfp} alt="" style={{alignSelf:'center', width: 'auto', scale: '1.2'}} id={styles4.fade}
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}/>
                            <motion.div className ="container" style={{ flexDirection: 'column', justifyContent: 'center'}} id={styles4.introText}
                            initial={{ opacity: 0, scale: 0.5  }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ ease: "easeOut", duration: .5 }}>
                                <div className="container" style={{ flexDirection: 'column'}} id={styles4.center}>
                                    <h1 id={styles4.font1}>I'm Jayden</h1>
                                    <h2 id={styles4.font1} style={{fontWeight:'500', color: 'rgb(199, 191, 191)'}}>
                                        I'm a student from University of Toronto studying computer science and statistics.
                                    </h2>
                                </div>
                            </motion.div>
                        </div>
                        <div className="container" style={{borderTop: 'solid #6d6d6d 1px', margin: '2em'}}></div>
                        <motion.div className={styles4.mobile}
                        initial={{ opacity: 0, translateY: 200  }}

                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ ease: 'easeOut', duration: .75, delay: 0.25 }}

                        >
                            <div className ="container" style={{ flexDirection: 'column', textAlign: 'center'}} id={styles4.introText}>
                                <h1 style={{fontSize: '3em', alignSelf:'center', marginBottom: '.3em'}} id={styles4.font1}>My Story</h1>
                                <p style={{lineHeight: '23px', overflow: 'hidden', height: '100px', transition: 'all .4s ease-in'}} ref={sizing} id={styles4.font2}>
                                  My journey into the world of programming began at a young age, driven by an insatiable curiosity and a desire to create. I started with simple HTML and CSS projects, gradually expanding my skills to include JavaScript and Python. My passion for coding led me to explore various technologies, including React and Next.js, which I now use to build dynamic web applications. As I continue my studies in computer science and statistics at the University of Toronto, I am excited to apply my knowledge to real-world challenges and contribute to innovative solutions.
                                </p>
                                <div className='container' style={{justifyContent:'center'}}>
                                    <div className='container' style={{position: 'absolute',height: '1.3em', width: '100vw',borderRadius: '30px', backgroundColor: '#151821', filter: 'blur(10px)', paddingTop: '1em'}}></div>
                                    <button style={{zIndex: '10', display: 'flex', justifyContent: 'center', marginTop:'-1em', padding: '1em', backgroundColor: 'transparent', width: '100%'}} onClick={
                                        () => {
                                            const fullHeight = sizing.current.scrollHeight + 'px';
                                            if (height){
                                                sizing.current.style.height = '100px';

                                            }
                                            else{
                                                sizing.current.style.height = fullHeight;

                                            }
                                            arrowDir.current.style.transform += 'rotate(180deg)'
                                            setHeight(!height);
                                        }
                                    }>
                                        <img src={arrow} alt="" style={{height: '1.3em', width: '1.3em', transition: 'transform .4s ease-in', scale: '1.3', marginTop:'1em'}} ref={arrowDir} id={styles4.arrowHover} />
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                        <div className="container" style={{borderTop: 'solid #6d6d6d 1px', margin: '2em'}}></div>
                            <motion.h1 style={{alignSelf: 'center'}} id={styles4.font1}
                            initial={{ opacity: 0, scale: 0.5  }}
                            viewport={{once: true}}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{ ease: "easeOut", duration: .5 }}>Skills</motion.h1>

                        <div className="container" style={{marginBottom: '2em'}}>
                            <motion.div className={styles4.languages}
                            initial={{ opacity: 0, translateY: 0  }}
                            viewport={{once: true}}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{ ease: 'easeOut', duration: .75 }}>
                                <img src={js} alt=""/>
                                <img src={ts} alt=""/>
                                <img src={html} alt=""/>
                                <img src={css} alt=""/>
                                <img src={react} alt=""/>
                                <img src={next} alt=""/>
                                <img src={git} alt=""/>
                                <img src={linux} alt=""/>
                                <img src={pytorch} alt=""/>
                                <img src={python} alt=""/>
                                <img src={C} alt=""/>
                                <img src={java} alt=""/>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </>);
}
export default About;