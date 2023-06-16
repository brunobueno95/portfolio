import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Bodyboard from "public/images/bbBrasil.jpg";
import Turtle from "public/images/turtleArraial.jpg";
import Course from "public/images/courseArraial.jpg";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Brasil = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio/dive">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>
        Brasil - A Journey from Waves to Depths
      </h1>

      <div className={styles.containerTextogImg}>
        {" "}
        <div className={styles.animSlideLeft}>
          <p
            style={{ alignSelf: "center", marginRight: "20px" }}
            className={styles.paragraph}
          >
            Brazil, my homeland, holds a special place in my heart. It is not
            only where I was born but also where my profound connection with the
            ocean began. From a young age, I immersed myself in the world of
            surfing, drawn to the allure of the waves. However, the beach break
            near my home is renowned as one of the most challenging and powerful
            in Brazil. This led me to explore the sport of bodyboarding, which
            thrives in my hometown. Annually, we host the prestigious World
            Tour, attracting bodyboarders from around the globe. The combination
            of heavy waves, hollow barrels, and perfect ramps for aerial
            maneuvers creates an ideal playground for enthusiasts like myself.
            These early encounters with extreme conditions instilled in me a
            profound understanding of and respect for the mighty ocean.
          </p>
        </div>
        <Image src={Bodyboard} alt="bodyboard" className={styles.img} />
      </div>

      <div className={styles.containerTextogImgRevert}>
        <Image src={Turtle} alt="bodyboard" className={styles.img} />
        <div className={styles.animSlideRight}>
          <p style={{ alignSelf: "center" }} className={styles.paragraph}>
            As time went on, my passion for the ocean grew, and I yearned to
            explore the underwater world. At the age of 17, I ventured to a
            neighboring city to complete my PADI Open Water Course. I instantly
            fell in love with diving and knew I wanted to pursue it further
            doing later on the Advance Open Water.Every opportunity i had , I
            wanted to be diving, so I started taking freelance jobs, capturing
            photographs of new beginners diving and guiding more experienced
            divers. This experience fueled my desire to become a certified
            instructor.
          </p>
        </div>
      </div>

      <div className={styles.containerTextogImg}>
        <div className={styles.animSlideLeft}>
          <p style={{ alignSelf: "center" }} className={styles.paragraph}>
            After a few years, I embarked on a journey to the Caribbean island
            of Roatan, where I successfully completed my PADI instructor
            certification. Returning to Brazil, two years later, I conducted
            numerous diving courses, guided divers, and introduced many to the
            wonders of discover scuba diving. I also had the opportunity to
            train trainees, gaining valuable experience in various conditions.
            From diving in 17-degree water to dealing with both excellent and
            poor visibility, and even navigating strong currents, I honed my
            skills and deepened my appreciation for the marine environment.
          </p>
        </div>
        <Image src={Course} alt="bodyboard" className={styles.img} />
      </div>
    </div>
  );
};

export default Brasil;
