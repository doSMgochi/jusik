import { KIS_APP_KEY, KIS_APP_SECRET } from "../config/kis_secret.js";

// 요청 형식
const kisTokenFetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    grant_type: "client_credentials",
    appkey: KIS_APP_KEY,
    appsecret: KIS_APP_SECRET,
  }),
};
const getToken = async () => {
  try {
    // "https://openapivts.koreainvestment.com:29443"; 이거를 프록시 설정함
    const url = "/oauth2/tokenP";
    const response = await fetch(url, kisTokenFetchOption);
    const json = await response.json();

    const accessToken = json.access_token;

    console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.log("Error fetching token:", error);
  }
};
export default getToken;
//이 코드는 클라이언트가 외부 API (https://openapivts.koreainvestment.com)에 직접 요청을 보내는데, 이방식은 CORS 오류가 발생.
