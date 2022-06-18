import { useContext } from "react";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} fallBackText="No expenses registered"/>
  );
};

export default AllExpenses;
