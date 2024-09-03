"use client";
import React from "react";
import styles from "../../public/css/BackgroundVideo.module.css";
import getToken from "./modules/kis_token";
import getStock from "./modules/kis_stock_api";
import { stckShrnIscd, avls } from "./modules/kis_stock_api";
import { useState, useEffect } from "react";

const Home = () => {
  const token = getToken();
  const stock = getStock();

  return (
    <div className={styles.container}>
      <div className={styles.videoBackground}>
        <iframe
          src="https://www.youtube.com/embed/ExL8jClroLQ?autoplay=1&mute=1&loop=1&playlist=ExL8jClroLQ&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className={styles.videoIframe}
        ></iframe>
      </div>
      <div className={styles.content}>
        <h1 className={styles.fs5x}>Jusik</h1>
        <b className={styles.fs3x}>
          {stckShrnIscd}
          {avls}
        </b>
      </div>
    </div>
  );
};
export default Home;
