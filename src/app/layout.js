import "./globals.css";

export const metadata = {
  title: "JuSik",
  description: "주식 정보 제공 서비스",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
