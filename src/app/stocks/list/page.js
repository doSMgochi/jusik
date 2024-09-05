"use client";
import { useState, useEffect } from "react";
import ChartPage from "../chart/page";

const ListPage = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("/api/stock");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("Failed to fetch stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  const handleStockClick = (stock_iscd) => {
    setSelectedStock(stock_iscd);
  };

  const viewStocks = stocks.map((stock) => (
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
