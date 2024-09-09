"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import useStock from "@/app/modules/kis_stock_api";
import { useSession, signIn } from "next-auth/react";

const QuizPage = () => {
  const [stocks, setStocks] = useState([]); // 주식이름,코드
  const [selectedStock, setSelectedStock] = useState(null); // 선택된 주식
  const [resultMessage, setResultMessage] = useState(""); // 결과메시지
  const [score, setScore] = useState(0); //  점수 상태를 추가

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("/api/stock");
        if (!response.ok) throw new Error("네트워크 응답이 올바르지 않습니다.");
        const data = await response.json();
        const randomStocks = getRandomData(data, 2); // 2개 랜덤 스탁을 저장
        // 랜덤 주식데이터를 api 로 조회해서 stocks 에 저장
        console.log("랜덤주식코드", randomStocks.stock_iscd);

        setStocks();
      } catch (error) {
        console.error("주식 정보를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchStocks();
  }, []);
  //json 데이터 랜덤
  const getRandomData = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleStockClick = (stockIscd) => {
    setSelectedStock(stockIscd);
    if (stocks.length === 0) {
      return; // stocks 배열이 비어 있으면 함수 종료
    }

    const selectedStock = stocks.map(); // stocks 에서 선택한 iscd 랑 stocks 에 있는 데이터 비교해서 같은값 selectedStock 에 세팅
    const otherStock = stocks.map; // stocks 에서 선택한 iscd 랑 stocks 에 있는 데이터 비교해서 다른값 otherStock 에 세팅

    if (selectedStock && otherStock) {
      // stocks 배열이 비어 있는지 확인
      if (stocks.length === 0) {
        return; // stocks 배열이 비어 있으면 함수 종료
      }

      if (selectedStock.hts_avls > otherStock.hts_avls) {
        setScore((prevScore) => prevScore + 1); // 상태 업데이트 함수 사용
        setResultMessage("정답입니다!");
      } else {
        setResultMessage("오답입니다.");
      }
    } else {
      console.error("주식 데이터를 찾을 수 없습니다.");
    }
    console.log("선택된 주식 시가총액", selectedStock.hts_avls);
    console.log("선택안된 주식 시가총액", otherStock.hts_avls);
    //이게안나옴 그럼 api에 또요청해서 비교해야됨
    console.log("선택된 주식 코드:", stockIscd);
  };

  const viewRandomStocks = stocks.map((stock) => (
    <li
      key={stock.stock_iscd}
      onClick={() => handleStockClick(stock.stock_iscd)}
    >
      <span>{stock.stock_iscd}</span>
      <span>{stock.stock_name}</span>
    </li>
  ));

  return (
    <>
      <h1>여기는 퀴즈페이지</h1>
      <div className="quiz">
        <span>현재 점수: {score}</span>
        <h3>둘중 누가더 시가총액이 클까!</h3>
        <ul>{viewRandomStocks}</ul>
      </div>
      {stock && ( // stock 데이터가 있을 때만 상세 정보 표시
        <div className="quiz result">
          <span>약{stock.hts_avls}억</span>
          <span>{resultMessage}</span>
          {/* 필요한 다른 정보도 추가 */}
        </div>
      )}
    </>
  );
};
export default QuizPage;
