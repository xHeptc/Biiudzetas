import TransactionItem from "./TransactionItem";

function RecentTransactions({ items }) {
  return (
    <section className="card transactions-card">
      <header className="transactions-header">
        <h2>Paskutinės operacijos</h2>
        <button type="button">Visi</button>
      </header>

      <div className="transactions-list">
        {items.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default RecentTransactions;