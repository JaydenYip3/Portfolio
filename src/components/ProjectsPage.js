import {motion} from "framer-motion"
import projects from "../assets/data.json";
import styles3 from "./ProjectsPage.module.css"
import React from 'react'
import {useState, useEffect} from 'react';


const ProjectsPage = () => {
    const stagger = (index) => 0.08 * index;
    const [select, setSelect] = useState(null);
    const [subList, setSubList] = useState(projects.data)
    const [Confirm, setConfirm] = useState(projects.data)

    const [Sort, SetSort] = useState(0);
    const [text, SetText] = useState('Unsorted');

    const [arrState, setArrState] = useState(false);
    const state = {
        options: [{name: 'C', id: 1},{name: 'Java', id: 2}, {name: 'Python', id: 3}]
    };
    const monthMap = new Map([
        ["January", 1],
        ["February", 2],
        ["March", 3],
        ["April", 4],
        ["May", 5],
        ["June", 6],
        ["July", 7],
        ["August", 8],
        ["September", 9],
        ["October", 10],
        ["November", 11],
        ["December", 12]
      ]);
      const [checkboxStates, setCheckboxStates] = useState({
        C: true,
        Java: true,
        Python: true,
        Javascript: true
    });

    const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxStates(prevStates => ({
        ...prevStates,
        [name]: checked
    }));
};



    const language_emoji = {
        "Java": (
            <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                alt="Java Progamming Logo"
                style={{ height: '1em', verticalAlign: 'text-top' }}
            />
        ),
        "C" : (
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/760px-C_Programming_Language.svg.png?20201031132917"
                alt="C Programming Logo"
                style={{ height: '1em', verticalAlign: 'text-top' }}
            />
        ),
        "Python": (
            <img
                src="https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem.png"
                alt="Python Progamming Logo"
                style={{ height: '1em', verticalAlign: 'text-top' }}/>
        ),
        "Javascript": (
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="Javascript Progamming Logo"
                style={{ height: '1em', verticalAlign: 'text-top' }}/>
        )
    }

    const toggle = (i) => {
        if (select === i){
            return setSelect(null);
        }
        setSelect(i);
    }

    useEffect(()=> {
        const languages = [];
        for (let lang in checkboxStates) {
            if (checkboxStates[lang]) {
                languages.push(lang);
            }
        }
        const filterList = projects.data.filter(project =>
            languages.includes(project.language)
        );
        let sortedList;
        if (Sort === 1) {
            // Sort A-Z by title
            sortedList = [...filterList].sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else if (Sort === 2) {
            // Sort Z-A by title
            sortedList = [...filterList].sort((a, b) =>
                b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        } else if (Sort === 3) {
            // Sort by date, assuming dates are in a comparable format like 'YYYY-MM-DD'
            sortedList = [...filterList].sort((a, b) =>
                new Date(b.date) - new Date(a.date));
        } else {
            // No sorting applied, just use the filtered list
            sortedList = [...filterList];
        }

        setSubList(sortedList);
        setConfirm(sortedList);
        setSelect(null);
    },[checkboxStates])


    return(
        <>
            <div className="container" style={{display: 'flex',marginTop: '10em', width: '100vw', justifyContent: 'center'}}>
                <div className="container" id={styles3.front}>
                    <div className="container" style={{flexDirection : 'row', gap: '1em', justifyContent: 'space-between'}}>
                        <div className="container" style={{gap: '1em'}}>
                        <div style={{position: 'relative', display: 'inline-block'}}>
                            <div className={styles3.sort}
                                onClick={() => {
                                    setArrState(!arrState); // Simplified toggle logic
                                }}>
                                Filter {arrState ? '▼' : '▶'}
                            </div>
                            {arrState && (
                                <div className={styles3.dropdown}>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label>
                                            <input type="checkbox" name="C" onChange={handleCheckboxChange} checked={checkboxStates.C}/>
                                            &nbsp;C
                                        </label>
                                        <label>
                                            <input type="checkbox" name="Java" onChange={handleCheckboxChange} checked={checkboxStates.Java}/>
                                            &nbsp;Java
                                        </label>
                                        <label>
                                            <input type="checkbox" name="Python" onChange={handleCheckboxChange} checked={checkboxStates.Python}/>
                                            &nbsp;Python
                                        </label>
                                        <label>
                                            <input type="checkbox" name="Javascript" onChange={handleCheckboxChange} checked={checkboxStates.Javascript}/>
                                            &nbsp;Javascript
                                        </label>
                                    </div>
                                </div>
                            )}

                        </div>
                            <button className={styles3.sort} id={styles3.button2} onClick={ () => {

                                    if (Sort === 0){
                                        const sortedList = [...subList].sort((a,b) => {
                                            return a.title.toLowerCase().localeCompare(b.title.toLocaleLowerCase());
                                        })
                                        setConfirm(sortedList)
                                        SetSort(1);
                                        SetText("Sort A-Z")
                                    }
                                    if (Sort === 1){
                                        const sortedList = [...subList].sort((a,b) => {
                                            return b.title.toLowerCase().localeCompare(a.title.toLocaleLowerCase());
                                        })
                                        setConfirm(sortedList);
                                        SetSort(2);
                                        SetText("Sort Z-A")
                                    }
                                    if (Sort === 2){
                                        const sortedList = [...subList].sort((a,b) => {
                                            const Awords = a.date.split(' ');
                                            const Bwords = b.date.split(' ');
                                            console.log(Awords[2])
                                            if (Awords[2] - Bwords[2] === 0){
                                                return monthMap.get(Bwords[0]) - monthMap.get(Awords[0]);
                                            }
                                            return Bwords[2] - Awords[2] ;

                                    })
                                        SetText("Sort Date");
                                        SetSort(3);
                                        setConfirm(sortedList);

                                    }
                                    if (Sort === 3){
                                        setConfirm(subList);
                                        SetSort(0);
                                        SetText('Unsorted');
                                    }
                                    }}>
                                     {text}</button>

                        </div>
                        <div className="container" style={{gap: '1em'}}>
                            <button className={styles3.sort} onClick={
                                () => {
                                    setSubList(projects.data);
                                    setConfirm(projects.data);
                                    setSelect(null);
                                    SetSort(0);

                                    setArrState(false);
                                    setCheckboxStates({
                                        C: true,
                                        Java: true,
                                        Python: true,
                                        Javascript: true
                                    })
                                    SetText('Unsorted')
                                }
                            } id={styles3.button2}>Reset</button>
                        </div>

                    </div>
                    {Confirm.map((project, i) => (
                        <>
                            <motion.div className={styles3.font} style={{display: 'block'}}
                                initial={{ opacity: 0, scale: 0.5  }}
                                animate={{ opacity: 1, scale: 1 , transition: { delay: stagger(i) } }}  // Apply delay here
                                transition={{ ease: "easeOut", duration: 1 }}>
                                <div className={styles3.title} style={{color: 'white', fontWeight: '1000' }}onClick={() => toggle(i)}>
                                    <h2>{project.emoji} {project.title}</h2>
                                    <span style={{fontSize: '1.5em', fontWeight: '200'}}>{select === i? '-': '+'}</span>
                                </div>
                                <div className={select === i? styles3.content: styles3.hide} style={{gap: '10px'}}>
                                    <p style={{color: 'white', fontSize:'1em'}}>{project.date} | {language_emoji[project.language]}</p>
                                    <p style={{color: 'white', fontSize: '1.1em', fontWeight:'300', color: 'rgb(196, 196, 196)'}}>{project.description}</p>
                                </div>
                            </motion.div>
                        </>
                ))}
                </div>

            </div>

        </>
    );
}

export default ProjectsPage;