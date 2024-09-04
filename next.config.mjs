/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/oauth2/tokenP",
        destination:
          "https://openapivts.koreainvestment.com:29443/oauth2/tokenP",
      },
      {
        source: "/inquire-price", // 쿼리 파라미터가 아니라 경로 기반으로 rewrite 적용
        destination:
          "https://openapivts.koreainvestment.com:29443/uapi/domestic-stock/v1/quotations/inquire-price",
      },
    ];
  },
};

export default nextConfig;
