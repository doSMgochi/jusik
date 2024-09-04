"use client";
import { useState } from "react";
import user from "../../../../public/css/user.module.css";

const LoginPage = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //────────────────────────────────────────────유효성 검사 함수
  const validate = () => {
    /**
     * DB에서 SELECT 한 데이터 비교하는 부분 (코드 수정 필요)
     */
    if (loginId === "") {
      setErrorMessage("아이디를 입력하세요.");
      return;
    }
    if (loginPassword === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return;
    }
    setErrorMessage("");
    /**
     * 로그인 처리 수행할 부분
     */
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
