"use client";
import { useState } from "react";
import user from "../../../../public/css/user.module.css";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";

const MyPagePage = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState("");
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
        setMessage(data.message);
        await signOut();
        router.push("/");
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
      <Link href="/user/mystocks" passHref>
        <button className={user.user_button} type="button">
          내 주식
        </button>
      </Link>
      <Link href="/user/modify" passHref>
        <button className={user.user_button} type="button">
          내 정보 수정
        </button>
      </Link>
      <Link href="/quiz/ranking" passHref>
        <button className={user.user_button} type="button">
          퀴즈 순위
        </button>
      </Link>
      <button
        className={user.user_button}
        type="button"
        onClick={handleDeleteAccount}
        disabled={isDeleting}
      >
        {isDeleting ? "탈퇴 중..." : "회원탈퇴"}
      </button>

      {message && (
        <p style={{ color: isDeleting ? "green" : "red" }}>{message}</p>
      )}
    </section>
  );
};

export default MyPagePage;
