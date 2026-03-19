function ExpenseDistributionCard({ total, items }) {
  return (
    <section className="card distribution-card">
      <header className="card-header">
        <h2>Išlaidų pasiskirstymas</h2>
      </header>

      <div className="distribution-center">
        <h3>{total}€</h3>
        <p>Iš viso</p>
      </div>

      <div className="distribution-legend">
        {items.map((item) => (
          <div className="legend-item" key={item.name}>
            <span
              className="legend-dot"
              style={{ backgroundColor: item.color }}
            />
            <span>
              {item.name} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpenseDistributionCard;