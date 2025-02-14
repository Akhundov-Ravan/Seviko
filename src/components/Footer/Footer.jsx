import React from "react";
import styles from "./Footer.module.css";
// import logo from "../../assets/Logo.jpg";
import mail from "../../assets/email.png";



const Footer = () => {
  return (
    <footer>
      <div className={styles.logo}>
        <div>
          SEVİKO.<span>AZ</span>
        </div>
        {/* <div><img src={logo} alt=""/></div> */}
        <div className={styles.contacts}>
          <p>
            <img className={styles.icon} src={mail} alt="" />
            ravan.akhundov@gmail.com
          </p>
        </div>
        {/* <div className={styles.socials}>
        <img src={fb} alt="" />
        <img src={ins} alt="" />
        <img src={link} alt="" />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
