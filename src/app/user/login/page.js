"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import user from "../../../../public/css/user.module.css";
import { signIn } from "next-auth/react";
import getToken from "@/app/modules/kis_token";

const LoginPage = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //────────────────────────────────────────────유효성 검사 및 로그인 함수
  const validate = async () => {
    // 폼 검증
    if (loginId === "") {
      setErrorMessage("아이디를 입력하세요.");
      return;
    }
    if (loginPassword === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return;
    }

    // 로딩 상태 활성화
    setLoading(true);

    // NextAuth.js의 Credentials provider를 통해 로그인 시도
    const result = await signIn("credentials", {
      redirect: false, // 서버 리디렉션 대신 클라이언트에서 처리
      loginId,
      loginPassword,
    });

    // 로그인 결과 처리
    if (result.error) {
      setErrorMessage(result.error);
      setLoading(false);
    } else {
      setErrorMessage("");
      setLoading(false);
      // 로그인 성공 시 토큰을 받아옵니다
      try {
        const token = await getToken();
        if (token) {
          console.log("로그인 성공! 액세스 토큰:", token);
          // 로그인시 로컬스토리지에 토큰 추가
          localStorage.setItem("accessToken", token);
        } else {
          console.log("토큰을 받아오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("토큰을 가져오는 중 에러 발생:", error);
      }
      router.push("/"); // 로그인 성공 시 페이지 이동
    }
  };

  //────────────────────────────────────────────VIEW
  return (
    <section className={user.login_box}>
      <h1 className={user.fs_5x}>로그인</h1>
      <h1 className={user.fs_1x}>Login</h1>
      <input
        className={user.user_input}
        id="login_id"
        name="login_id"
        placeholder="아이디를 입력하세요"
        value={loginId}
        onChange={(e) => {
          setLoginId(e.target.value);
          setErrorMessage(""); // 입력 중일 때 에러 메시지 초기화
        }}
      />
      <input
        className={user.user_input}
        id="login_password"
        name="login_password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={loginPassword}
        onChange={(e) => {
          setLoginPassword(e.target.value);
          setErrorMessage(""); // 입력 중일 때 에러 메시지 초기화
        }}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button
        className={`${user.user_button} ${user.login_button}`}
        id="login_button"
        type="button"
        onClick={validate}
        disabled={loading} // 로딩 중일 때 버튼 비활성화
      >
        {loading ? "로그인 중..." : "로그인"}
      </button>
    </section>
  );
};

export default LoginPage;
