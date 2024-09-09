"use client";
import { useEffect, useState } from "react";

import { KIS_APP_KEY, KIS_APP_SECRET } from "../config/kis_secret.js";

const useStock = (selectedStock) => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedStock) return;

    const getStock = async () => {
      setLoading(true);
      setError(null);
      try {
        // 비동기적 토큰 가져옴

        const token = localStorage.getItem("accessToken");

        if (!token) {
          throw new Error("토큰이 없습니다. 로그인 후 다시 시도해 주세요.");
        }
        // 쿼리 파라미터를 URL에 포함
        const queryParams = new URLSearchParams({
          fid_input_iscd: selectedStock,
          fid_cond_mrkt_div_code: "J",
        }).toString();

        const url = "/inquire-price?" + queryParams;

        const kisGetStockPetchOption = {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
            tr_id: "FHKST01010100", // 주식 현재가 시세
            appkey: KIS_APP_KEY,
            appsecret: KIS_APP_SECRET,
            custtype: "P", // 개인
          },
        };

        // API 호출
        const response = await fetch(url, kisGetStockPetchOption);

        if (!response.ok) {
          throw new Error(
            `API 호출 실패: ${response.status} ${response.statusText}`
          );
        }

        // JSON 파싱
        const json = await response.json();
        const output = json.output;

        setStock({
          stck_prpr: output.stck_prpr, // 주식 현재가
          hts_avls: output.hts_avls, // HTS 시가총액
          stck_shr_niscd: output.stck_shrn_iscd, // 주식 단축 종목코드
          lstn_stcn: output.lstn_stcn, // 상장주수
          bstp_kor_isnm: output.bstp_kor_isnm, // 업종
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStock();
  }, [selectedStock]); // selectedStock이 변경될 때마다 이 useEffect가 실행됨

  return { stock, loading, error };
};

export default useStock;
