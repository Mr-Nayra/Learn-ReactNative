import { View, Text, StyleSheet, Button } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const LoadingOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error ocurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    color: GlobalStyles.colors.error500,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
  },
});
