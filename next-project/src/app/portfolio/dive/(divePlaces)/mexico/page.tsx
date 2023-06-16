import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Wave from "public/images/mexWave.jpg";
import Dive from "public/images/mexDive.jpg";
import Course from "public/images/mexCourse.jpg";
import { FaArrowLeft } from "react-icons/fa";

const Mexico = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio/dive">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>
        Mexico - Diving Journey and Personal Growth
      </h1>

      <div className={styles.containerTextogImg}>
        <div className={styles.animSlideLeft} style={{ alignSelf: "center" }}>
          <p className={styles.paragraph}>
            I had the incredible opportunity to live in Mexico for an entire
            season, driven by my lifelong dream to explore Puerto Escondido.
            Known worldwide for its big waves, this destination is often
            referred to as "The Mexican Pipeline." I arrived without a job,
            relying solely on my courage and determination, confident that
            everything would fall into place. Although my Spanish skills were
            only intermediate, I embarked on this adventure, ready to embrace
            the unknown.
          </p>

          <p className={styles.paragraph}>
            Puerto Escondido welcomed me with awe-inspiring waves and an
            abundance of marine life. On the second day of my arrival, I was
            blessed with an extraordinary sight during a surf session – a mother
            and calf humpback whale gracefully swimming by. This magical
            encounter set the tone for my time in Mexico.
          </p>
        </div>
        <Image src={Wave} alt="padiInstructor" className={styles.img} />
      </div>

      <div className={styles.containerTextogImgRevert}>
        <Image src={Course} alt="padiInstructor" className={styles.img} />
        <div
          className={styles.animSlideLeft}
          style={{ alignSelf: "center", marginLeft: "20px" }}
        >
          {" "}
          <p className={styles.paragraph}>
            The city had only two dive shops, so I wasted no time in introducing
            myself and submitting my resume. The following day, despite facing
            communication challenges, I successfully secured a job after an
            interview with one of the dive shops. From teaching courses to
            catering to a diverse range of customers, including beginners and
            seasoned divers, my experience in Mexico was as varied as it was
            rewarding.
          </p>
          <p className={styles.paragraph}>
            The underwater world offered breathtaking dives, showcasing a
            plethora of marine fauna. From majestic mobula rays and impressive
            schools of jacks to awe-inspiring encounters with whale sharks and
            elegant eagle rays, each dive was a true spectacle. Occasionally, I
            even had the privilege of encountering sharks. This was my first
            foray into Pacific diving, where conditions could change
            dramatically without warning.
          </p>
        </div>{" "}
      </div>

      <div className={styles.containerTextogImg}>
        <div
          className={styles.animSlideRight}
          style={{ alignSelf: "center", marginRight: "20px" }}
        >
          <p className={styles.paragraph}>
            My time in Mexico was a perfect balance of surfing the biggest waves
            of my life and navigating strong currents during diving excursions.
            Despite the challenges, every moment was filled with wonder and
            excitement. I learned invaluable lessons, honed my skills in adverse
            conditions, and gained a wealth of experience. The rhythm of my days
            consisted of early morning surf sessions, followed by a scooter ride
            to work, a brief lunch break at home, and then back to the waves.
            Along the way, I forged meaningful connections with the locals,
            improving my Spanish proficiency rapidly.
          </p>

          <p className={styles.paragraph}>
            The confidence and resilience I developed during my time in Mexico
            have been transformative. This experience, where hard work and an
            adventurous spirit converged, remains one of the highlights of my
            life.
          </p>
        </div>
        <Image src={Dive} alt="padiInstructor" className={styles.img} />
      </div>
    </div>
  );
};

export default Mexico;
