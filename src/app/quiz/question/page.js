"use client";

import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { useSession, signIn } from "next-auth/react";
import useStock from "@/app/modules/kis_stock_api"; // useStock 훅 가져오기

const QuizPage = () => {
  const [stocks, setStocks] = useState([]); // DB에서 선택할 주식
  const [selectedStock, setSelectedStock] = useState(null); // 선택된 주식
  const [resultMessage, setResultMessage] = useState(""); // 결과 메시지
  const [score, setScore] = useState(0); // 점수 상태
  const [gameEnded, setGameEnded] = useState(false); // 게임 종료 상태
  // 두 개의 주식 데이터 가져오기
  const [stockData1, setStockData1] = useState(null);
  const [stockData2, setStockData2] = useState(null);
  
  const { stock: stock1, loading: loading1 } = useStock(stockData1?.stock_iscd); 
  const { stock: stock2, loading: loading2 } = useStock(stockData2?.stock_iscd);
  
  const { data: session } = useSession();//유저 데이터

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("/api/stock");
        if (!response.ok) throw new Error("네트워크 응답이 올바르지 않습니다.");
        const data = await response.json();
        const randomStocks = getRandomData(data, 2); // 2개 랜덤 주식 데이터 저장
        setStocks(randomStocks);

        // 주식 데이터를 상태에 설정
        setStockData1(randomStocks[0]);
        setStockData2(randomStocks[1]);
      } catch (error) {
        console.error("주식 정보를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchStocks();
  }, []);

  const getRandomData = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleStockClick = async (selectedStockData) => {
    
    if (gameEnded) return; // 게임이 끝난 경우 클릭 무시

    if (loading1 || loading2) {
      console.error("주식 데이터가 아직 로드되지 않았습니다.");
      return;
    }

    if (!stock1 || !stock2) {
      console.error("주식 데이터가 올바르지 않습니다.");
      return;
    }

    // 시가총액 비교 및 점수 처리
    if (selectedStockData === stockData1) {
      if (stock1.hts_avls > stock2.hts_avls) {
        setScore(score + 1);
        setResultMessage("정답입니다!");
        // 다음 문제 로드
        loadNextQuestion();
      } else {
        setResultMessage("오답입니다.");
        setGameEnded(true); // 게임 종료 상태로 설정
        console.log(gameEnded);
      }
    } else {
      if (stock2.hts_avls > stock1.hts_avls) {
        setScore(score + 1);
        setResultMessage("정답입니다!");
        // 다음 문제 로드
        loadNextQuestion();
      } else {
        setResultMessage("오답입니다.");
        setGameEnded(true); // 게임 종료 상태로 설정
        
      }
    }

    if (gameEnded===false) {
      try {
        const userId = session.user.id
        const totalScore = score;
        console.log("userId",userId);
        console.log("totalScore",score);
        const response = await axios.post("/api/quiz", {
        
            quizScore: totalScore,
            quizUserId: userId,  
          });
      
    
        if (!response.ok) {
          throw new Error("퀴즈 결과 저장 실패");
        }
    
        // 성공적으로 저장된 경우, 필요하다면 응답 데이터 처리
        const data = await response.json();
        console.log("퀴즈 결과 저장 성공:", data);
    
        // 게임 종료 후 점수 초기화 또는 다른 처리 수행
        // setScore(0);  // 예시: 점수 초기화
      } catch (error) {
        console.error("퀴즈 결과 저장 실패:", error);
      }
    }
  };

  const loadNextQuestion = async () => {
    try {
      const response = await fetch("/api/stock");
      if (!response.ok) throw new Error("네트워크 응답이 올바르지 않습니다.");
      const data = await response.json();
      const randomStocks = getRandomData(data, 2); // 2개 랜덤 주식 데이터 저장
      setStocks(randomStocks);

      // 주식 데이터를 상태에 설정
      setStockData1(randomStocks[0]);
      setStockData2(randomStocks[1]);
      setGameEnded(false); // 게임 상태 초기화
    } catch (error) {
      console.error("다음 문제를 가져오는 데 실패했습니다:", error);
    }
  };

  const viewRandomStocks = stocks.map((stock) => (
    <li
      key={stock.stock_iscd}
      onClick={() => handleStockClick(stock)}
      style={{ cursor: gameEnded ? "not-allowed" : "pointer" }}
    >
      <span>{stock.stock_iscd}</span>
      <span>{stock.stock_name}</span>
    </li>
  ));
  if (!session?.user) { // session?.user를 사용하여 안전하게 user 정보 접근
    return (
      <div>
        <p>로그인이 필요합니다.</p>
        <button onClick={() => signIn()}>로그인</button> 
      </div>
    );
  }
  return (
    <>
      <h1>여기는 퀴즈페이지</h1>
      <div className="quiz">
        {session.user.nick}님의 
        <span>현재 점수: {score}</span>
        <h3>둘 중 누가 더 시가총액이 클까!</h3>
        <ul>{viewRandomStocks}</ul>
      </div>
      {gameEnded && (
        <div className="quiz result">
          <span>약 {stock1?.hts_avls || "데이터 없음"} 억</span>
          <span>{resultMessage}</span>
        </div>
      )}
    </>
  );
};

export default QuizPage;
