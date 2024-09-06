"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import user from "../../../../public/css/user.module.css";

const ModifyPage = () => {
  const { data: session, status, update: updateSession } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    joinId: "",
    joinPassword: "",
    joinRePassword: "",
    joinName: "",
    joinNick: "",
    joinSex: "남",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/user/login");
    }
  }, [status]);

  useEffect(() => {
    if (session && session.user) {
      setFormData({
        joinId: session.user.id,
        joinPassword: "",
        joinRePassword: "",
        joinName: session.user.name,
        joinNick: session.user.nick,
        joinSex: session.user.sex || "남",
      });
    }
  }, [session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const validateAndUpdate = async () => {
    const { joinPassword, joinRePassword, joinName, joinNick, joinSex } =
      formData;

    if (joinPassword && joinPassword !== joinRePassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!joinName) {
      setErrorMessage("이름을 입력하세요.");
      return;
    }

    if (!joinNick) {
      setErrorMessage("닉네임을 입력하세요.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("/api/modify", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          joinId: formData.joinId,
          joinPassword,
          joinName,
          joinNick,
          joinSex,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("회원정보 수정이 완료되었습니다.");
        await updateSession();
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setErrorMessage(
          data.message || "회원정보 수정 중 오류가 발생했습니다."
        );
      }
    } catch (error) {
      setErrorMessage("서버와의 통신 중 문제가 발생했습니다.");
    }
  };

  return (
    <section className={user.join_box}>
      <h1 className={user.fs_5x}>정보수정</h1>
      <h1 className={user.fs_1x}>Modify Profile</h1>
      <input
        className={user.user_input}
        id="join_id"
        name="joinId"
        value={formData.joinId}
        readOnly
      />

      <input
        className={user.user_input}
        id="join_name"
        name="joinName"
        placeholder="이름을 입력하세요"
        value={formData.joinName}
        onChange={handleChange}
      />
      <input
        className={user.user_input}
        id="join_nick"
        name="joinNick"
        placeholder="닉네임을 입력하세요"
        value={formData.joinNick}
        onChange={handleChange}
      />

      <div className={user.radio_container}>
        <input
          id="join_sex_male"
          name="joinSex"
          type="radio"
          value="남"
          checked={formData.joinSex === "남"}
          onChange={handleChange}
          className={user.radio_input}
        />
        <label htmlFor="join_sex_male" className={user.radio_label}>
          남
        </label>
        <input
          id="join_sex_female"
          name="joinSex"
          type="radio"
          value="여"
          checked={formData.joinSex === "여"}
          onChange={handleChange}
          className={user.radio_input}
        />
        <label htmlFor="join_sex_female" className={user.radio_label}>
          여
        </label>
      </div>

      <input
        className={user.user_input}
        id="join_password"
        name="joinPassword"
        type="password"
        placeholder="비밀번호를 변경하려면 입력"
        value={formData.joinPassword}
        onChange={handleChange}
      />
      <input
        className={user.user_input}
        id="join_re_password"
        name="joinRePassword"
        type="password"
        placeholder="비밀번호를 확인하세요"
        value={formData.joinRePassword}
        onChange={handleChange}
      />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <button
        className={user.user_button}
        id="update_button"
        type="button"
        onClick={validateAndUpdate}
      >
        수정하기
      </button>
    </section>
  );
};

export default ModifyPage;
