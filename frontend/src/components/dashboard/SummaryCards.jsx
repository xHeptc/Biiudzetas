import { formatCurrency } from "../../utils/formatCurrency";

function SummaryCards({ income, expenses }) {
  return (
    <section className="summary-cards">
      <article className="summary-card income-card">
        <p className="summary-title">Pajamos</p>
        <h2>+{formatCurrency(income)}</h2>
        <span>↗ +12% šį mėn.</span>
      </article>

      <article className="summary-card expense-card">
        <p className="summary-title">Išlaidos</p>
        <h2>-{formatCurrency(expenses)}</h2>
        <span>↘ -5% šį mėn.</span>
      </article>
    </section>
  );
}

export default SummaryCards;