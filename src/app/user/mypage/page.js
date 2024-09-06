"use client";
import { useState } from "react";
import user from "../../../../public/css/user.module.css";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const MyPagePage = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState(""); // 메시지 상태 추가
  const router = useRouter();

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch("/api/quit", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // 성공 메시지 저장
        await signOut(); // 로그아웃 처리
        router.push("/"); // 메인 페이지로 이동
      } else {
        setMessage(`회원 탈퇴 실패: ${data.message}`);
        setIsDeleting(false);
      }
    } catch (error) {
      setMessage("회원 탈퇴 중 오류가 발생했습니다.");
      setIsDeleting(false);
    }
  };

  return (
    <section className={user.mypage_box}>
      <h1 className={user.fs_5x}>마이페이지</h1>
      <h1 className={user.fs_1x}>MyPage</h1>
      <button className={user.user_button} type="button">
        내 주식
      </button>
      <button className={user.user_button} type="button">
        내 정보 수정
      </button>
      <button className={user.user_button} type="button">
        내 퀴즈 순위
      </button>
      <button
        className={user.user_button}
        type="button"
        onClick={handleDeleteAccount}
        disabled={isDeleting}
      >
        {isDeleting ? "탈퇴 중..." : "회원탈퇴"}
      </button>

      {/* 서버로부터 받은 메시지 출력 */}
      {message && (
        <p style={{ color: isDeleting ? "green" : "red" }}>{message}</p>
      )}
    </section>
  );
};

export default MyPagePage;
