"use client";
import useStock from "@/app/modules/kis_stock_api";

const ChartPage = ({ selectedStock }) => {
  const stockData = useStock(selectedStock);

  return (
    <>
      <h1>차트 페이지</h1>
      {stockData ? (
        <div>
          <p>주식코드: {stockData.stck_shr_niscd}</p>
          <p>현재가: {stockData.stck_prpr}</p>
          <p>시가총액: {stockData.hts_avls}</p>
        </div>
      ) : (
        <p>데이터를 불러오는 중입니다...</p>
      )}
    </>
  );
};

export default ChartPage;
