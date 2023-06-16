"use client";
import React from "react";
import Image from "next/image";
import Dive from "public/images/diveImg.png";
import Software from "public/images/softwareImg.png";
import styles from "./page.module.css";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
const BackgroundAnimation = () => {
  return (
    <div className={styles.animationContainer}>
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_f1rpywm1.json"
        className={styles.animationLottie}
      />
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.animSlideLeft}>
          <Link href="/portfolio/dive">
            <h1 className={styles.titlePage}>SCUBADIVE</h1>
          </Link>
        </div>

        <div className={styles.line}></div>
        <div className={styles.animSlideRight}>
          <Link href="/portfolio/software">
            <h1 className={styles.titlePage}>SOFTWARE</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
