import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertext}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numbertext: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});