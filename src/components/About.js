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

const About = () => {

    return (<>
                <div className="container" style={{marginTop: '10em'}}>
                    <div className="container" id={styles4.about}>
                        <div className={styles4.mobile}>
                            <img src="" alt="" style={{alignSelf:'center'}}/>
                            <div className ="container" style={{ flexDirection: 'column', justifyContent: 'center'}} id={styles4.introText}>
                                <div className="container" style={{ flexDirection: 'column'}} id={styles4.center}>
                                    <h1>I'm Jayden.</h1>
                                    <h2>
                                        I'm a student from University of Toronto studying computer science and statistics.
                                    </h2>
                                </div>

                            </div>
                        </div>
                        <div className="container" style={{borderTop: 'solid #6d6d6d 1px', margin: '2em'}}></div>
                        <div className={styles4.mobile}>
                            <div className ="container" style={{ flexDirection: 'column'}} id={styles4.introText}>
                                <h1 style={{fontSize: '3em', alignSelf:'center', marginBottom: '1em'}}>My Story</h1>
                                <p style={{lineHeight: '23px'}}>
                                    To begin, we have to visit the historic and remarkable year of 2021. This was when the pandemic was a ongoing world-wide issue, when Joe Biden
                                    became elected as the 48th preseident of the United States, when the first Canadian took stage at the biggest American sporting
                                    event, but most importantly... the year I took my first introductory computer science class. Taking this
                                    class opened my eyes to a new realm of problem-solving and critical thinking. Despite yielding a substandard grade,
                                    I enojoyed every moment of it and decided to pursue taking more advanced computing courses. Skipping a few years later, I
                                    had been introduced to front-end development. Thus far, although enjoying programming, it was difficult to consistently develop
                                    precievable programs, however front-end development changed this mindset. Front-end development really brought back that
                                    innovative creativity, freedom, and excitment every programmer once had. I plan on continuing on this path while
                                    learning to incorporate backend management to my work for even more functionality.

                                </p>
                            </div>
                            <img src="" alt="" style={{alignSelf: 'center'}}/>
                        </div>
                        <div className="container" style={{borderTop: 'solid #6d6d6d 1px', margin: '2em'}}></div>
                            <h1 style={{alignSelf: 'center'}}>Skills</h1>

                        <div className="container">
                            <div className={styles4.languages}>
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

                            </div>
                        </div>
                    </div>
                </div>
            </>);
}
export default About;