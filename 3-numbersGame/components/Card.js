import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Card = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
