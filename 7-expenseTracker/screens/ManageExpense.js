import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpenseContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    cancelHandler();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    isEditing
      ? expensesCtx.updateExpense(editedExpenseId, {
          description: "Test||",
          amount: 19.99,
          date: new Date("2022-06-17"),
        })
      : expensesCtx.addExpense({
          description: "Test",
          amount: 19.99,
          date: new Date("2022-01-10"),
        });
    cancelHandler();
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttons}>
        <Button onPress={cancelHandler}>Cancel</Button>
        <Button onPress={confirmHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
      {isEditing && (
        <IconButton
          icon="trash"
          color={GlobalStyles.colors.error500}
          size={36}
          onPress={deleteExpenseHandler}
        />
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
});
