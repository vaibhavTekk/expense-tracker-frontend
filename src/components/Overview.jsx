import React from "react";

function Overview({ expenses, username }) {
  let value = 0;
  expenses.forEach((element) => {
    value += element.amount;
  });

  return (
    <>
      <div className="flex flex-col gap-2 p-8 bg-white drop-shadow-md rounded-md">
        <p className="font-bold text-2xl">Hi 👋 {username} !</p>
        <p className="font-semibold text-4xl"> Your Total Expenses </p>
        <p className="font-bold text-8xl">₹ {value}</p>
        {/*<p className="font-bold text-xl">That's ₹ 20 up from last week</p>*/}
      </div>
    </>
  );
}

export default Overview;
