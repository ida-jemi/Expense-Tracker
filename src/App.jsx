import { useState } from "react";
import Balance from "./components/balance";
import ExpenseForm from "./components/ExpenseForm";
import TransactionList from "./components/TransactionList";
import MonthlySummary from "./components/MonthlySummary";
import ExpenseChart from "./components/Expensechart";
import "./index.css";

export default function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />
      <ExpenseChart transactions={transactions} /> 
      <MonthlySummary transactions={transactions} />

      <ExpenseForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}