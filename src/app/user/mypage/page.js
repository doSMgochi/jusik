import user from "../../../../public/css/user.module.css";

const MyPagePage = () => {
  return (
    <section className={user.mypage_box}>
      <h1>마이페이지</h1>
      <button className={user.user_button} id="" type="button">
        내 주식
      </button>
      <button className={user.user_button} id="" type="button">
        내 정보 수정
      </button>
      <button className={user.user_button} id="" type="button">
        내 퀴즈 순위
      </button>
      <button className={user.user_button} id="" type="button">
        회원탈퇴
      </button>
    </section>
  );
};
export default MyPagePage;
