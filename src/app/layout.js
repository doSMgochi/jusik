import "./globals.css";

export const metadata = {
  title: "JuSik",
  description: "주식 정보 제공 서비스",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gowun+Dodum&display=swap"
          rel="stylesheet"
        />
      </head>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </>
  );
};
export default RootLayout;
