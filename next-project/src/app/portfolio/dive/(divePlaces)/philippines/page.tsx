import React from "react";
import styles from "./page.module.css";
import Dive from "public/images/phiDive.jpg";
import Shark from "public/images/phiShark.jpg";
import Nudi from "public/images/phiNudi.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Philippines = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio/dive">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>
        Philippines - Diving Dream and Enriching Experiences
      </h1>
      <div className={styles.containerTextogImgRevert}>
        <Image src={Shark} alt="padiInstructor" className={styles.img} />
        <div className={styles.animSlideRight} style={{ alignSelf: "center" }}>
          <p className={styles.paragraph}>
            My journey to the Philippines was driven by a sense of adventure and
            a burning desire to pursue my dreams. With no job lined up, I set
            off with a clear vision in mind. Malapascua, renowned as the best
            place in the world to dive with thresher sharks, fascinated me with
            its elusive, rare, and stunningly beautiful marine creatures. The
            mere thought of encountering these magnificent sharks up close
            filled me with awe.
          </p>

          <p className={styles.paragraph}>
            During my voyage to the small island, I met a fun couple from Mexico
            who shared my passion for the ocean. Instantly connecting with them,
            I seized the opportunity to be their instructor for their Open Water
            course. Together, we embarked on this exciting underwater journey,
            choosing a small dive shop run by locals. The course was a
            resounding success, and it opened doors for more opportunities. The
            dive shop entrusted me with additional courses, allowing me to
            refine my teaching and guiding skills.
          </p>
        </div>
      </div>
      <div className={styles.containerTextogImg}>
        <div
          className={styles.animSlideLeft}
          style={{ alignSelf: "center", marginRight: "20px" }}
        >
          <p className={styles.paragraph}>
            The diving experience in Malapascua was beyond extraordinary. Each
            dive unveiled a world of wonders I had never witnessed before. As
            time passed, I established connections within the diving community
            and found myself teaching and guiding at five different dive
            training facilities. However, one dive shop stood out among the
            rest—Evolution, led by an advanced technical diver. It offered a
            wealth of knowledge and exceptional opportunities that perfectly
            aligned with my aspirations. Recognizing the immense potential for
            growth and advancement, I made the decision to focus solely on
            working with Evolution. This dive shop became the ideal platform for
            me to further my diving career and pursue my goals in the world of
            technical diving. The expertise and passion within this community
            fueled my own desires and ignited a fire within me, solidifying my
            commitment to technical diving as my ultimate pursuit.
          </p>

          <p className={styles.paragraph}>
            In 2020, I received an incredible offer that filled me with
            excitement: a year-long contract with the opportunity to become a
            TDI instructor. This contract included comprehensive coverage of all
            technical dive courses by the school. I was thrilled beyond words!
            However, life had its own plans, and the COVID-19 pandemic swept
            across the globe, shutting down tourism and abruptly halting my
            ambitions. I had to bid farewell to the magical island of
            Malapascua, and my dream of starting technical diving remained
            unfulfilled. Yet, I hold onto the cherished memories, the knowledge
            gained, and the experiences amassed during my time there.
          </p>
        </div>{" "}
        <Image src={Dive} alt="padiInstructor" className={styles.img} />
      </div>

      <div className={styles.containerTextogImgRevert}>
        <Image src={Nudi} alt="padiInstructor" className={styles.img} />
        <div className={styles.animSlideRight}>
          <p
            style={{ alignSelf: "center", marginLeft: "20px" }}
            className={styles.paragraph}
          >
            Working alongside esteemed individuals in the technical dive
            industry was an absolute honor. Their expertise and the wealth of
            knowledge I absorbed have shaped me both personally and
            professionally. Though circumstances changed, the immeasurable value
            of the memories and experiences I gained in the Philippines will
            forever be a part of my journey. They serve as a testament to the
            power of following one's dreams, embracing new adventures, and
            cherishing the underwater world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philippines;
