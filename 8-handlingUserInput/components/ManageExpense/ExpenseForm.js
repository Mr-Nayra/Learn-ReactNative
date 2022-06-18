import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, defaultValues }) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsVaild = expenseData.description.trim().length > 0;

    if (amountIsValid && dateIsValid && descriptionIsVaild) {
      onSubmit(expenseData);
    } else {
      Alert.alert("Invalid input", "Please check your input values");
    }
  };

  return (
    <>
      <View>
        <Input
          label="Amount"
          TextInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          TextInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
        <Input
          label="Description"
          TextInputConfig={{
            multiline: true,
            autoCapitalize: "none",
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputValues.description,
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button onPress={onCancel}>Cancel</Button>
        <Button onPress={submitHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
    </>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
});
