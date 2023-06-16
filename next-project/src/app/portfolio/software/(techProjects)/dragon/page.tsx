import React from "react";
import styles from "./page.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Login from "/public/images/dragon-imgs/login.jpg";
import MainPage from "/public/images/dragon-imgs/mainPage.jpg";
import ItemShop from "/public/images/dragon-imgs/itemShop.jpg";
import Potion from "/public/images/dragon-imgs/makingPotion.jpg";
import ExplorePage from "/public/images/dragon-imgs/explorePage.jpg";
import ExploreForest from "/public/images/dragon-imgs/exploreForest.jpg";
import ForestFind from "/public/images/dragon-imgs/forestFind.jpg";
import Attack from "/public/images/dragon-imgs/attack.jpg";
import Victory from "/public/images/dragon-imgs/victory.jpg";
import Trading from "/public/images/dragon-imgs/trading.jpg";
import TradePost from "/public/images/dragon-imgs/tradePost.jpg";
import TradeSucc from "/public/images/dragon-imgs/tradeDiftUser.jpg";
import { subtle } from "crypto";

const DragonProject = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link href="/portfolio/software">
        <FaArrowLeft className={styles.backIcn} />
      </Link>
      <h1 className={styles.mainTitle}>The Dragon Game</h1>
      <div className={styles.animExpand}>
        <p className={styles.paragraph}>
          {" "}
          In this game, you embark on a captivating journey with your avatar
          dragon. Your dragon evolves through different life stages, starting
          from an egg and progressing to a baby, juvenile, and eventually an
          adult. Advancing to the next life stage requires accumulating
          experience points (XP), with each level attained when your XP reaches
          500. You have various ways to gain XP, including consuming potions,
          engaging in battles with monsters, or successfully escaping from
          encounters. Potions can be acquired through purchase or by crafting
          them using materials you discover throughout your explorations.
          Exploration is a key aspect of the game, and you have three distinct
          locations to explore: the forest, ocean, and desert. Each location
          offers unique materials and presents different challenges in the form
          of diverse monsters.
        </p>
      </div>
      <h2 className={styles.subTitle}>Insightful Lessons</h2>
      <p className={styles.paragraph}>
        This project is special to me because it was my first significant
        personal undertaking purely for learning and enjoyment. I built it using
        basic JavaScript and CSS, without any frameworks. It was done during the
        second module of my course, and I dedicated many late nights and
        weekends to its development. During this time, my passion for coding was
        intense, and I was constantly thinking about how to add new features and
        fix any bugs.I gained valuable knowledge and skills in JavaScript during
        the development process, establishing a solid foundation in its core
        concepts. I wasn't overly concerned about the visual style, so there may
        be a few errors on the page. The primary focus was to maximize my
        learning experience with JavaScript. Additionally, because I intended to
        showcase this project during the course, I had limited time available
        for its development.
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
      <h2 style={{ marginBottom: "30px" }} className={styles.subTitle}>
        Home Page
      </h2>
      <div className={styles.containerColumn}>
        <Image
          src={MainPage}
          alt="main-page
        "
          className={styles.imgMainPage}
        />
        <p className={styles.paragraph}>
          The Home page serves as a central hub, providing seamless access to a
          range of features and functionalities. Utilizing dynamic routing
          techniques, the page offers a single-page application experience,
          rendering different "pages" based on user interactions. Users can
          explore detailed avatar profiles, complete with comprehensive
          statistics. The interface allows for effortless navigation through
          various sections. Additionally, users have the flexibility to utilize
          or sell potions and materials, enhancing their gameplay experience.
        </p>
      </div>

      <h2 className={styles.subTitle}>Item Shop</h2>
      <div className={styles.containerColumn}>
        <p>
          The Item Shop page offers a comprehensive list of potions available in
          the game. Each potion can be purchased using diamonds or crafted if
          the necessary materials are available. If materials are lacking, a
          prompt will inform the player about the missing components. On the
          other hand, if the required materials are present, a pop-up box will
          display the potion being crafted accompanied by a cooking sound
          effect. Once the potion is created, players can collect it. In
          addition to potions, the Item Shop also provides a selection of
          diamonds for purchase using gold coins. Similar to potion acquisition,
          the logic ensures that players can only buy diamonds if they possess
          enough gold coins to cover the cost.
        </p>

        <div className={styles.containerRow}>
          <Image
            src={ItemShop}
            alt="item-shop
        "
            className={styles.imgRow}
          />
          <Image
            src={Potion}
            alt="making-potion
      "
            className={styles.imgRow}
          />
        </div>
      </div>
      <h2 className={styles.subTitle}>Explore Page</h2>
      <div className={styles.containerColumn}>
        <Image
          src={ExplorePage}
          alt="explore-page
        "
          className={styles.imgMainPage}
        />
        <p className={styles.paragraph}>
          The Explore page offers three distinct sections for exploration:
          Forest, Desert, and Ocean. Each section features a captivating
          background video playing on a loop to enhance the immersive
          experience. Within each section, players have the opportunity to
          discover valuable resources such as gold coins, materials, and
          encounter unique monsters. The materials available for collection vary
          in each section, adding diversity to the gameplay. Furthermore, the
          monsters encountered during exploration dynamically adapt based on the
          life stage of the player's dragon, adding an element of challenge and
          excitement to the adventure.
        </p>
        <div className={styles.containerRow}>
          <Image
            src={ExploreForest}
            alt="item-shop
        "
            className={styles.imgRow}
          />
          <Image
            src={ForestFind}
            alt="making-potion
      "
            className={styles.imgRow}
          />
        </div>
      </div>
      <h2 className={styles.subTitle}>Battle Field</h2>
      <div className={styles.containerRow}>
        {" "}
        <p style={{ flex: "1" }} className={styles.paragraph}>
          Your attack power is determined by a combination of speed and
          strength, with a degree of randomness for variability. Similar
          principles govern the enemy's attacks. Engaging sound effects enhance
          the interactive nature of the gameplay. Victorious battles yield
          experience points (XP), while defeat results in XP deduction. To
          continue exploring, you must consume a healing potion to restore your
          health.
        </p>
        <div style={{ flex: "1" }} className={styles.containerRow}>
          <Image
            src={Attack}
            alt="making-potion
