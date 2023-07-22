import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}api/expense`;

const getExpenses = async (token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const postExpense = async (expenseData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.post(API_URL, expenseData, config);
  return response.data;
};

const deleteExpense = async (id, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const expService = { getExpenses, postExpense, deleteExpense };

export default expService;
