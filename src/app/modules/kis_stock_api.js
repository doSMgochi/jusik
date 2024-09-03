import {
  CONTENT_TYPE,
  KIS_APP_KEY,
  KIS_APP_SECRET,
  KIS_TR_ID,
} from "../config/kis_secret";
import getToken from "./kis_token";

const token = getToken();
const kisGetStockPetchOption = {
  method: "GET",
  headers: {
    "Content-Type": CONTENT_TYPE,
    authorization: token,
    tr_id: KIS_TR_ID,
    appkey: KIS_APP_KEY,
    appsecret: KIS_APP_SECRET,
    custtype: "P",
  },
  queryParameter: JSON.stringify({
    PDNO: "000660",
    PRDT_TYPE_CD: "300",
  }),
};

const getStock = async () => {
  const url =
    "https://openapivts.koreainvestment.com:29443/uapi/domestic-stock/v1/quotations/inquire-price";
  const response = await fetch(url, kisGetStockPetchOption);
  const json = await response.json();
  console.log(response);
  console.log(json);

  const output = json.output;
  const papr = output.papr;
  const pdno = output.pdno;
  const prdt_name = output.prdt_name;
  return {
    stockPrice: papr, //액면가
    pdno: pdno, //상품번호
    stockName: prdt_name, //상품이름
  };

  // return [
  //   papr, //액면가
  //   pdno, //상품번호
  //   prdt_name, //상품이름
  // ];
};
export default getStock;
