export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="card">
      <h3>Transactions</h3>
      <ul>
        {transactions.map(t => (
          <li key={t.id} className={t.amount < 0 ? "minus" : "plus"}>
            {t.text}
            <span>${Math.abs(t.amount)}</span>
            <button onClick={() => deleteTransaction(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
