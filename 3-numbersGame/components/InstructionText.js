import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const InstructionText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24
  },
});
