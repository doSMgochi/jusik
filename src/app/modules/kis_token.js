import {
  KIS_GRANT_TYPE,
  KIS_APP_KEY,
  KIS_APP_SECRET,
  KIS_TOKEN_URL,
} from "../config/kis_secret";

// fetchToken
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
    const queryString =
      "https://openapivts.koreainvestment.com:29443/oauth2/tokenP";
    const response = await fetch(queryString, kisTokenFetchOption);
    const json = await response.json();

    const accessToken = json.access_token;

    console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.log("Error fetching token:", error);
  }
};
export default getToken;
//토큰을 발급 받는 함수

/*
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

    const json = await response.json();
    const accessToken = json.access_token;
    const tokenType = json.token_type; // "Bearer"
    const expiresIn = json.expires_in; // 유효 기간(초)
    const tokenExpiryTime = json.access_token_token_expired;

    console.log("Access Token:", accessToken);

    console.log("Bearer " + accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};

export default getToken;*/
