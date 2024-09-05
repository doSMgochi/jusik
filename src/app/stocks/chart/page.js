import useStock from "@/app/modules/kis_stock_api";

const ChartPage = ({ selectedStock }) => {
  const { stock, loading, error } = useStock(selectedStock);

  if (loading) return <p>데이터를 불러오는 중입니다...</p>;
  if (error) return <p>오류: {error}</p>;
  if (!stock) return <p>상세 정보를 선택해 주세요.</p>;

  return (
    <div>
      <p>주식코드 : {stock.stck_shr_niscd}</p>
      <p>업종 : {stock.bstp_kor_isnm}</p>
      <p>현재가 : {stock.stck_prpr}</p>
      <p>상장주수 : {stock.lstn_stcn}</p>
      <p>시가총액 : {stock.hts_avls}</p>
    </div>
  );
};

export default ChartPage;
