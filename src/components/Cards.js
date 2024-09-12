import { useState, useEffect, useRef } from 'react';
import styles2 from "./Cards.module.css"

const Cards = () => {
    const [card, setCard] = useState(0);
    const Default = useRef();
    const Projects = useRef();
    const About = useRef();
    const Contact = useRef();
    const indexMap = {
        0: "Default",
        1: "Projects",
        3: "About",
        4: "Contact"
      };

    const left = () => {
        if (card === 0){
            setCard(3)
            return;
        }
        setCard(card => card - 1)
    }
    const right = () => {
        if (card === 3){
            setCard(0);
            return;
        }
        setCard(card => card + 1)
    }
    // useEffect(() => {
    //     switch (card){
    //         case 0:
    //             Default.current
    //     }
    // }, [card])
    return (
        <>

            {window.screen.width >= 500?(
                <div className="container" id={styles2.introduction}>
                    <button className={styles2.left} onClick={left}>&lt;</button>
                    {card === 0? (
                        <>
                            <div className={styles2.glass} id={styles2.box}>
                                <div className={styles2.image}>
                                    <img src="https://unchainedcrypto.com/wp-content/uploads/2023/07/pfp-nft.png"></img>
                                </div>
                                <div className={styles2.text}>
                                    <h1>Hello I am Jayden.</h1>
                                    <p>I am a front-end developer aspiring to become a full-stack developer.
                                        Welcome to my web portfolio where you will be able to explore my personal
                                        projects, experience, skills, and personality. Feel free to explore the
                                        portfolio and provide any feedback if neccessary. My contact can be found from
                                        the navigation bar above. I would like to thank you in advance for your time
                                        and consideration.
                                    </p>
                                </div>
                            </div>
                        </>
                    ):null}
                    {card === 1?(
                        <>
                            <div className={styles2.glass} id={styles2.box}>
                                <div className={styles2.image}>
                                    <img src="https://unchainedcrypto.com/wp-content/uploads/2023/07/pfp-nft.png"></img>
                                </div>
                                <div className={styles2.text}>
                                    <h1>Hello I am Jayden.</h1>
                                    <p>I am a front-end developer aspiring to become a full-stack developer.
                                        Welcome to my web portfolio where you will be able to explore my personal
                                        projects, experience, skills, and personality. Feel free to explore the
                                        portfolio and provide any feedback if neccessary. My contact can be found from
                                        the navigation bar above. I would like to thank you in advance for your time
                                        and consideration.
                                    </p>
                                </div>
                            </div>
                        </>
                    ):null}
                    <button className={styles2.right} onClick={right}>&gt;</button>
                </div>

            ):(
                <>
                <div className={styles2.glass} id={styles2.box}>
                    <div className={styles2.image}>
                        <img src="https://unchainedcrypto.com/wp-content/uploads/2023/07/pfp-nft.png"></img>
                    </div>
                    <div className={styles2.text}>
                        <h1>Hello I am Jayden.</h1>
                        <p>I am a front-end developer aspiring to become a full-stack developer.
                            Welcome to my web portfolio where you will be able to explore my personal
                            projects, experience, skills, and personality. Feel free to explore the
                            portfolio and provide any feedback if neccessary. My contact can be found from
                            the navigation bar above. I would like to thank you in advance for your time
                            and consideration.
                        </p>
                    </div>
                </div>
                <button>Left</button>
                <button>Right</button>
                </>
            )}
        </>
    )
}

export default Cards;