"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import styles from "../../public/css/BackgroundVideo.module.css";

const Home = () => {
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut();
    localStorage.removeItem("accessToken"); // 로그아웃 시 토큰 삭제
  };

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
        <h1 className={styles.fs1x}>주식 정보 서비스</h1>
        {session ? (
          // 세션이 있는 경우 (로그인 상태)
          <>
            <div className={styles.fs_small}>
              환영합니다, {session.user.nick}님!{" "}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.logout_icon}
                onClick={handleSignOut}
                title="로그아웃"
              >
                <i
                  className="fa-solid fa-right-from-bracket"
                  style={{ fontSize: "20px", color: "white" }}
                ></i>
              </button>
              <Link href="/user/mypage" passHref>
                <button className={styles.mypage_icon} title="마이 페이지">
                  <i
                    className="fa-solid fa-house-user"
                    style={{ fontSize: "20px", color: "white" }}
                  ></i>
                </button>
              </Link>
              <Link href="/stocks/list" passHref>
                <button className={styles.chart_icon} title="주식 리스트">
                  <i
                    className="fa-solid fa-chart-line"
                    style={{ fontSize: "20px", color: "white" }}
                  ></i>
                </button>
              </Link>
            </div>
          </>
        ) : (
          // 세션이 없는 경우 (비로그인 상태)
          <>
            <div className={styles.buttons}>
              {/* 로그인 페이지로 이동 */}
              <Link href="/user/login" passHref>
                <button className={styles.login_icon} title="로그인">
                  <i
                    className="fa-solid fa-right-to-bracket"
                    style={{ fontSize: "20px", color: "white" }}
                  ></i>
                </button>
              </Link>

              {/* 회원가입 페이지로 이동 */}
              <Link href="/user/join" passHref>
                <button className={styles.join_icon} title="회원가입">
                  <i
                    className="fa-solid fa-user-plus"
                    style={{ fontSize: "16px", color: "white" }}
                  ></i>
                </button>
              </Link>

              {/* 구글 로그인 */}
              <button
                className={styles.google_icon}
                title="구글 로그인"
                onClick={() => signIn("google")}
              >
                <div className={styles.google_icon}></div>
              </button>

              {/* 네이버 로그인 */}
              <button
                className={styles.naver_icon}
                title="네이버 로그인"
                onClick={() => signIn("naver")}
              >
                <div className={styles.naver_icon}></div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Home;
