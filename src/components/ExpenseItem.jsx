import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { deleteExp } from "../features/expenses/expSlice";

function ExpenseItem({ expense }) {
  const dispatch = useDispatch();
  const id = expense._id;

  const handleDelete = () => {
    dispatch(deleteExp(id));
  };

  return (
    <span className="flex flex-row px-4 justify-between">
      <span className="flex flex-row items-center">
        <p className="text-xl font-bold m-2">₹ {expense.amount}</p>
        <p>{expense.remarks}</p>
      </span>
      <span className="flex flex-row items-center">
        <p>{new Date(expense.createdAt).toDateString()}</p>
        <button onClick={handleDelete}>
          <TrashIcon className="w-8 h-8 mx-4 rounded-md bg-white hover:drop-shadow-md " />
        </button>
      </span>
    </span>
  );
}

export default ExpenseItem;
