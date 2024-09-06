import useStock from "@/app/modules/kis_stock_api";

const ListPage = () => {
  const stock = useStock();
  return (
    <table>
      <thea>
        <th>주식명</th>
        <th>주식현재가</th>
        <th>시가총액</th>
        <th>주식코드</th>
      </thea>
      <tbody>
        <td></td>
        <td>{stock.stck_prpr}</td>
        <td>{stock.hts_avls}</td>
        <td>{stock.stck_shrn_iscd}</td>
      </tbody>
    </table>
  );
};
export default ListPage;
