import { KIS_APP_KEY, KIS_APP_SECRET } from "../config/kis_secret";

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
