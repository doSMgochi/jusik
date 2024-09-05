"use client";
import { useState, useEffect } from "react";
import ChartPage from "../chart/page";

const ListPage = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [searchStock, setSearchStock] = useState("");

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("/api/stock");
        if (!response.ok) throw new Error("네트워크 응답이 올바르지 않습니다.");
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("주식 정보를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchStocks();
  }, []);

  // 검색 기능
  const searchData = (items, word) => {
    return items.filter((item) => {
      const lowercasedWord = word.toLowerCase();
      return (
        item.stock_iscd.toLowerCase().includes(lowercasedWord) ||
        item.stock_name.toLowerCase().includes(lowercasedWord)
      );
    });
  };

  const searchResult = searchData(stocks, searchStock);

  const handleStockClick = (stock_iscd) => {
    setSelectedStock(stock_iscd);
  };

  const viewStocks = searchResult.map((stock) => (
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
      <div className="stock list">
        <h1>주식 리스트</h1>
        <form>
          <input
            type="text"
            name="stock_name"
            placeholder="주식 검색"
            value={searchStock}
            onChange={(e) => setSearchStock(e.target.value)}
          />
        </form>
        <ul>{viewStocks}</ul>
      </div>
      <div className="stock detail">
        <h1>상세보기</h1>
        {selectedStock && <ChartPage selectedStock={selectedStock} />}
      </div>
    </>
  );
};

export default ListPage;
