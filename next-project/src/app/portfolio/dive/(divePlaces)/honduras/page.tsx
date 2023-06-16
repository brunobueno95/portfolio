import React from "react";
import styles from "./page.module.css";
import Padi from "public/images/mePadi.jpg";
import Shark from "public/images/roaShark.jpg";
import Me from "public/images/meRoa.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Honduras = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio/dive">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>
        Honduras - The beggining of a dive career
      </h1>
      <div className={styles.containerTextogImg}>
        <Image src={Padi} alt="padiInstructor" className={styles.img} />
        <div className={styles.animSlideRight} style={{ alignSelf: "center" }}>
          <p className={styles.paragraph}>
            Honduras, specifically the small island of Roatan, holds a special
            place in my heart as it is where I embarked on my journey as a dive
            instructor. This beautiful island became my home as I pursued my
            PADI instructor certification and took my first steps into the world
            of teaching diving. It was a transformative period in my life, and I
            cherish the memories and experiences I gained during my two-year
            stay.
          </p>
          <p className={styles.paragraph}>
            Roatan provided the perfect backdrop for honing my skills as a dive
            instructor. During my time there, I worked both as a full-time
            instructor and as a freelancer, enabling me to gain a diverse range
            of experiences. From teaching my very first Open Water student to
            guiding my first Dive Master student, each step was a rewarding and
            enriching learning experience.
          </p>
        </div>
      </div>

      <div className={styles.containerTextogImg}>
        {" "}
        <div className={styles.animSlideLeft}>
          <p className={styles.paragraph} style={{ alignSelf: "center" }}>
            The island of Roatan itself is a true gem, attracting young
            travelers from around the world with its natural wonders and vibrant
            atmosphere. The diving conditions there are unparalleled. With
            excellent visibility, vibrant coral reefs, and abundant marine life,
            every dive was a feast for the senses. The presence of deep walls
            and intriguing "swiss cheese" rock formations allowed for
            exhilarating dives that increased my technical abilities.
          </p>
        </div>
        <Image src={Shark} alt="shark" className={styles.imgShark} />
      </div>

      <div className={styles.containerTextogImgRevert}>
        {" "}
        <Image src={Me} alt="padiInstructor" className={styles.imgRoa} />
        <div className={styles.animSlideRight} style={{ alignSelf: "center" }}>
          {" "}
          <p className={styles.paragraph}>
            My time in Honduras as a dive instructor not only enhanced my
            knowledge and expertise in diving but also enriched my life in
            countless ways. The memories I made and the friendships I formed
            will always hold a special place in my heart, and the experience
            continues to bring me joy whenever I reflect upon it.
          </p>{" "}
          <p className={styles.paragraph}>
            While the majority of dives were filled with awe and wonder, the
            unpredictable nature of the ocean occasionally presented challenging
            conditions. Dealing with strong currents and waves tested my skills
            as an instructor and taught me the importance of adaptability and
            safety in the underwater environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Honduras;
