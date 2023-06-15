"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { postsList } from "@/assets/blogAssets";
import { AiOutlineSearch } from "react-icons/ai";

const Blog = () => {
  const [search, setSearch] = useState("#");
  const [btnSearch, setBtnSearch] = useState(false);
  const [filteredList, setFilteredList] = useState(postsList);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    let filteredList = postsList;

    if (selectedCategory !== "all") {
      filteredList = filteredList.filter((obj) =>
        obj.hashtags.includes(`#${selectedCategory}`)
      );
    }

    if (search !== "#") {
      filteredList = filteredList.filter((obj) =>
        obj.hashtags.some((h) => h.includes(search))
      );
    }

    setFilteredList(filteredList);
  }, [search, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h1 className={styles.mainTitle}>My Blog</h1>
      <div className={styles.searchContainer}>
        <div className={styles.categoriesContainer}>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "all"}
              onChange={() => handleCategoryChange("all")}
            />
            All
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "scubadive"}
              onChange={() => handleCategoryChange("scubadive")}
            />
            Scubadive
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "software"}
              onChange={() => handleCategoryChange("software")}
            />
            Software
          </label>
          {/* Add more category checkboxes here */}
        </div>
        <div className={styles.textInputdiv}>
          <input
            className={styles.searchInput}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <AiOutlineSearch className={styles.searchIcn} />
        </div>
      </div>

      <div className={styles.containerCards}>
        {filteredList.length >= 1 ? (
          filteredList.map((pb) => (
            <Card
              key={pb.id}
              id={pb.id}
              img={pb.img}
              imgAlt={pb.imgAlt}
              title={pb.title}
              date={pb.date}
              hashtags={pb.hashtags}
              cardText={pb.cardText}
            />
          ))
        ) : (
          <h1 style={{ marginBottom: "400px" }}>No Posts Found</h1>
        )}
      </div>
    </>
  );
};

export default Blog;
