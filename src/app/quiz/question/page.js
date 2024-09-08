"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import useStock from "@/app/modules/kis_stock_api";
import { useSession, signIn } from "next-auth/react";

const QuizPage = () => {
  const [stocks, setStocks] = useState([]); // DB선택할 주식
  const [selectedStock, setSelectedStock] = useState(null); // 선택된 주식
  const {stock, loading, error } = useStock(selectedStock); // API 선택된주식 실시간 정보
  const [score, setScore] = useState(0); //  점수 상태를 추가

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
  if (loading) return <p>데이터를 불러오는 중입니다...</p>;
  if (error) return <p>오류: {error.message}</p>;
  if (!stock) return <p>주식정보가 없습니다.</p>;

  const handleStockClick = (stockIscd) => {
    setSelectedStock(stockIscd);
    //stoIscd를 저장해서 API stockIscd 2개를 쿼리 파라미터로 보냄 검색할거임 그럼 stock.hts_avls 시가총액으로 구분!
    //근대 두개를 보냈는데 한개씩 비교를 어떻게하지?
    //그냥 에초에 db에 stockISCD로 그거를 이름이름이랑 시총을 if로 바로 처리한뒤 둘중하나 높은곳을 맞추면 점수상승으로하고
    //틀린거클릭하면 예외처리를 하면되겠다.
    if(stocks.map[0]===stockIscd){
      
    } 
    console.log("시가총액",stock.hts_avls);
    // 왜토큰오류가 뜨지?
      /* 여기서 정답이 맞으면 setScore를 1씩 상승시킬거임
       <p>현재가: {stock.stck_prpr}원</p> 이걸 2개 비교 if 해서 점수 올리거나 틀리면 스코어 setScore를 멈추고
       DB에 삽입해야함
      */    

    try {
      const userId = session.user.id; //세션으로 quiz 아이디를 보내서 저장하고
      const response = axios.post("/api/quiz", {
      //quiz_no는 auto_increment 긴한데 삽입해야되나?
        quiz_user_id: userId, //O
        quiz_collect: quizScore,//X 아직  로직을 다처리한다음 테이블에 삽입할거임
      });
    } catch (error) {
      console.error("퀴즈데이터 보내는중 오류:", error);
    }
    console.log("선택된 주식 코드:", stockIscd); // 선택된 주식 코드를 출력
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
        <h3>둘중 누가더 시가총액이 클까!</h3>
        <ul>{viewRandomStocks}</ul>
      </div>
      <div className="quiz result">
      </div>
    </>
  );
};

export default QuizPage;
