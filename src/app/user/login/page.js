import user from "../../../../public/css/user.module.css";

const LoginPage = () => {
  return (
    <section className={user.login_box}>
      <h1>로그인</h1>
      <input
        className={user.user_input}
        id="login_id"
        name="login_id"
        placeholder="아이디를 입력하세요"
      />
      <input
        className={user.user_input}
        id="login_password"
        name="login_password"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <button className={user.user_button} id="login_button" type="button">
        로그인
      </button>
    </section>
  );
};
export default LoginPage;
