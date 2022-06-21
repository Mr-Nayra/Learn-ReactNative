import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpenseContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpenseContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);
      cancelHandler();
    } catch (error) {
      setError("Unable to delete");
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
    } catch (error) {
      setError("Could not save data - please try again later");
      isSubmitting(false);
    }
    navigation.goBack();
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  return isSubmitting ? (
    <LoadingOverlay />
  ) : (
    <View style={styles.rootContainer}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        isEditing={isEditing}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.iconContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "stretch",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  iconContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
