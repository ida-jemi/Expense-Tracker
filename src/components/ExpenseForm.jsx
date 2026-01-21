import { useState } from "react";

export default function ExpenseForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    addTransaction({
      id: Date.now(),
      text,
      amount: +amount,
      month: new Date().toLocaleString("default", { month: "long" })
    });

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler} className="card">
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (+income, -expense)"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
