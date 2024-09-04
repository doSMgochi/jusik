"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import user from "../../../../public/css/user.module.css";

const LoginPage = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  //────────────────────────────────────────────유효성 검사 및 로그인 함수
  const validate = async () => {
    if (loginId === "") {
      setErrorMessage("아이디를 입력하세요.");
      return;
    }
    if (loginPassword === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return;
    }

    // API 요청
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginId,
          loginPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setErrorMessage("");
        router.push("/");
      } else {
        setErrorMessage(data.message || "로그인 중 오류가 발생했습니다.");
      }
    } catch (error) {
      setErrorMessage("서버와의 통신 중 오류가 발생했습니다.");
    }
  };

  //────────────────────────────────────────────VIEW
  return (
    <section className={user.login_box}>
      <h1>로그인</h1>
      <input
        className={user.user_input}
        id="login_id"
        name="login_id"
        placeholder="아이디를 입력하세요"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
      />
      <input
        className={user.user_input}
        id="login_password"
        name="login_password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button
        className={user.user_button}
        id="login_button"
        type="button"
        onClick={validate}
      >
        로그인
      </button>
    </section>
  );
};

export default LoginPage;
