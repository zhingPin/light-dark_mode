import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Head from "next/head";

import NavBar from "@/components/navBar/navBar";

export default function App({ Component, pageProps }) {
  // const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if localStorage is available in the browser environment
    if (typeof window !== "undefined") {
      const currentTheme = localStorage.getItem("currentTheme");
      if (currentTheme) {
        setTheme(currentTheme);
      }
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    // Check if localStorage is available in the browser environment
    if (typeof window !== "undefined") {
      localStorage.setItem("currentTheme", newTheme);
    }
    setTheme(newTheme);
  };

  return (
    <div className={`container ${theme}`}>
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <NavBar theme={theme} setTheme={handleThemeChange} />{" "}
      <Component {...pageProps} />
    </div>
  );
}
