import {
  KIS_GRANT_TYPE,
  KIS_APP_KEY,
  KIS_APP_SECRET,
  KIS_TOKEN_URL,
} from "../config/kis_secret";

const kisTokenFetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    grant_type: KIS_GRANT_TYPE,
    appkey: KIS_APP_KEY,
    appsecret: KIS_APP_SECRET,
  }),
};

const getToken = async () => {
  try {
    const queryString = `${KIS_TOKEN_URL}`;
    const response = await fetch(queryString, kisTokenFetchOption);

    if (!response.ok) {
      throw new Error("토큰 요청 실패");
    }

    const accessToken = json.access_token;
    const tokenType = json.token_type; // "Bearer"
    const expiresIn = json.expires_in; // 유효 기간(초)
    const tokenExpiryTime = json.access_token_token_expired;

    console.log("Access Token:", accessToken);
    console.log("Token Type:", tokenType);
    console.log("Expires In:", expiresIn, "seconds");
    console.log("Token Expiry Time:", tokenExpiryTime);

    return accessToken;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};

export default getToken;
