import user from "../../../../public/css/user.module.css";

const JoinPage = () => {
  return (
    <section className={user.join_box}>
      <h1>회원가입</h1>
      <input
        className={user.user_input}
        id="join_id"
        name="join_id"
        placeholder="아이디를 입력하세요"
      />
      <input
        className={user.user_input}
        id="join_password"
        name="join_password"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <input
        className={user.user_input}
        id="join_re_password"
        name="join_re_password"
        type="password"
        placeholder="비밀번호를 확인하세요"
      />
      <input
        className={user.user_input}
        id="join_name"
        name="join_name"
        placeholder="이름을 입력하세요"
      />
      <input
        className={user.user_input}
        id="join_nick"
        name="join_nick"
        placeholder="닉네임을 입력하세요"
      />
      <input
        className={user.user_input}
        id="join_sex"
        name="join_sex"
        type="radio"
        value={"남"}
      />
      <button className={user.user_button} id="join_button" type="button">
        회원가입
      </button>
    </section>
  );
};
export default JoinPage;
