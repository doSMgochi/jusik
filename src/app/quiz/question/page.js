"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession, signIn } from "next-auth/react";
import useStock from "@/app/modules/kis_stock_api"; // useStock 훅 가져오기
import { useRouter } from "next/navigation"; // useRouter 추가
import Link from "next/link";
import quiz from "../../../../public/css/quiz.module.css";

const QuizPage = () => {
  const [stocks, setStocks] = useState([]); // DB에서 선택할 주식
  const [resultMessage, setResultMessage] = useState(""); // 결과 메시지
  const [score, setScore] = useState(0); // 점수 상태
  const [dead, setDead] = useState(false); //  죽었다
  const [alive, setAlive] = useState(false); // 살았다

  const [stockData1, setStockData1] = useState(null);
  const [stockData2, setStockData2] = useState(null);

  const { stock: stock1, loading: loading1 } = useStock(stockData1?.stock_iscd);
  const { stock: stock2, loading: loading2 } = useStock(stockData2?.stock_iscd);

  const { data: session } = useSession(); //유저 데이터

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
  //------------------랜덤데이터--------------------------------------------------
  const getRandomData = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleStockClick = async (selectedStockData) => {
    if (dead) return; // 게임이 끝난 경우 클릭 무시

    if (loading1 || loading2) {
      console.error("주식 데이터가 아직 로드되지 않았습니다.");
      return;
    }

    if (!stock1 || !stock2) {
      console.error("주식 데이터가 올바르지 않습니다.");
      return;
    }
    const marketCap1 = parseFloat(stock1.hts_avls);
    const marketCap2 = parseFloat(stock2.hts_avls);

    // 시가총액 비교 및 점수 처리
    if (selectedStockData === stockData1) {
      if (marketCap1 > marketCap2) {
        setScore(score + 1);
        setResultMessage("정답!");
        setAlive(true);
        loadNextQuestion();
      } else {
        setResultMessage("틀렸습니다. 다시 플레이 하시겠습니까?");
        setDead(true);
        console.log("dead?", dead);
        await saveQuizResult(); // 게임이 끝나면 퀴즈 결과 저장
      }
    } else if (selectedStockData === stockData2) {
      if (marketCap2 > marketCap1) {
        setScore(score + 1);
        setResultMessage("정답!");
        setAlive(true);
        loadNextQuestion();
      } else {
        setResultMessage("틀렸습니다. 다시 플레이 하시겠습니까?");
        setDead(true);
        console.log("dead?", dead);
        await saveQuizResult(); // 게임이 끝나면 퀴즈 결과 저장
      }
    }
  };

  const saveQuizResult = async () => {
    try {
      const userId = session.user.id;
      const totalScore = score;
      console.log(totalScore);
      const response = await axios.post(
        "/api/quiz",
        {
          quizScore: totalScore,
          quizUserId: userId,
        },
        {
          headers: {
            "Content-Type": "application/json", // JSON 형태로 보낼 때 필요한 헤더
          },
        }
      );
      console.log("퀴즈 결과 저장 성공:", response.data);
    } catch (error) {
      console.error("퀴즈 결과 저장 실패:", error);
    }
  };
  //------------------------------------새로운 문제 불러오기----------------------------------
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
    } catch (error) {
      console.error("다음 문제를 가져오는 데 실패했습니다:", error);
    }
  };
  //------------------------다시시작-----------------------------------------------------------------
  const restartGame = () => {
    setScore(0);
    setDead(false);
    setAlive(false);
    setResultMessage("");
    loadNextQuestion(); // 새로운 문제 로드
  };

  const viewRandomStocks = stocks.map((stock) => (
    <li
      className={quiz.li}
      key={stock.stock_iscd}
      onClick={() => handleStockClick(stock)}
      style={{ cursor: dead ? "not-allowed" : "pointer" }}
    >
      <span>{stock.stock_name}</span>
    </li>
  ));

  if (!session?.user) {
    return (
      <div>
        <p>로그인이 필요합니다.</p>
        <button onClick={() => signIn()}>로그인</button>
      </div>
    );
  }

  return (
    <div className={quiz.quiz_background}>
      <section className={quiz.question_box}>
        <h1 className={quiz.fs_2x}>시가총액 맞추기 게임</h1>
        <h3>둘 중 누가 더 시가총액이 클까!</h3>
        {session.user.nick}님의 현재 점수: {score}
        <div className={quiz.notice}>
          <ul className={quiz.stocks_field}>
            <div className={quiz.left_stock}>{viewRandomStocks[0]}</div>
            <div className={quiz.right_stock}>{viewRandomStocks[1]}</div>
          </ul>
        </div>
        {dead && (
          <div className={quiz.result}>
            <span>
              <>
                시가총액(단위) 1번: {stock1?.stock_name}{" "}
                {stock1?.hts_avls || "데이터 없음"}억, 2번: {stock2?.stock_name}{" "}
                {stock2?.hts_avls || "데이터 없음"}억
              </>
            </span>
            <div>{resultMessage}</div>
            <button className={quiz.replay} onClick={restartGame}>
              다시 시작
            </button>{" "}
            {/* 다시 시작 버튼 추가 */}
          </div>
        )}
        <button className={quiz.page_move}>
          <Link href="/quiz/ranking">유저 랭킹보러가기</Link>
        </button>
      </section>
    </div>
  );
};

export default QuizPage;
