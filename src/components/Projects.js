import styles2 from "./Projects.module.css"
import {motion} from "framer-motion"
import React from 'react'

const Projects = ({page, setPage}) => {
    return (
        <>
            <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '2em', marginTop: '1em'}}>
                <motion.div className="container" id={styles2.project}
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
                    <h1>📱 Social Media Networking Model</h1>
                    <p>March • 2024 | &nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/760px-C_Programming_Language.svg.png?20201031132917" alt="C Programming Logo" style={{height: "1em", verticalAlign: 'text-top'}}/></p>
                    <h2>Developed a dynamic networking model that allows users to manage friendships and brand affiliation.
                        The project leverages several unique data structures joint with matricies to establish complex relationships
                        between users and brands. Intensive debugging techniques as well as unit testing were involved in the
                        process to establish reliable code. Additional programs were used as well to help program's sustainability, such as GNU debugger.
                    </h2>
                </motion.div>
                <motion.div className="container" id={styles2.project}
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
                    <h1>💬 Comment Section</h1>
                    <p>July • 2024 | &nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript Progamming Logo" style={{height: "1em", verticalAlign: 'text-top'}}/></p>
                    <h2>Built a fully functional front-end use commenting system. The infrastructure stack for this web application is using HTML, CSS, JS, and React. The program utilized object
                        models that accurately respresents user information, posts, and replies. Using objects allows for a dynamic system while attaining scalability and readibilty as features.
                    </h2>
                </motion.div>
                <motion.div className="container" id={styles2.project}
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
                    <h1>💿 Records Collection System</h1>
                    <p>March • 2023 | &nbsp;<img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="Java Progamming Logo" style={{height: "1em", verticalAlign: 'center'}}></img>(Java)</p>
                    <h2>Constructed a Object-Oriented-Programming based CD collection system. Utilized custom comparable functions for sorting algorithms to utilize. Progam was tested for scalability with efficient sorting and searching algorithms for user interactions. Progams interface was based off file management systems like file explorer for user comfort.
                    </h2>
                </motion.div>
                <div style={{marginTop: '1em'}}>
                    <div className= {styles2.line}></div>
                    <motion.button className={styles2.more} onClick={()=>{setPage("Projects")}}
                        viewport={{once: true}}
                        initial={{opacity: 0}}
                        whileInView={{opacity:1}}>View All</motion.button>
                </div>
            </div>
        </>
    )
}
export default Projects;