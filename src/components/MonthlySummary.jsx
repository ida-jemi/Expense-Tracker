export default function MonthlySummary({ transactions }) {
  const monthlyData = {};

  transactions.forEach(t => {
    monthlyData[t.month] = (monthlyData[t.month] || 0) + t.amount;
  });

  return (
    <div className="card">
      <h3>Monthly Summary</h3>
      {Object.keys(monthlyData).map(month => (
        <p key={month}>
          {month}: ${monthlyData[month].toFixed(2)}
        </p>
      ))}
    </div>
  );
}