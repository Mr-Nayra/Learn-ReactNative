import { useContext } from "react";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallBackText="No expenses registered for last 7 days"/>
  );
};

export default RecentExpenses;
