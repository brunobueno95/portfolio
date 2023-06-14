"use client";
import React from "react";
import Image from "next/image";
import Shark from "public/images/shark.png";
import Arraial from "public/images/arraial.jpg";
import Mexico from "public/images/mexico.jpg";
import Malapascua from "public/images/malapascua.jpg";
import Norway from "public/images/lofoten.jpg";
import Roatan from "public/images/reef-shark.jpg";
import styles from "./page.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

const Dive = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>Dive experience</h1>{" "}
      <div>
        <p className={styles.paragraph}>
          I have been a dive instructor for 7 years, teaching in 5 different
          countries: Brazil, Honduras, Mexico, the Philippines, and Norway.
          Throughout my career, I have gained extensive experience and knowledge
          in the diving industry.
        </p>
        <p className={styles.paragraph}>
          I have taught divers at all levels, from beginners to professionals,
          providing comprehensive training and guidance. My expertise includes
          teaching in two different certification organizations, PADI
          (Professional Association of Diving Instructors) and CMAS
          (Confédération Mondiale des Activités Subaquatiques). I am qualified
          to teach a wide range of specialties, including nitrox, deep diving,
          wreck diving, drift diving, and many more. Additionally, I am
          certified as an Emergency First Response (EFR) instructor.
        </p>
        <p className={styles.paragraph}>
          Throughout my career, I have had the opportunity to dive in various
          conditions, ranging from optimal visibility and warm waters to
          challenging environments with freezing temperatures and limited
          visibility. I have encountered different types of currents and have
          learned valuable lessons from each experience, making me adaptable and
          knowledgeable in handling diverse diving situations.
        </p>
        <p className={styles.paragraph}>
          In addition to my diving skills, I am fluent in four languages:
          English, Spanish, Portuguese, and Norwegian. This multilingual ability
          allows me to effectively communicate and connect with divers from
          different backgrounds, ensuring a safe and enjoyable diving experience
          for all.
        </p>
      </div>
      <div className={styles.container}>
        <Link href="/portfolio/dive/brasil">
          {" "}
          <div className={styles.card}>
            <Image src={Arraial} alt="me-bruno" className={styles.img} />
            <div className={styles.cardName}>Brasil</div>
          </div>
        </Link>

        <Link href="/portfolio/dive/honduras">
          {" "}
          <div className={styles.card}>
            <Image src={Roatan} alt="me-bruno" className={styles.img} />
            <div className={styles.cardName}>Honduras</div>
          </div>
        </Link>

        <Link href="/portfolio/dive/mexico">
          <div className={styles.card}>
            <Image src={Mexico} alt="me-bruno" className={styles.img} />
            <div className={styles.cardName}>Mexico</div>
          </div>
        </Link>

        <Link href="/portfolio/dive/philippines">
          <div className={styles.card}>
            <Image src={Malapascua} alt="me-bruno" className={styles.img} />
            <div className={styles.cardName}>Philippines</div>
          </div>
        </Link>
        <Link href="/portfolio/dive/norway">
          <div className={styles.card}>
            <Image src={Norway} alt="me-bruno" className={styles.img} />
            <div className={styles.cardName}>Norway</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dive;
