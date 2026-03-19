import { formatCurrency } from "../../utils/formatCurrency";

function TransactionItem({ item }) {
  return (
    <article className="transaction-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.date}</p>
      </div>

      <strong className={item.type === "income" ? "amount-income" : "amount-expense"}>
        {item.type === "income" ? "+" : "-"}
        {formatCurrency(item.amount)}
      </strong>
    </article>
  );
}

export default TransactionItem;