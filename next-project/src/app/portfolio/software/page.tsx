import React from "react";
import styles from "./page.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const Software = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>
        Exploring the World of Software Development
      </h1>
      <p className={styles.paragraph}>
        Through YouTube tutorials and trial and error, I discovered a profound
        passion for software development. Inspired by my father, who has been
        involved in the cloud business for over 20 years, I realized that this
        skill set is not only the future but also the present. With this
        realization, I made the decision to apply for a code boot camp in my
        town known as Get Academy.
      </p>
      <p className={styles.paragraph}>
        Despite my initial insecurity, as the entire course would be conducted
        in Norwegian and I had only been living in Norway for a year and a few
        months, I embraced the challenge and submitted my application. After
        completing a small code challenge and undergoing two interviews, I was
        thrilled to be accepted into the program. The course consisted of three
        modules, with the first two focusing on learning vanilla JavaScript and
        the third module centered around C#.
      </p>
      <p className={styles.paragraph}>
        The course proved to be a tremendous success, fueling my passion for
        software development even further. I was determined to stand out, so I
        dedicated myself to studying rigorously, going above and beyond the
        school's requirements. The curriculum comprised theoretical lessons
        encompassing the three modules, followed by a preparation phase for an
        internship. During this preparation, I focused on mastering React and
        Node.js, two essential technologies in the field.
      </p>
      <p className={styles.paragraph}>
        I was fortunate to secure an internship position at a local company
        specializing in energy optimization. Through this experience and
        relentless online research, I have attained a proficient level of
        knowledge and skills in software development. Each day presents an
        opportunity for me to learn more and improve further. This field never
        ceases to be engaging, as there is always something new to discover and
        emerging technologies to explore.
      </p>
      <p className={styles.paragraph}>
        On this page, you will find a showcase of my projects (those that I am
        permitted to share). Each project will be accompanied by a description
        and a link where you can explore them firsthand.
      </p>
    </div>
  );
};

export default Software;