"
            className={styles.img33}
          />{" "}
          <Image
            src={Victory}
            alt="making-potion
    "
            className={styles.img33}
          />
        </div>
      </div>
      <h2 className={styles.subTitle}>Trade Market</h2>
      <div className={styles.containerColumn}>
        <p className={styles.paragraph}>
          In the trade market, players have the opportunity to exchange potions
          and materials with other users. You can create a trade post,
          specifying the items you wish to trade and what you're seeking in
          return. Alternatively, you can browse existing trade posts to see what
          other players are offering. If you possess the desired items, you can
          accept the trade. Implementing this functionality without a backend
          was a challenging and enjoyable task. On the example below, user Bruno
          did a post, later on another user accepted that trade.
        </p>
        <div className={styles.containerRow}>
          {" "}
          <Image
            src={Trading}
            alt="trading
"
            className={styles.imgTM}
          />{" "}
          <Image
            src={TradePost}
            alt="tradingPost
"
            className={styles.imgTM}
          />{" "}
          <Image
            src={TradeSucc}
            alt="trade-done
"
            className={styles.imgTM}
          />
        </div>
      </div>

      <h2 className={styles.subTitle}>Check for yourself </h2>
      <p className={styles.paragraph}>
        This is a comprehensive and intricate application with numerous details
        that I haven't covered in this brief overview. If you're interested in
        exploring the code, feel free to check out the GitHub repository:{" "}
      </p>
      <p className={styles.paragraph}>
        {" "}
        <a
          href="https://github.com/brunobueno95/TheDragon-Game"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gitLink}
        >
          https://github.com/brunobueno95/TheDragon-Game
        </a>{" "}
      </p>
      <p className={styles.paragraph}>
        {" "}
        For a more immersive experience, you can try out the live application:{" "}
      </p>
      <p className={styles.paragraph}>
        {" "}
        <a
          href="https://brunobueno95.github.io/TheDragon-Game/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gitLink}
        >
          https://brunobueno95.github.io/TheDragon-Game/
        </a>
      </p>

      <p className={styles.paragraph}>
        To get started, there are already two pre-existing user accounts
        available: Username: Bruno, Password: bruno, and Username: Tina,
        Password: tina. Alternatively, you can create a new user and begin your
        journey from scratch. Please keep in mind that this project is not a
        full-stack application, which means that the information is not stored
        in a database. As long as you avoid refreshing the page, everything
        should function smoothly. Enjoy your experience!
      </p>
    </div>
  );
};

export default DragonProject;
