"use client";
import Link from "next/link";
import React from "react";
import styles from "../../public/css/BackgroundVideo.module.css";

const Home = () => {
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
        <div className={styles.buttons}>
          <Link href="/user/login">
            <button className={styles.login_icon} title="로그인">
              <i
                className="fa-solid fa-right-to-bracket"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
            </button>
          </Link>
          <Link href="/user/join">
            <button className={styles.join_icon} title="회원가입">
              <i
                className="fa-solid fa-user-plus"
                style={{ fontSize: "16px", color: "white" }}
              ></i>
            </button>
          </Link>
          <button className={styles.google_icon} title="구글 로그인">
            <div className={styles.google_icon}></div>
          </button>
          <button className={styles.naver_icon} title="네이버 로그인">
            <div className={styles.naver_icon}></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
