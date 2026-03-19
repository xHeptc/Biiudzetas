import { formatCurrency } from "../../utils/formatCurrency";

function BalanceCard({ balance }) {
  return (
    <section className="balance-card">
      <p className="balance-label">Bendras likutis</p>
      <h1 className="balance-value">{formatCurrency(balance)}</h1>
    </section>
  );
}

export default BalanceCard;