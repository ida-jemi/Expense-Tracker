import ReactECharts from "echarts-for-react";

export default function ExpenseChart({ transactions }) {

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = Math.abs(
    transactions
      .filter(t => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0)
  );

  const option = {
    title: {
      text: "Income vs Expense",
      left: "center",
      top: 10
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      bottom: 0
    },
    series: [
      {
        name: "Amount",
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: income, name: "Income" },
          { value: expense, name: "Expense" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  return (
    <div className="card">
      <ReactECharts option={option} style={{ height: "300px" }} />
    </div>
  );
}
