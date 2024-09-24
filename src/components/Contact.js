import React from "react";
import {useState} from 'react'
import styles4 from "./contact.module.css"

const Contact = () => {
const [result, setResult] = useState("");

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
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (<>
                <div className="container" id={styles4.contact}>
                    <form onSubmit={onSubmit}>
                        <div className="container" id={styles4.email}>

                            <h1 className={styles4.container_contact}>Get in Touch!</h1>
                            <div className="container" id={styles4.text}>
                                <div className={styles4.inputbox}>
                                    <input type="text" name="First Name" required="required"/>
                                    <span>First Name</span>
                                </div>
                                <div className={styles4.inputbox}>
                                    <input type="text" name="Last Name" required="required"/>
                                    <span>Last Name</span>
                                </div>
                            </div>
                            <div className={styles4.inputbox} id={styles4.emailInput}>
                                <input type="text" name="Email" required="required"/>
                                <span>Email Address</span>
                            </div>
                            <div className={styles4.inputbox} id={styles4.emailInput}>
                                <textarea name="message" required="required"/>
                                <span>Your Message</span>
                            </div>
                            <div className={styles4.line}><button type="submit">Submit</button></div>

                        </div>
                    </form>

                </div>
            </>)
}

export default Contact;