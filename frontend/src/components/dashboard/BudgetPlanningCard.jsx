function BudgetPlanningCard({ items }) {
  return (
    <section className="card budget-card">
      <header className="card-header">
        <h2>Biudžeto planavimas</h2>
      </header>

      <div className="budget-list">
        {items.map((item) => (
          <article className="budget-item" key={item.id}>
            <div className="budget-row">
              <div>
                <h3>{item.name}</h3>
                <p>
                  Išleista: {item.spent}€ iš {item.limit}€
                </p>
              </div>

              <div className="budget-controls">
                <button type="button">-</button>
                <span>{item.limit}</span>
                <button type="button">+</button>
              </div>
            </div>

            <div className="progress-bar">
              <div
                className={`progress-fill ${item.accent}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>

            <p className={`progress-label ${item.accent}`}>
              {item.progress}% progresas
            </p>
          </article>
        ))}
      </div>

      <button className="save-btn" type="button">
        Išsaugoti pakeitimus
      </button>
    </section>
  );
}

export default BudgetPlanningCard;