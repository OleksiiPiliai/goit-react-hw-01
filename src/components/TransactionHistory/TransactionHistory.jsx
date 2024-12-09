import clsx from "clsx";
import style from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(style.table)}>
          <thead className={clsx(style.thead)}>
            <tr >
              <th className={clsx(style.th)}>Type</th>
              <th className={clsx(style.th)}>Amount</th>
              <th className={clsx(style.th)}>Currency</th>
            </tr>
          </thead>
      <tbody>
        {items.map((item) => (
          <tr className={clsx(style.tr)} key={item.id}>
            <td className={clsx(style.td)}> {item.type}</td>
            <td className={clsx(style.td)}>{item.amount}</td>
            <td className={clsx(style.td)}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
        </table>
  );
};

export default TransactionHistory;