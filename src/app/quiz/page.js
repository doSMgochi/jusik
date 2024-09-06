"use client";

import { useState, useEffect } from "react";

const QuizPage = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [score, setScore] = useState(0); // 점수 상태를 추가

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("/api/stock");
        // API 요청 성공 여부확인
        if (!response.ok) {
          throw new Error("네트워크 응답 실패");
        }
        const data = await response.json();
        const randomStocks = getRandomData(data, 2); // 2개 랜덤 스탁을 저장
        setStocks(randomStocks);
      } catch (error) {
        console.error("주식 정보 가져오기 실패", error);
      }
    };
    fetchStocks();
  }, []);

  const getRandomData = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }; // random shuffle 근데이거 문자열 포함된 코드는 안넘어오는거같은데?

  const handleStockClick = (stockIscd) => {
    setSelectedStock(stockIscd);
    console.log("선택된 주식 코드:", stockIscd); // 선택된 주식 코드를 출력

    /* TODO: 퀴즈 로직 구현
     1. 정답 판별
     2. 점수 계산
     3. setScore를 통해 점수 업데이트
     4. 필요하다면 새로운 문제 출제 (fetchStocks 호출 또는 stocks 상태 업데이트)
     */
    ////////
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
        {/* 점수 */}
        <h3>둘중 누가더 시가총액이 클까!</h3>
        <ul>{viewRandomStocks}</ul>
      </div>
      <div className="quiz result"></div>
    </>
  );
};

export default QuizPage;
