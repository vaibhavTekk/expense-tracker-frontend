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
    <span className="flex flex-row flex-wrap md:px-2 px-1 justify-between">
      <span className="flex flex-row items-center gap-2">
        <p className="md:text-xl text-sm font-bold m-2">₹ {expense.amount}</p>
        <p className="text-sm">{expense.remarks}</p>
      </span>
      <span className="flex flex-row items-center gap-2">
        <p className="text-xs">{expense.category}</p>
        <p className="text-sm">{new Date(expense.created).toLocaleDateString("en-GB")}</p>
        <button onClick={handleDelete}>
          <TrashIcon className="h-6 w-6 mx-2 rounded-md bg-base-100 hover:drop-shadow-md " />
        </button>
      </span>
    </span>
  );
}

export default ExpenseItem;
