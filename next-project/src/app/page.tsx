import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/images/BB-logo.png";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Image src={Hero} alt="logo" className={styles.img} />

      <div style={{ marginBottom: "100px" }}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>
            Dive Instructor and Software Developer: Combining Passion and
            Creativity
          </h1>
          <p className={styles.paragraph}>
            Welcome to my portfolio! I'm a junior software developer with a
            passion for continuous learning and a background as a dive
            instructor. With a solid foundation in front-end development and a
            growing knowledge of back-end and software architecture, I bring a
            unique perspective to every project. I thrive in dynamic
            environments, enjoy collaborating with diverse teams, and strive to
            deliver high-quality solutions.
          </p>

          <div className={styles.buttons}>
            <div className={styles.btnContainer}>
              <Link href="/portfolio/dive">
                {" "}
                <button className={styles.btnDive}>SCUBADIVE</button>
              </Link>
              <Link href="/portfolio/software">
                <button className={styles.btnSwd}>SOFTWARE </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
