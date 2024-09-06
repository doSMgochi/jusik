"use client";

import { useState, useEffect } from "react";
import axios from "axios";
// import useStock from "@/app/modules/kis_stock_api";
import { useSession, signIn } from "next-auth/react";

const QuizPage = () => {
  // const { stock, loading, error } = useStock(selectedStock); // 주식실시간 정보
  const [stocks, setStocks] = useState([]); //선택할 주식
  const [selectedStock, setSelectedStock] = useState(null); //선택된 주식
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
  };

  //주식정보를 불러오는 메세지
  // if (loading) return <p>데이터를 불러오는 중입니다...</p>;
  // if (error) return <p>오류: {error.message}</p>;
  // if (!stock) return <p>주식정보가 없습니다.</p>;

  const handleStockClick = (stockIscd) => {
    setSelectedStock(stockIscd);

    try {
      const userId = session.user.id;
      const response = axios.post("/api/quiz", {
        quiz_user_id: userId,
      });
    } catch (error) {
      console.error("퀴즈데이터 보내는중 오류:", error);
    }
    console.log("선택된 주식 코드:", stockIscd); // 선택된 주식 코드를 출력
    // 주식 코드를 보낼거임 api route에
    /* TODO: 퀴즈 로직 구현
     1. 정답 판별!!
     2. 점수 계산
     3. setScore를 통해 점수 업데이트
     4. 필요하다면 새로운 문제 출제 (fetchStocks 호출 또는 stocks 상태 업데이트)
     */
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
