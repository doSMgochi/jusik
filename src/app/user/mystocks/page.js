"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import user from "../../../../public/css/user.module.css";
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
    <section className={user.mystocks_box}>
      <h1 className={user.fs_5x}>내 주식</h1>
      <h1 className={user.fs_1x}>My Stocks</h1>
      <ul className={user.do}>
        {favorites.map((favorite) => (
          <li className={user.li} key={favorite.f_stock_iscd}>
            <div className={user.stocks}>
              {" "}
              {favorite.tbl_stocks.stock_name} -{" "}
              {favorite.tbl_stocks.stock_iscd}
            </div>
            <button
              className={user.favorite}
              onClick={() =>
                handleRemoveFavorite(favorite.tbl_stocks.stock_iscd)
              }
            >
              즐겨찾기 해제
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyStockPage;
