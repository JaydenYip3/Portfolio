import styles from "./Home.module.css"
import Projects from "./Projects"
import {motion} from "framer-motion"
import React from 'react'

const Home = ({page,setPage}) => {

    return (
        <>
            <div className="container" id={styles.home}>
                <span>
                    <h1>Welcome</h1>
                </span>

            </div>
            <div className="container" id={styles.intro} style={{maxWidth: '800px', padding: '2em'}}>
                <motion.div className="container" id={styles.content} style={{gap:'3em'}}
                    initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)'}}
                    viewport={{once: true}}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)'
                    }}
                    transition={{
                        duration: .5,
                        ease: "easeOut"}}>
                    <img className={styles.image} src="https://unchainedcrypto.com/wp-content/uploads/2023/07/pfp-nft.png" alt="" />
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <span style={{ display: 'block', width: 'auto', margin: 0, padding: 0 }}>
                            <span style={{color: 'white', fontSize: '2rem'}}><button className={styles.about} onClick={() => {setPage("About")}}><h1 className={styles.font1} style={{fontWeight: '600'}}><u>Hey, I'm Jayden.</u></h1></button></span>
                            <font className={styles.font1} style={{color: 'rgba(255, 255, 255, 0.51)', fontWeight: '300'}}> I'm a student pursuing front-end development in hopes to becoming a full-stack developer.</font>
                        </span>
                    </div>
                </motion.div>

                <motion.h1 className={styles.robfont} style={{marginTop: '8em'}}
                    initial={{
                        x: '-100vw',
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 25,
                        duration: 0.5
                    }}
                    viewport={{once: true}}
                >
                Notable Projects

                </motion.h1>
                <Projects page={page} setPage={setPage}></Projects>
            </div>

        </>
    );
  }

  export default Home;