"use client";
import {
  CONTENT_TYPE,
  KIS_APP_KEY,
  KIS_APP_SECRET,
  KIS_TR_ID,
} from "../config/kis_secret";
import getToken from "./kis_token";

const getStock = async () => {
  try {
    // 비동기적으로 토큰을 가져옵니다.
    const token = await getToken();

    // 쿼리 파라미터를 URL에 포함시킵니다.
    const queryParams = new URLSearchParams({
      FID_INPUT_ISCD: "900100",
      FID_COND_MRKT_DIV_CODE: "J",
    }).toString();

    const url = `https://openapivts.koreainvestment.com:29443/uapi/domestic-stock/v1/quotations/inquire-price?${queryParams}`;

    const kisGetStockPetchOption = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        tr_id: KIS_TR_ID,
        appkey: KIS_APP_KEY,
        appsecret: KIS_APP_SECRET,
        custtype: "P",
      },
    };

    const response = await fetch(url, kisGetStockPetchOption);

    if (!response.ok) {
      throw new Error(
        `API 호출 실패: ${response.status} ${response.statusText}`
      );
    }

    const json = await response.json();
    console.log(response);
    console.log(json);

    const output = json.output;
    const papr = output.papr;
    const pdno = output.pdno;
    const prdt_name = output.prdt_name;

    return {
      stockPrice: papr, // 액면가
      pdno: pdno, // 상품번호
      stockName: prdt_name, // 상품이름
    };
  } catch (error) {
    console.error("주식 정보를 가져오는 중 오류 발생:", error);
  }
};

export default getStock;
