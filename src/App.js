import { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './components/Home.js'
import ProjectsPage from './components/ProjectsPage.js'
import About from './components/About.js'


function App() {
  const [page, setPage] = useState("Home");
  const [navbar, setNavbar] = useState(false);
  const buttonContainerRef = useRef(null); // Ref for the button container

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200){
        setNavbar(true);
      }
      else{
        setNavbar(false)
      //   setTimeout(() => {
      //     setNavbar(false);
      // }, 1000);
      }

    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);

    if (buttonContainerRef.current) {
      const children = buttonContainerRef.current.querySelectorAll('li');
      const buttonBackground = document.querySelector('.background-button');
      if (buttonBackground) {
        const indexMap = {
          "Home": 0,
          "Projects": 1,
          "About": 2,
          "Contact": 3
        };
        const child = children[indexMap[page]];
        buttonBackground.style.left = `${child.offsetLeft}px`;
        buttonBackground.style.width = `${child.offsetWidth}px`;
      }
    }
  }, [page]); // Run this effect when `page` changes

  return (
    <>
      <nav>
        <ul>
          <div className={navbar ? 'active' : ''}>
            <div className='button-container' ref={buttonContainerRef}>
              <div className='background-button'></div>
              <li><button className={navbar && "Home" === page ? 'active' : ''} onClick={() => setPage("Home")}>Home</button></li>
              <li><button className={navbar && "Projects" === page ? 'active' : ''} onClick={() => setPage("Projects")}>Projects</button></li>
              <li><button className={navbar && "About" === page ? 'active' : ''} onClick={() => setPage("About")}>About</button></li>
              <li><button className={navbar && "Contact" === page ? 'active' : ''} onClick={() => setPage("Contact")}>Contact</button></li>
            </div>
          </div>
        </ul>
      </nav>
      <div className='container' id='full'>
        {page === "Home" && <Home page={page} setPage={setPage}></Home>}
        {page === "Projects" && <ProjectsPage></ProjectsPage>}
        {page === "About" && <About></About>}
        {page === "Page 4" && <div>Page 4 Content</div>}
      </div>

    </>
  );
}

export default App;
