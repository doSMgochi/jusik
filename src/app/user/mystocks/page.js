"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const MyStockPage = () => {
  const { data: session, status } = useSession();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (status !== "authenticated") return;

      try {
        const response = await axios.get("/api/favorite/user", {
          params: { user_id: session.user.id },
        });

        setFavorites(response.data);
      } catch (error) {
        console.error("즐겨찾기 데이터를 불러오는 중 오류 발생:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [session, status]);

  const handleRemoveFavorite = async (stockIscd) => {
    try {
      await axios.delete("/api/favorite", {
        data: { user_id: session.user.id, stock_iscd: stockIscd },
      });

      setFavorites((prevFavorites) =>
        prevFavorites.filter(
          (favorite) => favorite.tbl_stocks.stock_iscd !== stockIscd
        )
      );
    } catch (error) {
      console.error("즐겨찾기 해제 중 오류 발생:", error);
      setError(error);
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류: {error.message}</p>;
  if (!favorites.length) return <p>즐겨찾기가 없습니다.</p>;

  return (
    <div>
      <h1>내 주식 즐겨찾기 목록</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.f_stock_iscd}>
            {favorite.tbl_stocks.stock_name} - {favorite.tbl_stocks.stock_iscd}
            <button
              onClick={() =>
                handleRemoveFavorite(favorite.tbl_stocks.stock_iscd)
              }
            >
              즐겨찾기 해제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyStockPage;
