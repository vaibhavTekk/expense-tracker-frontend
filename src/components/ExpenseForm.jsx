import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { post } from "../features/expenses/expSlice";

function ExpenseForm() {
  const [amount, setamount] = useState(0);
  const [remarks, setremarks] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [categ, setCateg] = useState("Miscellaneous 💵");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const expensedata = { amount, remarks, created: date, category: categ };
    dispatch(post(expensedata));
    setamount(0);
    setremarks("");
  };

  return (
    <div className="bg-base-100 drop-shadow-md shadow-base-content rounded-md h-fit">
      <form onSubmit={onSubmit} className="flex flex-col p-6 gap-4">
        <h1 className="font-bold text-xl">Submit new Expense</h1>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="0.01"
              className="input input-bordered w-full"
              value={amount}
              onChange={(e) => {
                setamount(e.target.value);
              }}
            />
            <span>INR</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="Remarks"
          className="input input-bordered w-full"
          value={remarks}
          onChange={(e) => setremarks(e.target.value)}
        />
        <select className="select select-bordered w-full " value={categ} onChange={(e) => setCateg(e.target.value)}>
          <option value="Miscellaneous 💵">Miscellaneous 💵</option>
          <option value="Entertainment 🍿">Entertainment 🍿</option>
          <option value="Rent 🏚️">Rent 🏚️</option>
          <option value="Transport 🚌">Transport 🚌</option>
        </select>
        <input
          type="date"
          placeholder="Remarks"
          className="input input-bordered w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input type="submit" className="btn btn-primary" value="submit" />
      </form>
    </div>
  );
}

export default ExpenseForm;
