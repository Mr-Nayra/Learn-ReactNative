import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

const Card = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width; //on andriod window is excluding statusbar and screen is including status bar

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
