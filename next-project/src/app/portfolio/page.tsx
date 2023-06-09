import React from "react";
import Image from "next/image";
import Dive from "public/images/diveImg.png";
import Software from "public/images/softwareImg.png";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Link href="/portfolio/dive">
        <h1 className={styles.titlePage}>SCUBADIVE</h1>
      </Link>
      <div className={styles.line}></div>
      <Link href="/portfolio/software">
        <h1 className={styles.titlePage}>SOFTWARE</h1>
      </Link>
    </div>
  );
};

export default Portfolio;
