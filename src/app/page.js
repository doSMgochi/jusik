"use client";
import React from "react";
import styles from "../../public/css/BackgroundVideo.module.css";
import useStock from "./modules/kis_stock_api";

const Home = () => {
  const stock = useStock();
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
        <div>
          <p className={styles.fs3x}>주식코드 {stock.stck_shr_niscd}</p>
          <p className={styles.fs3x}>현재가 {stock.stck_prpr}</p>
          <p className={styles.fs3x}>시가총액 {stock.hts_avls}</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
