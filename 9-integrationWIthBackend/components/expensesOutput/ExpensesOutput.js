import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      {expenses.length === 0 ? (
        <Text style={styles.infoText}>{fallBackText}</Text>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  infoText: {
    color: GlobalStyles.colors.primary800,
    marginTop: 8,
    textAlign: "center",
    fontSize: 16,
  },
});
