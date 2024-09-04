"use client";
import { useState } from "react";
import user from "../../../../public/css/user.module.css";

const JoinPage = () => {
  const [joinId, setJoinId] = useState("");
  const [joinPassword, setJoinPassword] = useState("");
  const [joinRePassword, setJoinRePassword] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinNick, setJoinNick] = useState("");
  const [joinSex, setJoinSex] = useState("남");
  const [errorMessage, setErrorMessage] = useState("");

  //────────────────────────────────────────────유효성 검사 함수
  const validate = () => {
    //────────────────────────────────────────────정규식
    const idRegex = /^[a-zA-Z0-9_]{4,15}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    /**
     * Bottom, Right 에 붙여서 3초간 애니메이션으로 나타나는 Modal 창으로 전환 예정
     */

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

    if (joinName === "") {
      setErrorMessage("이름을 입력하세요.");
      return;
    }

    if (joinNick === "") {
      setErrorMessage("닉네임을 입력하세요.");
      return;
    }

    setErrorMessage("");

    /**
     * DB에 INSERT 해서 회원가입 처리할 부분
     */
  };
  //────────────────────────────────────────────VIEW
  return (
    <section className={user.join_box}>
      <h1>회원가입</h1>
      <input
        className={user.user_input}
        id="join_id"
        name="join_id"
        placeholder="아이디를 입력하세요"
        value={joinId}
        onChange={(e) => setJoinId(e.target.value)}
      />
      <input
        className={user.user_input}
        id="join_password"
        name="join_password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={joinPassword}
        onChange={(e) => setJoinPassword(e.target.value)}
      />
      <input
        className={user.user_input}
        id="join_re_password"
        name="join_re_password"
        type="password"
        placeholder="비밀번호를 확인하세요"
        value={joinRePassword}
        onChange={(e) => setJoinRePassword(e.target.value)}
      />
      <input
        className={user.user_input}
        id="join_name"
        name="join_name"
        placeholder="이름을 입력하세요"
        value={joinName}
        onChange={(e) => setJoinName(e.target.value)}
      />
      <input
        className={user.user_input}
        id="join_nick"
        name="join_nick"
        placeholder="닉네임을 입력하세요"
        value={joinNick}
        onChange={(e) => setJoinNick(e.target.value)}
      />
      <div>
        <input
          id="join_sex_male"
          name="join_sex"
          type="radio"
          value="남"
          checked={joinSex === "남"}
          onChange={(e) => setJoinSex(e.target.value)}
        />
        <label htmlFor="join_sex_male"> 남 </label>
        <input
          id="join_sex_female"
          name="join_sex"
          type="radio"
          value="여"
          checked={joinSex === "여"}
          onChange={(e) => setJoinSex(e.target.value)}
        />
        <label htmlFor="join_sex_female"> 여 </label>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
