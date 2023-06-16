import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Bruno from "public/images/me.jpg";
import Caribbean from "public/images/caribbean.webp";
import Luca from "public/images/luca.jpg";

const About = () => {
  return (
    <div style={{ marginBottom: "100px" }} className={styles.container}>
      <h2 className={styles.mainTitle}>Welcome to my webpage!</h2>
      <div className={styles.animExpand}>
        <p className={styles.paragraph}>
          On this website you will find blog where I'll share posts about my
          personal journey. In the portfolio section, I'll present my projects
          related to diving and software development. If you're interested in
          getting in touch with me, there's a contact page where you can reach
          out. This entire website was created by me using Next.js, React,
          Typescript, Node.js and MongoDB.
        </p>
      </div>

      <h3 className={styles.subTitle}>A Bit About Me</h3>
      <div className={styles.containerTextogImg}>
        <Image src={Bruno} alt="me-bruno" className={styles.img} />

        <div className={styles.animSlideRight} style={{ margin: "auto 0" }}>
          {" "}
          <p className={styles.paragraph}>
            My name is Bruno Bueno, a 28-year-old Brazilian currently living in
            Norway. I was born in Niteroi, a city in the Rio de Janeiro State.
            From a young age, I developed a passion for surfing, and at 17, I
            discovered scuba diving and fell in love with the activity. Despite
            the pressure to pursue my studies and attend university, I decided
            to follow my passion for the ocean.
          </p>
          <p className={styles.paragraph}>
            After completing my school years, I gained admission to Universidade
            Federal Fluminense to study Economics. However, my heart was still
            drawn to the sea. I made the bold decision to switch my studies and
            pursued Marine Biology. I loved the field of study, but I felt an
            intense desire to travel, explore the world, and truly live life to
            the fullest.
          </p>
        </div>
      </div>

      <h3 className={styles.subTitle}>The Diving Adventure</h3>

      <div className={styles.containerTextogImg}>
        <div className={styles.animSlideLeft} style={{ margin: "auto 0" }}>
          <p className={styles.paragraph}>
            With some savings, I traveled to Roatan, a small island in the
            Caribbean, to pursue my dream of becoming a dive instructor. After
            completing the course, I realized that I didn't want to return to
            university life. I wanted to make a living out of diving. Two years
            later, on the same island, I met my wife, a Norwegian who was also
            seeking adventure and a break from the "rat race." Together, we
            lived a nomadic lifestyle, exploring different countries and diving
            in paradisiacal places.
          </p>
          <p className={styles.paragraph}>
            However, when the COVID-19 pandemic hit, our lives changed
            drastically. We made the decision to move to Norway and start
            afresh. Although I had always been interested in technology, it was
            during this time that I discovered my passion for software
            development. Through online resources and YouTube tutorials, I
            embarked on a journey to become a software developer. I applied and
            got accepted into a local boot camp and dedicated myself
            wholeheartedly to learning the craft.
          </p>
        </div>
        <Image src={Caribbean} alt="island" className={styles.imgHori} />
      </div>

      <h3 className={styles.subTitle}>The Path of Growth</h3>
      <div className={styles.containerTextogImg}>
        <Image src={Luca} alt="me-bruno" className={styles.imgLuca} />
        <div className={styles.animSlideRight} style={{ margin: "auto 0" }}>
          {" "}
          <p className={styles.paragraph}>
            Alongside my studies, I continued to work as a dive instructor on
            weekends and devoted time to learning Norwegian. At the end of the
            boot camp, my son was born prematurely, presenting yet another
            significant change in my life. However, fueled by my passion and
            determination to succeed, I persevered and worked even harder.
          </p>
          <p className={styles.paragraph}>
            Currently, I have completed the boot camp and secured an internship
            at a company specializing in energy optimization. Every day, I
            strive to learn and grow, both as a software developer and a dive
            instructor. This webpage serves as a hobby and a way for me to
            connect with like-minded individuals. I am also open to exciting
            opportunities that may come my way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
