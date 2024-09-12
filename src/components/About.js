import styles4 from './About.module.css'

const About = () => {
    return (<>
                <div className="container" style={{marginTop: '10em'}}>
                    <div className="container" id={styles4.about}>
                        <div className={styles4.mobile}>
                            <img src="" alt=""/>
                            <div className ="container" style={{ flexDirection: 'column'}} id={styles4.introText}>
                                <h1>I'm Jayden.</h1>
                                <h2>
                                    I'm a student from University of Toronto studying computer science and statistics.
                                </h2>
                            </div>
                        </div>
                        <div className="container" style={{borderTop: 'solid #6d6d6d 1px', margin: '2em'}}></div>
                        <div className={styles4.mobile}>
                            <div className ="container" style={{ flexDirection: 'column'}} id={styles4.introText}>
                                <h1 style={{fontSize: '3em'}}>My Story</h1>
                                <p>
                                    To begin, we have to visit the historic and remarkable year of 2021. This was when the pandemic was a ongoing world-wide issue, when Joe Biden
                                    became elected as the 48th preseident of the United States, when the first Canadian took stage at the biggest American sporting
                                    event, but most importantly... the year I took my first introductory computer science class. Taking this
                                    class opened my eyes to a new realm of problem-solving and critical thinking. Despite yielding a substandard grade,
                                    I enojoyed every moment of the class and decided to pursue taking more advanced computing courses. Skipping a few years later, I
                                    had discovered front-end development. Thus far, although enjoying programming, it was difficult to consistently develop
                                    intangible programs, however front-end development changed this mindset. Front-end development really brought back that
                                    innovative creativity, freedom, and excitment every programmer once had. I plan on continuing on this path while
                                    learning to incorporate backend management to my work for even more functionality and purpose.

                                </p>
                            </div>
                            <img src="" alt=""/>
                        </div>

                    </div>
                    <ul>
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                    </ul>
                </div>
            </>);
}
export default About;