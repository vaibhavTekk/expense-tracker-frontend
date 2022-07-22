import React, { useState } from "react";
import { TrashIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { deleteExp } from "../features/expenses/expSlice";

function ExpenseItem({ expense }) {
  const [expand, setexpand] = useState("hidden");
  const dispatch = useDispatch();
  const id = expense._id;

  const handleDelete = () => {
    dispatch(deleteExp(id));
  };

  const toggleremark = () => {
    if (expand === "hidden") {
      setexpand("");
    } else {
      setexpand("hidden");
    }
  };

  return (
    <span className="flex flex-col md:px-2 px-1">
      <span className="flex flex-row flex-wrap  justify-between">
        <span className="flex flex-row items-center gap-1">
          <p className="md:text-xl text-sm font-bold m-2">₹ {expense.amount}</p>
        </span>
        <span className="flex flex-row items-center gap-1">
          <p className="text-sm m-2">{new Date(expense.created).toLocaleDateString("en-GB")}</p>
          <button onClick={handleDelete}>
            <TrashIcon className="h-6 w-6 m-2 rounded-md bg-base-100 hover:drop-shadow-md " />
          </button>
          <label class="swap swap-rotate m-2 rounded-md bg-base-100 hover:drop-shadow-md">
            <input type="checkbox" onClick={toggleremark} />
            <ChevronDownIcon className="swap-off h-6 w-6" />
            <ChevronUpIcon className="swap-on h-6 w-6" />
          </label>
        </span>
      </span>
      <span className={`flex flex-row items-center justify-between gap-1 p-2 ${expand}`}>
        <p className="text-md ml-2">{expense.remarks}</p>
        <p className="text-md">{expense.category}</p>
      </span>
    </span>
  );
}

export default ExpenseItem;
