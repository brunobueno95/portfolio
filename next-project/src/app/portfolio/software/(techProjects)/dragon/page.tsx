import React from "react";
import styles from "./page.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Login from "/public/images/dragon-imgs/login.jpg";
import MainPage from "/public/images/dragon-imgs/mainPage.jpg";

const DragonProject = () => {
  return (
    <div>
      <Link href="/portfolio/software">
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>The Dragon Game</h1>
      <p className={styles.paragraph}>
        This project is special to me because it was my first significant
        personal undertaking purely for learning and enjoyment. I built it using
        basic JavaScript and CSS, without any frameworks. It was a part of the
        second module of my course, and I dedicated many late nights and
        weekends to its development. During this time, my passion for coding was
        intense, and I was constantly thinking about how to add new features and
        fix any bugs.I gained valuable knowledge and skills in JavaScript during
        the development process, establishing a solid foundation in its core
        concepts.
      </p>

      <h2 className={styles.subTitle}>Login / Create user</h2>
      <div className={styles.containerTextandImg}>
        <Image src={Login} alt="project-login" className={styles.imgCircle} />{" "}
        <p className={styles.paragraph}>
          In this project, I didn't incorporate a database, since it was
          something i havent yet learned on that period. Instead, I implemented
          authentication using an array of users that contains their
          information. The login functionality verifies whether the entered
          username and password match any of the records in the array. If there
          is a match, the login is successful. Otherwise, an error message is
          displayed, indicating whether the user exists or if the password is
          incorrect. To create a new user, the system requires the user to enter
          their desired password twice. The passwords must match for the user to
          be successfully created. If the passwords match, a new user is added
          to the array of users with their provided credentials, along with the
          default package assigned to all new users.
        </p>
      </div>
      <h2 style={{ marginBottom: "70px" }} className={styles.subTitle}>
        Home Page
      </h2>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={MainPage}
          alt="main-page
        "
          className={styles.imgMainPage}
        />
      </div>
    </div>
  );
};

export default DragonProject;
