"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import quiz from "../../../../public/css/quiz.module.css";

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
    <div className={quiz.quiz_background}>
      <section className={quiz.ranking_box}>
        <h1 className={quiz.mg_bottom15}>🏆랭킹</h1>
        <ul>
          {rankingData.slice(0, 10).map((item, index) => (
            <li key={item.quiz_no}>
              {/* quizUserId를 사용자 아이디로 가정 */}
              <span className={quiz.score_list}>
                <span
                  className={quiz.rating}
                  style={{
                    color:
                      index === 0
                        ? "gold"
                        : index === 1
                        ? "whitesmoke"
                        : index === 2
                        ? "peru"
                        : "lightgray",
                    fontWeight: index < 3 ? "bold" : "normal",
                  }}
                >
                  {index + 1}등
                </span>
                {" 아이디: "}
                {item.quiz_user_id} 점수: {item.quiz_collect}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/quiz/question">
          <button className={quiz.page_move}>시가총액 맞추기게임</button>
        </Link>
      </section>
    </div>
  );
};

export default RankingPage;
//ㅇㅇㅇ
