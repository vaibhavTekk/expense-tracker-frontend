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
      <div className="flex flex-col gap-2 p-8 bg-base-100 drop-shadow-md rounded-md">
        <p className="font-bold text-2xl">Hi 👋 {username} !</p>
        <p className="font-semibold md:text-4xl text-2xl"> Your Total Expenses </p>
        {loading ? (
          <p className="font-bold text-4xl md:h-[96px] h-auto flex items-center text-center">Loading ...</p>
        ) : (
          <p className="font-bold md:text-8xl text-6xl"> ₹ {value}</p>
        )}
        {/*<p className="font-bold text-xl">That's ₹ up from last week</p>*/}
      </div>
    </>
  );
}

export default Overview;
