import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { CardProps } from "@/assets/blogAssets";

const Card: React.FC<CardProps> = ({
  id,
  img,
  imgAlt,
  title,
  cardText,
  date,
  hashtags,
}) => {
  return (
    <>
      <div className={styles.containerCard}>
        <Link href={`/blog/${id}`} className={styles.link}>
          <div className={styles.imgContainer}>
            <Image src={img} fill={true} alt={imgAlt} className={styles.img} />
          </div>
          <h2 className={styles.titleCard}>{title}</h2>
          <p className={styles.date}>{date}</p>
          <p className={styles.textCard}>{cardText}</p>
          <p className={styles.hashtags}>{hashtags.map((h) => h + " ")}</p>
        </Link>
      </div>
    </>
  );
};

export default Card;
