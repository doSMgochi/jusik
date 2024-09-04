"use client";
import { useEffect, useState } from "react";
import { KIS_APP_KEY, KIS_APP_SECRET } from "../config/kis_secret";
import getToken from "./kis_token";

const useStock = () => {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const getStock = async () => {
      try {
        // 비동기적 토큰 가져옴
        const token = await getToken();

        // 쿼리 파라미터를 URL에 포함
        const queryParams = new URLSearchParams({
          fid_input_iscd: "005930", //나중에 여기에 주식코드를 JUSIK DB에있는 해당 코스닥 이름을 클릭시 해당종목코드가 넘아가서 검색이 되게해서 해당주식상세정보를 찍어줄거임!
          fid_cond_mrkt_div_code: "J", //J : 주식, ETF, ETN
        }).toString();

        const url = "/inquire-price?" + `${queryParams}`;

        const kisGetStockPetchOption = {
          method: "GET",

          headers: {
            authorization: `Bearer ${token}`,
            tr_id: "FHKST01010100", //주식현재가시세
            appkey: KIS_APP_KEY,
            appsecret: KIS_APP_SECRET,
            custtype: "P", //P:개인 B는 법인
          },
        };
        //API 호출
        const response = await fetch(url, kisGetStockPetchOption);

        if (!response.ok) {
          throw new Error(
            `API 호출 실패: ${response.status} ${response.statusText}`
          );
        }
        //JSON 파싱
        const json = await response.json();
        const output = json.output;
        console.log(output);

        setStock({
          stck_prpr: output.stck_prpr, // 주식 현재가
          hts_avls: output.hts_avls, // HTS 시가총액
          stck_shr_niscd: output.stck_shrn_iscd, // 주식 단축 종목코드
          //나중에 더추가할거임 https://apiportal.koreainvestment.com/apiservice/apiservice-domestic-stock-quotations2#L_07802512-4f49-4486-91b4-1050b6f5dc9d
        });
      } catch (error) {
        console.error("주식 정보를 가져오는 중 오류 발생:", error);
      }
    };

    getStock();
  }, []);

  return stock;
};
export default useStock;
