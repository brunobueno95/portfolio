"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import { postsList } from "@/assets/blogAssets";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Post = () => {
  const { id } = useParams();
  const specificPost = postsList.find((post) => post.id === id);

  if (!specificPost) {
    return <div>Post not found</div>;
  }
  const paragraphs = specificPost.fullText.split("\n");
  console.log(paragraphs);
  return (
    <div className={styles.container}>
      <Link href="/blog">
        {" "}
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>{specificPost.title}</h1>
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          src={specificPost.img}
          alt={specificPost.imgAlt}
          className={styles.img}
        />
      </div>
      <h2 className={styles.subTitle}>{specificPost.cardText}</h2>
      {paragraphs.map((p) => (
        <p className={styles.paragraph}>{p}</p>
      ))}

      <div className={styles.logoContainer}>
        {specificPost.extraImgs.map((i) => (
          <Image src={i} alt="logo" height={70} width={70} />
        ))}
        <Image
          src={"/images/logo-solo.png"}
          alt="logo"
          height={70}
          width={70}
        />
      </div>
    </div>
  );
};

export default Post;
