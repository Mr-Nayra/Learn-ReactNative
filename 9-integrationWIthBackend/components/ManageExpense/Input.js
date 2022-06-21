import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, TextInputConfig }) => {
  const inputStyles = [styles.input];

  if (TextInputConfig && TextInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...TextInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary800,
    marginBottom: 4,
  },
  input: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary800,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary800,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
