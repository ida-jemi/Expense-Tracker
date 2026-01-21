export default function Balance({ transactions }) {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="card balance">
      <h2>Balance</h2>
      <h1>${total.toFixed(2)}</h1>
    </div>
  );
}