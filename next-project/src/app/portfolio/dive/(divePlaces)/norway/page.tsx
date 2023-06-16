import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Stavern from "public/images/nwStavern.jpg";
import Lofoten from "public/images/nwLofoten.jpg";
import Team from "public/images/nwTeam.jpg";
import { FaArrowLeft } from "react-icons/fa";
const Norway = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio/dive">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>Norway - Exploring Arctic Waters</h1>

      <div className={styles.containerTextogImg}>
        <div className={styles.animSlideLeft} style={{ alignSelf: "center" }}>
          {" "}
          <p className={styles.paragraph}>
            During the challenging times of the COVID-19 pandemic, my wife, who
            is Norwegian, and I decided we wanted some sense of stability and
            security. That's when we decided to come to Stavern, her hometown, a
            charming small coastal city in the south of Norway. It provided us
            with what we needed during that global chaos.
          </p>
          <p className={styles.paragraph}>
            Living here for a few months, I quickly integrated into the diving
            community, establishing valuable connections. It wasn't long before
            I had the opportunity to spend a memorable summer in the captivating
            Lofoten Islands, working as a dive instructor. The place is truly
            incredible, with its majestic mountains, steep cliffs, and
            mesmerizingly clear blue ocean.
          </p>
        </div>

        <Image src={Stavern} alt="padiInstructor" className={styles.img} />
      </div>

      <div className={styles.containerTextogImgRevert}>
        <Image src={Lofoten} alt="Lofoten" className={styles.img} />
        <div className={styles.animSlideRight}>
          <p style={{ alignSelf: "center" }} className={styles.paragraph}>
            Although I had some prior experience with drysuits, it was in
            Lofoten, with daily dives, teaching sessions, discover scuba dives,
            and guiding, that I honed my skills and expertise. Upon returning to
            Stavern, I continued my teaching journey at a local dive school near
            my home. As my connections grew, I expanded my reach to the nearby
            city of Sandefjord, where I have been teaching PADI courses. I have
            also become a certified instructor for CMAS, allowing me to teach
            under both organizations. The season here is from the beggining of
            spring to the beggining of autumn, and every year is packed with
            courses, full of students, from a big variety of ages and
            background. In the colder months, The diving stays present, but just
            as a hobby.
          </p>
        </div>
      </div>

      <div className={styles.containerTextogImg}>
        <div className={styles.animSlideLeft}>
          <p style={{ alignSelf: "center" }} className={styles.paragraph}>
            Diving in Norway presents unique challenges, as the water here is
            the coldest I have ever encountered. This has provided me with
            invaluable experience in handling different equipment requirements
            and procedures. Every day, I strive to deepen my knowledge in both
            diving and teaching, and I am grateful for the opportunity to remain
            active as a dive instructor. Moreover, I am proud to serve as a
            board member in the Stavern Dive Club, where we continually evolve,
            grow, and enhance the diving community.
          </p>
        </div>
        <Image src={Team} alt="dive team" className={styles.img} />
      </div>
    </div>
  );
};

export default Norway;
