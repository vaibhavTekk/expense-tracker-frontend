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
    <span className="flex flex-row md:px-2 px-1 justify-between">
      <span className="flex flex-row items-center">
        <p className="md:text-xl text-sm font-bold m-2">₹ {expense.amount}</p>
        <p className="text-sm">{expense.remarks}</p>
      </span>
      <span className="flex flex-row items-center">
        <p className="text-sm">{new Date(expense.createdAt).toLocaleDateString("en-GB")}</p>
        <button onClick={handleDelete}>
          <TrashIcon className="h-6 w-6 mx-4 rounded-md bg-white hover:drop-shadow-md " />
        </button>
      </span>
    </span>
  );
}

export default ExpenseItem;
