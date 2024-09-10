"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
const RankingPage = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await fetch("/api/quiz");
        if (!response.ok) throw new Error("네트워크 응답이 올바르지 않습니다.");
        const data = await response.json();
        setRankingData(data);
      } catch (error) {
        console.error("랭킹 데이터 가져오기 오류:", error);
      }
    };

    fetchRankingData();
  }, []);

  return (
    <>
      <h1>여기는 랭킹페이지</h1>
      <ul>
        {rankingData.map((item) => (
          <li key={item.quiz_no}>
            {/* quizUserId를 사용자 아이디로 가정 */}
            <span>
              사용자 아이디: {item.quiz_user_id}, 점수: {item.quiz_collect}
            </span>
          </li>
        ))}
      </ul>
      <Link href="/quiz/question">시가총액 맞추기게임</Link>
    </>
  );
};

export default RankingPage;
