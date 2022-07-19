import React from "react";
import { useEffect, useState } from "react";

function Overview({ expenses, username, loading }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let tempval = 0;
    expenses.forEach((element) => {
      tempval += element.amount;
    });
    setValue(tempval);
  }, [expenses]);

  return (
    <>
      <div className="flex flex-col gap-2 p-8 bg-white drop-shadow-md rounded-md">
        <p className="font-bold text-2xl">Hi 👋 {username} !</p>
        <p className="font-semibold text-4xl"> Your Total Expenses </p>
        {loading ? (
          <p className="font-bold text-4xl h-[96px] flex items-center text-center">Loading ...</p>
        ) : (
          <p className="font-bold text-8xl"> ₹ {value}</p>
        )}
        {/*<p className="font-bold text-xl">That's ₹ up from last week</p>*/}
      </div>
    </>
  );
}

export default Overview;
