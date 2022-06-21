import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpenses", { expenseId: id });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.textBase}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.primary500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary800,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  priceContainer: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary800,
    padding: 8,
    borderRadius: 4,
    minWidth: 80,
    display: "flex",
    alignItems: "center",
  },
});
