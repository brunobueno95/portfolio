import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Me from "public/images/me.jpg";

const Contact = () => {
  return (
    <div style={{ marginBottom: "100px" }} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.imageWrapper}>
            <Image src={Me} alt="Contact" className={styles.imgProfile} />
          </div>
          <div className={styles.info}>
            {" "}
            <h1 className={styles.mainTitle}>Get in Touch</h1>
            <div className={styles.contactWrapper}>
              <div className={styles.contactSection}>
                {" "}
                <h2 className={styles.subTitle}>Software</h2>
                <h3>Email:</h3>
                <p className={styles.paragragraph}>brunoswd@gmail.com</p>
                <h3>Linkedin:</h3>
                <p className={styles.paragragraph}>@brunoswd</p>
              </div>
              <div className={styles.line}></div>
              <div className={styles.contactSection}>
                {" "}
                <h2 className={styles.subTitle}>Scubadive</h2>
                <h3>Email:</h3>
                <p className={styles.paragragraph}> brunodiver@gmail.com</p>
                <h3>Linkedin:</h3>
                <p className={styles.paragragraph}>@brunoDiver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
