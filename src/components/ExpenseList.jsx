import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, loading }) {
  return (
    <div className="flex flex-col bg-base-100 drop-shadow-md p-6 rounded-md md:h-[320px] max-h-[320px]">
      <h1 className="text-2xl font-bold">Expenses</h1>
      <div className="flex flex-col overflow-y-scroll h-5/6 scrollbar-thin scrollbar-thumb-indigo-600 ">
        {loading ? (
          <h1 className="text-2xl font-bold self-center justify-self-center">Loading ...</h1>
        ) : (
          expenses.map((e) => {
            return <ExpenseItem key={e._id} expense={e} className="hover:drop-shadow-sm" />;
          })
        )}
      </div>
    </div>
  );
}

export default ExpenseList;
