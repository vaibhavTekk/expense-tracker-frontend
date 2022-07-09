import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { post } from "../features/expenses/expSlice";

function ExpenseForm() {
  const [amount, setamount] = useState(0);
  const [remarks, setremarks] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const expensedata = { amount, remarks };
    dispatch(post(expensedata));
  };

  return (
    <div className="bg-white drop-shadow-md rounded-md h-fit">
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
        <input type="submit" className="btn btn-primary" value="submit" />
      </form>
    </div>
  );
}

export default ExpenseForm;
