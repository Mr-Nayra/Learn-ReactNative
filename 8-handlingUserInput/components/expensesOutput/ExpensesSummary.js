import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);


  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <View style={styles.border}>
        <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 6,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary800,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
  },
  border: {
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary50,
    padding: 8,
    borderRadius: 4,
    minWidth: 80,
    display: "flex",
    alignItems: 'center'
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary50,
  },
});
