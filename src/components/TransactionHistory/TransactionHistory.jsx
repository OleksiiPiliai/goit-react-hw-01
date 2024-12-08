import clsx from "clsx";
import style from "./TransactionHistory.module.css"
const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <tr className={clsx(style.tr)}>
      <td className={clsx(style.td)}>{type}</td>
      <td className={clsx(style.td)}>{amount}</td>
      <td className={clsx(style.td)}>{currency}</td>
    </tr>
  );
};

export default TransactionHistory;