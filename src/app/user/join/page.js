"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import user from "../../../../public/css/user.module.css";

const JoinPage = () => {
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
  const router = useRouter();
  //────────────────────────────────────────────입력 상태 관리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
  };

  //────────────────────────────────────────────유효성 검사
  const validate = async () => {
    const {
      joinId,
      joinPassword,
      joinRePassword,
      joinName,
      joinNick,
      joinSex,
    } = formData;
    //────────────────────────────────────────────정규식
    const idRegex = /^[a-zA-Z0-9_]{4,15}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    //────────────────────────────────────────────에러 메시지
    if (!idRegex.test(joinId)) {
      setErrorMessage(
        "아이디는 영문 대소문자, 숫자, _만 사용할 수 있으며, 4~15자리여야 합니다."
      );
      return;
    }

    if (!passwordRegex.test(joinPassword)) {
      setErrorMessage(
        "비밀번호는 영문 대소문자, 숫자, 특수문자를 포함해야 하며 8~20자리이어야 합니다."
      );
      return;
    }

    if (joinPassword !== joinRePassword) {
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

    //────────────────────────────────────────────회원가입 요청
    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          joinId,
          joinPassword,
          joinName,
          joinNick,
          joinSex,
          userStockIscd: null,
        }),
      });

      const data = await response.json();
      //────────────────────────────────────────────상태 반환 후 적절한 처리
      if (response.ok) {
        setSuccessMessage("회원가입이 성공적으로 완료되었습니다.");
        setTimeout(() => {
          router.push("/user/login");
        }, 2000);
      } else {
        setErrorMessage(data.message || "회원가입 중 오류가 발생했습니다.");
      }
    } catch (error) {
      setErrorMessage("서버와의 통신 중 문제가 발생했습니다.");
    }
  };
  //────────────────────────────────────────────VIEW
  return (
    <section className={user.join_box}>
      <h1 className={user.fs_5x}>회원가입</h1>
      <h1 className={user.fs_1x}>Join</h1>
      <input
        className={user.user_input}
        id="join_id"
        name="joinId"
        placeholder="아이디를 입력하세요"
        value={formData.joinId}
        onChange={handleChange}
      />
      <input
        className={user.user_input}
        id="join_password"
        name="joinPassword"
        type="password"
        placeholder="비밀번호를 입력하세요"
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
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <button
        className={user.user_button}
        id="join_button"
        type="button"
        onClick={validate}
      >
        회원가입
      </button>
    </section>
  );
};

export default JoinPage;
