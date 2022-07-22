import React, { useEffect } from "react";
import { getall } from "../features/expenses/expSlice";
import { reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Overview from "../components/Overview";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { expenses, isLoading, isError, message } = useSelector((state) => state.expenses);

  useEffect(() => {
    if (message === "Unauthorized Action") {
      toast.error("Try Logging in again");
    }

    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getall());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (!user) {
    return <h1>Waiting for User Data .... </h1>;
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:px-8 px-4 md:pt-6 pt-6 gap-4 h-auto">
      <div className="flex flex-col gap-4">
        <Overview expenses={expenses} username={user.name} loading={isLoading} />
        <ExpenseList expenses={expenses} loading={isLoading} />
      </div>
      <ExpenseForm />
    </div>
  );
}

export default Dashboard;
