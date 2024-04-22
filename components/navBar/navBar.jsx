// NavBar.js
import React, { useState } from "react";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";

import styles from "./navBar.module.css";
import images from "../../img";

const NavBar = ({ theme, setTheme }) => {
  const [showProducts, setShowProducts] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleProductsClick = () => {
    setShowProducts(!showProducts);
    setShowFeatures(false); // Close features dropdown
    setShowAbout(false); // Close about dropdown
  };

  const handleFeaturesClick = () => {
    setShowFeatures(!showFeatures);
    setShowProducts(false); // Close products dropdown
    setShowAbout(false); // Close about dropdown
  };

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setShowProducts(false); // Close products dropdown
    setShowFeatures(false); // Close features dropdown
  };
  return (
    <div className={styles.navBar_container}>
      <Image
        src={theme === "light" ? images.logo_white : images.logo_black}
        alt=""
        className={styles.logo}
        width={160}
        height={40}
      />
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search Bar" />
        <Image src={images.search_w} alt="" width={20} height={20} />
      </div>
      <ul>
        <li>Home</li>
        <li onClick={handleProductsClick}>
          Products
          {showProducts && (
            <div className={styles.dropdown}>
              <ul>
                <li>Cars</li>
                <li>Food</li>
                <li>Music</li>
                <li>Movies</li>
              </ul>
            </div>
          )}
        </li>
        <li onClick={handleFeaturesClick}>
          Features
          {showFeatures && (
            <div className={styles.dropdown}>
              <ul>
                <li>Buy</li>
                <li>Sell</li>
                <li>Player</li>
              </ul>
            </div>
          )}
        </li>
        <li onClick={handleAboutClick}>
          About Us
          {showAbout && (
            <div className={styles.dropdown}>
              <ul>
                <li>FAQs</li>
                <li>Telegram</li>
                <li>Twitter</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
      <div className={styles.theme_icon} onClick={toggleMode}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
    </div>
  );
};

export default NavBar;
