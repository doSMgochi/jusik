import { useState, useEffect } from "react";
import axios from "axios";
import useStock from "@/app/modules/kis_stock_api";

const ChartPage = ({ selectedStock }) => {
  const { stock, loading, error } = useStock(selectedStock);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // 댓글 목록을 불러오는 함수
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `/api/comment?comment_stock_iscd=${selectedStock}`
        );
        if (!response.ok) throw new Error("네트워크 응답이 올바르지 않습니다.");
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("댓글을 불러오는 중 오류 발생:", error);
      }
    };

    if (selectedStock) {
      fetchComments();
    }
  }, [selectedStock]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (comment.trim() === "") return;

    try {
      const userId = "Test";
      const response = await axios.post("/api/comment", {
        comment_body: comment,
        comment_stock_iscd: selectedStock,
        comment_user_id: userId,
        comment_likes: 0,
      });
      setComments([...comments, response.data]);
      setComment("");
    } catch (error) {
      console.error("댓글을 저장하는 중 오류 발생:", error);
    }
  };

  const handleLikeClick = async (commentId) => {
    try {
      const response = await axios.post(`/api/comment/${commentId}/like`);
      setComments(
        comments.map((c) => (c.comment_no === commentId ? response.data : c))
      );
    } catch (error) {
      console.error("좋아요를 업데이트하는 중 오류 발생:", error);
    }
  };

  if (loading) return <p>데이터를 불러오는 중입니다...</p>;
  if (error) return <p>오류: {error.message}</p>;
  if (!stock) return <p>상세 정보를 선택해 주세요.</p>;

  return (
    <>
      <div>
        <p>주식코드 : {stock.stck_shr_niscd}</p>
        <p>업종 : {stock.bstp_kor_isnm}</p>
        <p>현재가 : {stock.stck_prpr}원</p>
        <p>상장주수 : {stock.lstn_stcn}주</p>
        <p>시가총액 : 약 {stock.hts_avls}억</p>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          name="comment_body"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력하세요"
        />
        <button type="submit">댓글 달기</button>
      </form>
      <div>
        <h3>댓글 목록</h3>
        <ul>
          {comments.map((c) => (
            <li key={c.comment_no}>
              작성자 : {c.comment_user_id} - {c.comment_body} - 좋아요{" "}
              {c.comment_likes}
              <button onClick={() => handleLikeClick(c.comment_no)}>
                좋아요
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChartPage;
