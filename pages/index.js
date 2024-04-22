import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
//SUBSETS
// `cyrillic`,
//   `cyrillic-ext`,
//   `greek`,
//   `greek-ext`,
//   `latin`,
//   `latin-ext`,
//   `vietnamese`;

export default function Home() {
  return (
    <>
      <Head>
        <title>New Components</title>
        <meta name="description" content="all New components in 1 App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    </>
  );
}
