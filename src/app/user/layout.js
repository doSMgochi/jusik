import user from "../../../public/css/user.module.css";

const UserLayout = ({ children }) => {
  return <div className={user.user_background}>{children}</div>;
};
export default UserLayout;
