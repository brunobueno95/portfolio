"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const linkList = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [responsive, setResponsive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleResponsive = () => {
    setResponsive(!responsive);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          width={60}
          height={60}
          src="/images/logo-solo.png"
          alt="lg"
          className={styles.img}
        />
      </Link>

      {windowWidth > 550 ? (
        <div className={styles.routes}>
          {linkList.map((link) => (
            <div key={link.id}>
              <Link className={styles.link} href={link.url}>
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {!responsive ? (
            <GiHamburgerMenu
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={toggleResponsive}
            />
          ) : (
            <div
              style={{
                marginTop: "0",
                backgroundColor: "#101010c4",
                borderRadius: "10px",
                padding: "50px 70px",
                position: "absolute",
                left: "92%",
                transform: "translateX(-78%) translateY(-3%)",
                top: "0",
                height: "55%",
              }}
            >
              <div className={styles.routes}>
                {linkList.map((link) => (
                  <div key={link.id}>
                    <Link
                      onClick={() => setResponsive(!responsive)}
                      className={styles.link}
                      href={link.url}
                    >
                      <p style={{ marginTop: "15px" }}> {link.title}</p>
                    </Link>
                  </div>
                ))}
                <AiOutlineCloseCircle
                  className={styles.icnClose}
                  onClick={toggleResponsive}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
