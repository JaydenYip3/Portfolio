import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles4 from './contact.module.css';
import gitHub from '../assets/logo_images/github.png'

const Contact = () => {
  const [result, setResult] = useState("");
  const [confirm, setConfirm] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d909d604-3fd0-4f4c-abaa-e36610152439");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setConfirm(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      <div className="container" id={styles4.contact}>
        {confirm && (
          <div className="container" id={styles4.popup} onClick={() => setConfirm(false)}>
            <div className="container" id={styles4.content} style={{ display: 'block', textAlign: 'center', padding: '20px' }}>
              <div className="container" style={{alignItems: 'center', flexDirection: 'column'}}>
                <h2 style={{ color: '#00dfc4', fontFamily: 'Roboto Mono' }}>Success!</h2>
                <p style={{ fontSize: '16px', color: 'white', fontFamily: 'Roboto Mono' }}>{result}</p>
              </div>
            </div>
          </div>
        )}
        <motion.form onSubmit={onSubmit}
          initial={{ opacity: 0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          style={{marginTop: '200px'}}
        >
          <div className="container" id={styles4.email}>
          <div className="container" style={{ textAlign: 'center', marginTop: '20px', flexDirection:'column' }}>
            <h3 style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize:'2em' }}>Connect With Me</h3>
            <div className='container' style={{justifyContent: 'center'}}>
            <motion.a className={styles4.hovereffect} href="https://www.linkedin.com/in/yip-jayden/" target="_blank" rel="noopener noreferrer">
              <motion.img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" style={{ margin: '5px', height: '75px' }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
            <motion.a href="https://github.com/JaydenYip3" target="_blank" rel="noopener noreferrer">
              <motion.img src={gitHub} alt="GitHub" style={{ margin: '5px', height: '75px' }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
            <motion.a href="mailto:jaydenyip33@gmail.com" target="_blank" rel="noopener noreferrer">
              <motion.img src='https://cdn-icons-png.flaticon.com/128/726/726623.png' alt="Instagram" style={{ margin: '5px', height: '75px' }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
            </div>
          </div>
          <h3 style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize:'2em' , margin: '-1em'}}>or</h3>
            <h3 className={styles4.container_contact} style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize:'2em' }}>Reach Out Directly</h3>
            <div className="container" id={styles4.text}>
              <div className={styles4.inputbox}>
                <input type="text" name="First Name" required="required" maxLength="50"/>
                <span>First Name</span>
              </div>
              <div className={styles4.inputbox}>
                <input type="text" name="Last Name" required="required" maxLength="50"/>
                <span>Last Name</span>
              </div>
            </div>
            <div className={styles4.inputbox} id={styles4.emailInput}>
              <input type="text" name="Email" required="required" maxLength="50"/>
              <span>Email Address</span>
            </div>
            <div className={styles4.inputbox} id={styles4.emailInput}>
              <textarea name="message" required="required" maxLength="500"/>
              <span>Your Message</span>
            </div>
            <motion.button type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >Submit</motion.button>
          </div>
        </motion.form>
      </div>

    </>
  );
}

export default Contact;
